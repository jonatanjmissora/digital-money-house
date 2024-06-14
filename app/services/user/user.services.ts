import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

class UserApi {

  getUser = async () => {
    const token = cookies().get('swagger_token')?.value ?? '';
    if (!token) return

    const { username: user_id, email, exp } = jwtDecode(token);
    console.log("**** USER SERVICE", { user_id, email, exp })
    const res = await fetch(`https://digitalmoney.digitalhouse.com/api/users/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": token
      },
    });
    return await res.json()
  }

}

const userApi = new UserApi();
export default userApi;