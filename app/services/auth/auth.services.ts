import { LoginResponseType, LoginTypes } from "@/app/types/login.types";
import { httpPost } from "../common/https.services";

class AuthApi {
  login = (data: LoginTypes) =>
    httpPost('api/login', data);
}

const authApi = new AuthApi();
export default authApi;
