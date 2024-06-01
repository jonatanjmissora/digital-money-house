import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PasswordFormData } from '@/app/types/form.types';
import { passwordSchema } from '@/app/schema/form.schema';
import authApi from '@/app/services/auth/auth.services';
import { useRouter } from 'next/navigation';

type PasswordFormTypes = {
  mailValue: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const PasswordForm = ({ mailValue, setStep }: PasswordFormTypes) => {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
    setFocus,
    control,
    reset,
    resetField,
  } = useForm<PasswordFormData>({
    resolver: yupResolver(passwordSchema),
  });
  useEffect(() => {
    setFocus('password');
  }, [setFocus]);

  const onSubmit = async (data: PasswordFormData) => {
    const loginUserData = { email: mailValue, password: data.password };
    alert(JSON.stringify(loginUserData, null, 2));

    if (loginUserData.email !== "" && loginUserData.password !== "") {

      try {
        //setIsLoading(true);
        const loginResponse = await authApi.login(loginUserData);
        console.log(loginResponse);
        reset();
        //setLoginError('');
        //TODO guadar token en en cookies
        router.push('/dashboard');
      } catch (error) {
        if (error instanceof Error) {
          //setLoginError(error.message);
          console.log(error.message);
        }
        setStep(1);
        resetField('password');
      } finally {
        //setIsLoading(false);
      }

    }
  };

  const hasValue = useWatch({
    control,
    name: 'password',
  });

  const inputClassHasValue = hasValue && 'text-4xl';
  const hasError = errors.password?.message;
  const errorClass = hasError && 'outline-[3px] outline-red-700';

  return (
    <form
      className="flex flex-col text-center gap-4"
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
      />
      <button className="form-btn bg-primary" type="submit">
        Continuar
      </button>

      <p className="text-red-600 text-[15px] text-center font-semibold">
        {errors.password?.message}
      </p>
    </form>
  );
};
