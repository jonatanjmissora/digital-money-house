import { LoginResponseType, LoginTypes } from "@/app/types/login.types";
import { httpPostLogin, httpPostRegister } from "../common/https.services";
import { RegisterFormData } from "@/app/types/form.types";

class AuthApi {
  login = async (loginData: LoginTypes) => {
    const re = await httpPostLogin('api/login', loginData);
    if (!re.ok) {
      console.error('status => ', re.status);
      if (re.status === 401)
        throw new Error(`Contraseña incorrecta para ${loginData.email}`);
      if (re.status === 404) throw new Error(`Usuario no encontrado`);
    }
    else {

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
