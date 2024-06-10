"use client"
import { JSX } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SVGLogo from '../UI/SVGLogo'

export default function NavbarContainer({ slot }: { slot: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardPath = pathname === '/dashboard';
  const isRegisterPath = pathname === '/register';
  const isHomePath = pathname === '/';
  const headerBg =
    isHomePath || isDashboardPath ? 'bg-my-dark-grey' : 'bg-primary';
  const textLogo =
    isHomePath || isDashboardPath ? 'text-primary' : 'text-black';
  return (
    <header
      className={`w-full flex justify-between items-center px-5 py-3 ${headerBg}`}>

      {<Link href="/">
        <SVGLogo className={`h-8 ${textLogo}`} />
      </Link>}

      {isHomePath && (<nav className="flex gap-[20px]">
        <Link href="/login" className="nav-btn text-primary border-primary">
          Ingresar
        </Link>
        <Link href="/register" className="nav-btn bg-primary border-primary">
          Crear cuenta
        </Link>
      </nav>)}

      {isRegisterPath && (
        <Link
          href="/login"
          className="nav-btn border-my-light-grey bg-my-light-grey text-white"
        >
          Iniciar sesión
        </Link>
      )}
      {isDashboardPath && (<>{slot}</>)}
    </header>
  )
}
