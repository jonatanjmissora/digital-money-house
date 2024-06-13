"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { text: "Inicio", href: "/dashboard" },
  { text: "Actividad", href: "/dashboard/transactions" },
  { text: "Tu perfil", href: "/dashboard/profile" },
  { text: "Carar dinero", href: "/dashboard/load" },
  { text: "Pagar Servicios", href: "/dashboard/payments" },
  { text: "Tarjetas", href: "/dashboard/cards" },
]

export default function Menu() {

  const pathname = usePathname()
  console.log(pathname)

  return (
    <aside className="w-[15%] h-full bg-primary">
      <nav className="flex flex-col gap-3 p-8">
        {LINKS.map(link =>
          <Link
            className={`${pathname === link.href && "font-bold"}`}
            key={link.text}
            href={link.href}
          >
            {link.text}
          </Link>

        )}
        <button className="w-max opacity-50">Cerrar sesión</button>
      </nav>
    </aside>
  )
}
