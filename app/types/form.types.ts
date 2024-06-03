export type MailFormData = {
  mail: string;
};

export type PasswordFormData = {
  password: string;
};

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  dni: string;
  mail: string;
  password: string;
  password2: string;
  phone: string;
}
