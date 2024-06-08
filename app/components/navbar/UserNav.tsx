import { cookies } from "next/headers";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default async function UserNav() {

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
  const name = `${capitalize(userData.firstname)} ${capitalize(userData.lastname)}`
  const avatar = `${capitalize(userData?.firstname)[0]}${capitalize(userData?.lastname)[0]}`

  return (
    <div className="text-white font-semibold flex items-center gap-4">
      <span className="text-xl text-black bg-primary px-2 py-1 rounded-lg">{avatar}</span>
      <span>Hola, {name}</span>
    </div>
  )
}

