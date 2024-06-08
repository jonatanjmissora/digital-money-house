import Link from "next/link";

export default function Menu() {
  return (
    <aside className="w-[20%] h-full bg-primary">
      <nav className="flex flex-col gap-3 p-8">
        <Link href={"/dashboard"}>Inicio</Link>
        <Link href={"/dashboard/transactions"}>Actividad</Link>
        <Link href={"/dashboard/user-info"}>Tu perfil</Link>
        <Link href={"/dashboard/load"}>Carar dinero</Link>
        <Link href={"/dashboard/payments"}>Pagar Servicios</Link>
        <Link href={"/dashboard/cards"}>Tarjetas</Link>
        <button className="w-max opacity-50">Cerrar sesión</button>
      </nav>
    </aside>
  )
}
