import Link from "next/link";

const localHost = "http://localhost:3000/";

export default async function Dashboard() {

  const getData = async () => {
    const res = await fetch(`${localHost}api/user`)
    return res.json()
  }

  const data = await getData()
  console.log(data)

  return (
    <section className="h-screen w-screen flex flex-col justify-start items-center bg-my-dark-grey pt-20">
      <Link href={'/'} className="absolute top-[1rem] right-[1rem] text-white">
        DASHBOARD
      </Link>
      <h2 className="text-4xl text-center font-bold text-white">Bienvenido Usuario Logueado !!!</h2>
    </section>
  )
}