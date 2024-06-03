import { useEffect } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PasswordFormData } from '@/app/types/form.types';
import { passwordSchema } from '@/app/schema/form.schema';
import authApi from '@/app/services/auth/auth.services';
import { useRouter } from 'next/navigation';
import { LoginResponseType, LoginTypes } from '@/app/types/login.types';
import Spinner from './UI/Spinner';

const errorInSpanish = (error: string) => {
  if(error === "user not found") return "Usuarion no encontrado"
  if(error === "invalid credentials") return "Contraseña no corresponde"
  return
}

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
    const loginUserData = { email: mailValue, password: data.password };
 
    try {
      const res = await authApi.login(loginUserData);
      console.log(res);
      if(res.token){
        alert("si")
      } 
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error.message);
        console.error(error.message);
      }
      setStep(1);
    }

    /*
    try {
      const { resData, error } = await authApi.login(loginUserData);
      console.log({ resData, error });
      if (error === '') {
        setLoginError('');
        //TODO guadar token en en cookies
        router.push("/dashboard")
      } else throw new Error(error);
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error.message);
        console.error(error.message);
      }
      setStep(1);
    }
    */
    
  }

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
      <button
        className="form-btn bg-primary"
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ? <Spinner /> : "Continuar"}
      </button>

      <p className="text-red-600 text-[15px] text-center font-semibold">
        {errors.password?.message}
      </p>
    </form>
  )
}
