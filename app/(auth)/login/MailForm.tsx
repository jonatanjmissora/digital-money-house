import { useEffect } from 'react';

import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { mailSchema } from '@/app/schema/form.schema';
import { SubmitForm } from '@/app/components/form/SubmitForm';
import { MailType } from '@/app/types/form.types';
import { InputForm } from '@/app/components/form/InputForm';

type MailFormTypes = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMailValue: React.Dispatch<React.SetStateAction<string>>;
  loginError: string;
};

export const MailForm = ({ setStep, setMailValue, loginError }: MailFormTypes) => {
  useEffect(() => {
    setFocus('email');
  }, []);

  const loginMailMethods = useForm<MailType>({
    resolver: yupResolver(mailSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    setFocus,
    control,
  } = loginMailMethods;

  const onSubmit = (data: MailType) => {
    setMailValue(data.email);
    setStep(2);
  };

  const hasValue = useWatch({ control, name: "email" })

  return (
    <FormProvider {...loginMailMethods}>
      <form
        className="flex flex-col text-center gap-4 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-white text-center my-[20px] text-[20px] font-[700]">
          ¡Hola! Ingresá tu e-mail
        </p>

        <InputForm
          label="email"
          placeholder="Correo electónico"
          error={errors?.email?.message || ''}
        />

        <SubmitForm text={'Continuar'} />

        <Link href={'/register'} className="register form-btn bg-gray-400">
          Crear cuenta
        </Link>

        <p id="login-mail-error" className="text-red-600 text-[15px] text-center font-semibold absolute -bottom-[2rem] w-full">
          {errors.email?.message || !hasValue && loginError}
        </p>
      </form>
    </FormProvider>
  );
};
