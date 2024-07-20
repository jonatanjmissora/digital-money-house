import { useEffect } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordSchema } from '@/app/schema/form.schema';
import authApi from '@/app/services/auth/auth.services';
import { useRouter } from 'next/navigation';
import { PasswordType } from '@/app/types/form.types';
import { SubmitForm } from '@/app/components/form/SubmitForm';

type PasswordFormTypes = {
  mailValue: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setLoginError: React.Dispatch<React.SetStateAction<string>>;
};

export const PasswordForm = ({ mailValue, setStep, setLoginError }: PasswordFormTypes) => {

  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setFocus,
    control,
  } = useForm<PasswordType>({
    resolver: yupResolver(passwordSchema),
  });

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

    <form
      className="flex flex-col text-center gap-4 relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-white text-center my-[20px] text-[20px] font-[700]">
        Ingresá tu contraseña
      </p>
      <input
        type="password"
        placeholder="Contraseña"
        className={`form-input ${inputClassHasValue} ${errorClass}`}
        {...register('password')}
        autoComplete='on'
      />
      <SubmitForm text={'Continuar'} isLoading={isSubmitting} />

      <p id="login-password-error" className="text-red-600 text-[15px] text-center font-semibold absolute -bottom-[2rem] w-full">
        {errors.password?.message}
      </p>
    </form>
  )
}
