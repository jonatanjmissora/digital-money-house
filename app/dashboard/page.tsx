import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="h-screen w-screen flex flex-col justify-start items-center bg-my-dark-grey pt-20">
      <Link href={'/'} className="absolute top-[1rem] right-[1rem] text-white">
        Home
      </Link>
      <h2 className="text-4xl text-center font-bold text-white">Bienvenido Usuario Logueado !!!</h2>
    </section>
  )
}