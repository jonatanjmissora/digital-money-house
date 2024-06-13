import userApi from "@/app/services/user/user.services";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

const capitalize = (str: string) => {
  if (str) return str.charAt(0).toUpperCase() + str.slice(1)
  else return ""

}

export default async function UserNav() {
  const user = await userApi.getUser()

  if (user) return (
    <div className="text-white font-semibold flex items-center gap-4">
      <span className="text-xl text-black bg-primary px-2 py-1 rounded-lg">{`${capitalize(user?.firstname)[0]}${capitalize(user?.lastname)[0]}`}</span>
      <span>Hola, {`${capitalize(user?.firstname)} ${capitalize(user?.lastname)}`}</span>
    </div>
  )

  return <Link href="/login" className="nav-btn text-white">Ingresar</Link>
}

