'use client';
import { MailForm } from '@/app/components/login/MailForm';
import { PasswordForm } from '@/app/components/login/PasswordForm';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginForm() {
  const [mailValue, setMailValue] = useState('');
  const [step, setStep] = useState(1);

  return (
    <section className="h-screen w-screen flex flex-col justify-start items-center bg-my-dark-grey pt-20">
      <Link href={'/'} className="absolute top-[1rem] right-[1rem] text-white">
        Home
      </Link>
      {step === 1 && <MailForm setStep={setStep} setMailValue={setMailValue} />}

      {step === 2 && <PasswordForm setStep={setStep} mailValue={mailValue} />}
    </section>
  );
}


//TODO hacer el loading y el error de logueo