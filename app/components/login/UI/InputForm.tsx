import { useFormContext, useWatch } from 'react-hook-form';

type InputFormTypes = {
  label: string;
  placeholder: string;
  error: string;
};

export default function InputForm({
  label,
  placeholder,
  error,
}: InputFormTypes) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [hasPassword, hasPassword2] = useWatch({
    name: ['password', 'password2'],
  });

  // clases para mostrar cuando hay error,
  // y cambiar el tamaño de los puntos en el password
  const isPassword = label === 'password';
  const isPassword2 = label === 'password2';
  const inputClassHasValue = isPassword && hasPassword && 'text-4xl';
  const inputClassHasValue2 = isPassword2 && hasPassword2 && 'text-4xl';
  const inputClassHasError = error !== '' && 'outline-[3px] outline-red-700';
  const typeMode = isPassword || isPassword2 ? 'password' : 'text';

  return (
    <input
      className={`form-input ${inputClassHasValue} ${inputClassHasValue2} ${inputClassHasError}`}
      placeholder={placeholder}
      type={typeMode}
      {...register(label)}
      autoComplete="on"
    />
  );
}
