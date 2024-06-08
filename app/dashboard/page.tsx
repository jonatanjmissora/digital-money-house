import { cookies, headers } from "next/headers";
import Link from "next/link";
import Menu from "../components/dashboard/Menu";
import Content from "../components/dashboard/Content";

const localHost = "http://localhost:3000/";

export default async function Dashboard() {

  const getData = async () => {

    const user_id = cookies().get('swagger_user_id')?.value ?? '';
    const accessToken = cookies().get('swagger_token')?.value ?? '';
    if (user_id === "" || accessToken === "") return
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
    <section className="flex-1 w-screen flex justify-start items-center pt-[64px]">
      <Menu />
      <Content />
    </section>
  )
}