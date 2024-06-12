import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

class AccountApi {

  getAccount = async () => {
    const token = cookies().get('swagger_token')?.value ?? '';
    if (!token) return

    const { username: user_id, email, exp } = jwtDecode(token);
    console.log("**** RESPUESTA del token", { user_id, email, exp })
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/account`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": token
      },
    });
    return await res.json()
  }

}

const accountApi = new AccountApi();
export default accountApi;