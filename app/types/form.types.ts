export type MailFormData = {
  email: string;
};

export type PasswordFormData = {
  password: string;
};

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  password2: string;
  phone: string;
}
