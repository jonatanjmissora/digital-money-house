import { useEffect } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PasswordFormData } from '@/app/types/form.types';
import { passwordSchema } from '@/app/schema/form.schema';
import authApi from '@/app/services/auth/auth.services';
import { useRouter } from 'next/navigation';
import SVGSpinner from '@/app/components/UI/SVGSpinner';

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
  } = useForm<PasswordFormData>({
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

  const onSubmit: SubmitHandler<PasswordFormData> = async (data) => {
    const loginData = { email: mailValue, password: data.password };

    try {
      const resp = await authApi.login(loginData)
      const { token, error } = await resp.json();
      console.log({token, error})
      if (error) setLoginError(error)
      else {
        alert("usuario loggueado !!")
      }

    } catch (e) {
      setLoginError("Fallo al conectar (404)");
      setStep(1);
    }

  }

  return (

    <form
      className="flex flex-col text-center gap-4 mt-[15%]"
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
      <button
        className="form-btn bg-primary"
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ?
          <SVGSpinner />
          :
          "Continuar"}
      </button>

      <p className="text-red-600 text-[15px] text-center font-semibold">
        {errors.password?.message}
      </p>
    </form>
  )
}
