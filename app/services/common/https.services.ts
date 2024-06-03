import { LoginResponseType, LoginTypes } from "@/app/types/login.types";

const API_URL = 'https://digitalmoney.digitalhouse.com/';

type tokenType = {token: string}
type errorType = {error: string}
type resDataType = tokenType | errorType

type httpPostTypesResponse = {
  resData: resDataType;
  error: string;
}

export const httpPost = async (endpoint: string, datos: LoginTypes) => {
  try {
    let res = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    let response = {
      resData: await res.json(),
      error: '',
    } as httpPostTypesResponse;
    if (!res.ok) {
      console.error('status => ', res.status);
      if (res.status === 401)
        response.error = `Contraseña incorrecta para ${datos.mail}`;
      if (res.status === 404) response.error = `Usuario no encontrado`;
    }
    return response;
  } catch (e) {
    throw new Error('Fallo al conectar');
  }
};
