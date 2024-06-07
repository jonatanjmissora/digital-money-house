import { LoginTypes, RegisterTypes } from "@/app/types/form.types";

const LOCALHOST = 'http://localhost:3000/';

type tokenType = { token: string }
type errorType = { error: string }
type resDataType = tokenType | errorType

type httpPostTypesResponse = {
  resData: resDataType;
  error: string;
}

export const httpPostLogin = async (endpoint: string, data: LoginTypes) => {
  return await fetch(`${LOCALHOST}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  });
}

export const httpPostRegister = async (endpoint: string, data: RegisterTypes) => {
  return await fetch(`${LOCALHOST}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  });
}