'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function App() {
  const [mailValue, setMailValue] = useState('');
  const [step, setStep] = useState(1);

  return (
    <section className="h-screen w-screen flex flex-col gap-4 justify-start items-center bg-my-dark-grey pt-20">
      <Link
        href={'/login'}
        className="form-btn bg-transparent border border-primary text-primary"
      >
        Ingresar
      </Link>
      <Link href={'/register'} className="form-btn bg-primary">
        Crear cuenta
      </Link>
    </section>
  );
}
