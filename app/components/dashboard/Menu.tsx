"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { text: "Inicio", href: "/dashboard", link: undefined },
  { text: "Actividad", href: "/dashboard/transactions", link: "transactions" },
  { text: "Tu perfil", href: "/dashboard/profile", link: "profile" },
  { text: "Cargar dinero", href: "/dashboard/load", link: "load" },
  { text: "Pagar Servicios", href: "/dashboard/payments", link: "payments" },
  { text: "Tarjetas", href: "/dashboard/cards", link: "cards" },
]

export default function Menu() {

  const pathname = usePathname()
  const menuLinkPath = pathname.split("/")[2]

  return (
    <aside className="w-[15%] h-full bg-primary">
      <nav className="flex flex-col gap-3 p-8">
        {LINKS.map(link =>
          <Link
            className={`${menuLinkPath === link.link && "font-bold"}`}
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
