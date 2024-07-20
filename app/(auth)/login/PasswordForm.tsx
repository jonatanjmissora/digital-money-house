import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordSchema } from '@/app/schema/form.schema';
import authApi from '@/app/services/auth/auth.services';
import { useRouter } from 'next/navigation';
import { PasswordType } from '@/app/types/form.types';
import { SubmitForm } from '@/app/components/form/SubmitForm';
import { InputForm } from '@/app/components/form/InputForm';

type PasswordFormTypes = {
  mailValue: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLoginError: React.Dispatch<React.SetStateAction<string>>;
};

export const PasswordForm = ({ mailValue, setStep, setLoginError }: PasswordFormTypes) => {

  const router = useRouter()

  const loginPasswordMethods = useForm<PasswordType>({
    resolver: yupResolver(passwordSchema),
  })
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setFocus,
    control,
  } = loginPasswordMethods

  useEffect(() => {
    setFocus('password');
  }, [setFocus]);

  const hasValue = useWatch({
    control,
    name: 'password',
  });

  const inputClassHasValue = hasValue && 'text-4xl';
  const hasError = errors.password?.message;
  const errorClass = hasError && 'outline-[3px] outline-red-700';

  const onSubmit: SubmitHandler<PasswordType> = async (data) => {
    setLoginError("")
    const loginData = { email: mailValue, password: data.password };

    const { status, response, error } = await authApi.login(loginData)
    if (error) {
      setLoginError(error);
    }
    else {
      router.replace("/dashboard")
    }
    setStep(1);
  }

  return (
    <FormProvider {...loginPasswordMethods}>
      <form
        className="flex flex-col text-center gap-4 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-white text-center my-[20px] text-[20px] font-[700]">
          Ingresá tu contraseña
        </p>

        <InputForm
          label="password"
          placeholder="Contraseña"
          error={errors?.password?.message || ''}
        />

        <SubmitForm text={'Continuar'} isLoading={isSubmitting} />

        <p id="login-password-error" className="text-red-600 text-[15px] text-center font-semibold absolute -bottom-[2rem] w-full">
          {errors.password?.message}
        </p>
      </form>
    </FormProvider>
  )
}
