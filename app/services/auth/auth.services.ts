import { LoginTypes, RegisterTypes } from "@/app/types/form.types";
import { httpPostLogin, httpPostRegister } from "../common/https.services";

class AuthApi {
  login = async (loginData: LoginTypes) => {
    const re = await httpPostLogin('api/login', loginData);
    return await re.json()
  }

  register = async (registerData: RegisterTypes) => {
    const re = await httpPostRegister('api/register', registerData);
    return await re.json()
  }
}

const authApi = new AuthApi();
export default authApi;
