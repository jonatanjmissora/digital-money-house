import { LoginResponseType, LoginTypes } from "@/app/types/login.types";
import { httpPostLogin, httpPostRegister } from "../common/https.services";
import { RegisterFormData } from "@/app/types/form.types";

type tokenType = {token: string}
type errorType = {error: string}
type resDataType = {
  token?: string;
  error?: string
}


class AuthApi {
  login = async (data: LoginTypes): Promise<resDataType>  => {
    const re = await httpPostLogin('api/login', data);
    if (!re.ok) {
      console.error('status => ', re.status);
      if (re.status === 401)
        throw new Error(`Contraseña incorrecta para ${data.email}`);
      if (re.status === 404) throw new Error(`Usuario no encontrado`);
    }
    return re.json()
  }

/*
  login = async (data: LoginTypes) => {
    httpPostLogin('api/login', data);
  }
*/

  register = (data: RegisterFormData) =>
    httpPostRegister('api/users', data);
}

const authApi = new AuthApi();
export default authApi;
