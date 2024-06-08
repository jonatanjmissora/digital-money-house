'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/app/schema/form.schema';
import authApi from '@/app/services/auth/auth.services';
import { InputForm } from '@/app/components/form/InputForm';
import { RegisterTypes } from '@/app/types/form.types';
import { SubmitForm } from '@/app/components/form/SubmitForm';

export default function Register() {
  const router = useRouter();
  const registerMethods = useForm<RegisterTypes>({
    resolver: yupResolver(registerSchema),
  });
  const {
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = registerMethods;

  const [registerError, setRegisterError] = useState<string>("");

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  const onSubmit: SubmitHandler<RegisterTypes> = async (data) => {
    setRegisterError("")
    const { status, response, error } = await authApi.register(data)
    if (error) {
      setRegisterError(error)
    }
    else {
      router.replace(`/login`)
    }

  };

  return (
    <section className="w-full h-screen bg-my-dark-grey flex flex-col justify-start items-center pt-[7rem]">
      <FormProvider {...registerMethods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 justify-center items-center min-h-[380px]"
        >
          <h4 className="text-white text-center my-[20px] text-[20px] font-[700]">
            Crear cuenta
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 md:gap-x-16">
            <InputForm
              label="firstName"
              placeholder="Nombre*"
              error={errors?.firstName?.message || ''}
            />

            <InputForm
              label="lastName"
              placeholder="Apellido*"
              error={errors?.lastName?.message || ''}
            />

            <InputForm
              label="dni"
              placeholder="DNI*"
              error={errors?.dni?.message || ''}
            />

            <InputForm
              label="email"
              placeholder="Correo electrónico*"
              error={errors?.email?.message || ''}
            />
          </div>
          <p className="text-my-white-bone sm:text-[12.5px] text-[12px] text-center sm:w-max w-[370px]">
            Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
            carácter especial, una mayúscula y un número
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 md:gap-x-16">
            <InputForm
              label="password"
              placeholder="Contraseña*"
              error={errors?.password?.message || ''}
            />

            <InputForm
              label="password2"
              placeholder="Confirmar contraseña*"
              error={errors?.password2?.message || ''}
            />

            <InputForm
              label="phone"
              placeholder="Telefono*"
              error={errors?.phone?.message || ''}
            />

            <div>
              <SubmitForm text="Crear cuenta" isLoading={isSubmitting} />

              <p className="text-my-red text-[15px] text-center mt-4">
                {errors?.firstName?.message ||
                  errors?.lastName?.message ||
                  errors?.dni?.message ||
                  errors?.email?.message ||
                  errors?.password?.message ||
                  errors?.password2?.message ||
                  errors?.phone?.message ||
                  registerError}
              </p>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}
