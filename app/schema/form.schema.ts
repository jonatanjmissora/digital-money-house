/////////////////////////////////////////////////////////////////////////////////////////////////
//                                  MAIL FORM
/////////////////////////////////////////////////////////////////////////////////////////////////

import * as yup from 'yup';

export const mailSchema = yup
  .object({
    mail: yup
      .string()
      .required('Por favor, complete su e-mail')
      .matches(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i,
        'E-mail incorrecto. Vuelva a intentarlo'
      ),
  })
  .required();

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                  PASSWORD FORM
/////////////////////////////////////////////////////////////////////////////////////////////////

export const passwordSchema = yup
  .object({
    password: yup
      .string()
      .required('Por favor, complete contraseña')
      .min(6, 'Contraseña con un mínimo de 6 caracteres')
      .max(20, 'Contraseña con un máximo de 20 caracteres'),
  })
  .required();

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                  REGISTER FORM
/////////////////////////////////////////////////////////////////////////////////////////////////

const ERRORTEXT = {
  mail: 'E-mail incorrecto. Vuelva a intentarlo',
  dni: 'DNI mínimo de 7 dígitos numéricos',
  phone: 'Telefono mínimo de 9 dígitos numéricos',
};

const requiredRes = (label: string) => {
  return `Por favor, complete su ${label}`;
};

export const registerSchema = yup
  .object()
  .shape({
    firstName: yup.string().required(requiredRes('nombre')),
    lastName: yup.string().required(requiredRes('apellido')),
    dni: yup.string().matches(/^\d{7,}$/, ERRORTEXT.dni),
    mail: yup
      .string()
      .matches(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i,
        ERRORTEXT.mail
      ),
    password: yup
      .string()
      .min(6, 'Contraseña con un mínimo de 6 caracteres')
      .max(20, 'Contraseña con un máximo de 20 caracteres')
      .matches(/[0-9]/, 'Contraseña con al menos un número')
      .matches(/[a-z]/, 'Contraseña con al menos una minúscula')
      .matches(/[A-Z]/, 'Contraseña con al menos una mayúscula')
      .matches(/[^\w]/, 'Contraseña con al menos un caracter especial'),
    password2: yup
      .string()
      .min(6, 'Contraseña con un mínimo de 6 caracteres')
      .max(20, 'Contraseña con un máximo de 20 caracteres')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
    phone: yup.string().matches(/^\d{9,}$/, ERRORTEXT.phone),
  })
  .required();
