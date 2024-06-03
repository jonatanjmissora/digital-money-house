'use client';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormData } from '@/app/types/form.types';
import { registerSchema } from '@/app/schema/form.schema';
import Link from 'next/link';
import InputForm from '@/app/components/login/UI/InputForm';
import { SubmitForm } from '@/app/components/login/UI/SubmitForm';
import authApi from '@/app/services/auth/auth.services';

export default function Register() {
  const router = useRouter();
  const registerMethods = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });
  const {
    handleSubmit,
    setFocus,
    formState: { errors },
  } = registerMethods;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRegister, setUserRegister] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    dni: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
  });

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  const onSubmit: SubmitHandler<RegisterFormData> = async(data) => {
    alert(JSON.stringify(data, null, 2));
    try {
      const { resData, error } = await authApi.register(data);
      console.log({ resData, error });
      if (error === '') {
        router.push("/register/success")
      } else throw new Error(error);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <section className="w-full h-screen bg-my-dark-grey flex flex-col justify-center items-center">
      <Link href={'/'} className="absolute top-[1rem] right-[1rem] text-white">
        Home
      </Link>
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
              <SubmitForm text="Crear cuenta" isLoading={isLoading} />

              <p className="text-my-red text-[15px] text-center mt-4">
                {errors?.firstName?.message ||
                  errors?.lastName?.message ||
                  errors?.dni?.message ||
                  errors?.email?.message ||
                  errors?.password?.message ||
                  errors?.password2?.message ||
                  errors?.phone?.message}
              </p>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}
