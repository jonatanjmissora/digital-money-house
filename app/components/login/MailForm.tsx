import { useEffect } from 'react';

import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { MailFormData } from '@/app/types/form.types';
import { mailSchema } from '@/app/schema/form.schema';

type MailFormTypes = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMailValue: React.Dispatch<React.SetStateAction<string>>;
  loginError: string;
};

export const MailForm = ({ setStep, setMailValue, loginError }: MailFormTypes) => {
  useEffect(() => {
    setFocus('mail');
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setFocus,
    control,
  } = useForm<MailFormData>({
    resolver: yupResolver(mailSchema),
  });

  const onSubmit = (data: MailFormData) => {
    setMailValue(data.mail);
    setStep(2);
  };

  const hasValue = useWatch({control, name: "mail"})
  const hasError = errors.mail?.message ?? "";
  const errorClass = hasError && 'outline-[3px] outline-red-700';

  return (
    <form
      className="flex flex-col text-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-white text-center my-[20px] text-[20px] font-[700]">
        ¡Hola! Ingresá tu e-mail
      </p>
      <input
        className={`form-input ${errorClass}`}
        placeholder="Correo electónico"
        {...register('mail')}
      />
      <button className="form-btn bg-primary" type="submit">
        Continuar
      </button>

      <Link href={'/register'} className="form-btn bg-gray-400">
        Crear cuenta
      </Link>

      <p className="text-red-600 text-[15px] text-center font-semibold max-w-[350px]">
        {errors.mail?.message || !hasValue && loginError}
      </p>
    </form>
  );
};
