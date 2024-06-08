import { cookies, headers } from "next/headers";
import Link from "next/link";

const localHost = "http://localhost:3000/";

export default async function Dashboard() {

 const getData = async() => {

  const user_id = cookies().get('swagger_user_id')?.value ?? '';
  const accessToken = cookies().get('swagger_token')?.value ?? '';
  if(user_id === "" || accessToken === "") return
  const res = await fetch(`https://digitalmoney.digitalhouse.com/api/users/40`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": accessToken
    },
  });
  return await res.json()
 }

  const userData = await getData()

  return (
    <section className="h-screen w-screen flex flex-col justify-start items-center bg-my-dark-grey pt-20">
      <Link href={'/'} className="absolute top-[1rem] right-[1rem] text-white">
        DASHBOARD
      </Link>
      <h2 className="text-4xl text-center font-bold text-white">Bienvenido Usuario Logueado !!!</h2>
      <h3>data: {JSON.stringify(userData, null, 2)}</h3>
    </section>
  )
}