import authApi from '@/app/services/auth/auth.services';
import { NextRequest, NextResponse } from 'next/server';
import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default async function POST(request: NextRequest) {
  const { email, password } = await loginSchema.validate(await request.json());
  const loginResponse = await authApi.login({ email, password });

  const token = loginResponse.token;

  return NextResponse.json({ token, email });
}
