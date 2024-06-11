'use client';
import { useState } from 'react';
import { MailForm } from './MailForm';
import { PasswordForm } from './PasswordForm';

export default function LoginForm() {
  const [mailValue, setMailValue] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [loginError, setLoginError] = useState<string>("")

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center bg-my-dark-grey">
      {step === 1 && <MailForm setStep={setStep} setMailValue={setMailValue} loginError={loginError} />}

      {step === 2 && <PasswordForm setStep={setStep} mailValue={mailValue} setLoginError={setLoginError} />}
    </section>
  );
}