"use client"
import { JSX } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SVGLogo from '../UI/SVGLogo'

export default function NavbarContainer({ slot }: { slot: React.ReactNode }) {
  const pathname = usePathname();
  const rootPathname = pathname.split("/")[1];
  const isDashboardPath = rootPathname === 'dashboard';
  const isRegisterPath = rootPathname === 'register';
  const isHomePath = rootPathname === '';
  const headerBg =
    isHomePath || isDashboardPath ? 'bg-my-dark-grey' : 'bg-primary';
  const textLogo =
    isHomePath || isDashboardPath ? 'text-primary' : 'text-black';
  return (
    <header
      className={`w-full flex justify-between items-center px-5 py-3 ${headerBg}`}>

      {<Link id="logo" href="/">
        <SVGLogo className={`h-8 ${textLogo}`} />
      </Link>}

      {isHomePath && (<nav className="flex gap-[20px]">
        <Link href="/login" className="login nav-btn text-primary border-primary">
          Ingresar
        </Link>
        <Link href="/register" className="register nav-btn bg-primary border-primary">
          Crear cuenta
        </Link>
      </nav>)}

      {isRegisterPath && (
        <Link
          href="/login"
          className="login nav-btn border-my-light-grey bg-my-light-grey text-white"
        >
          Iniciar sesión
        </Link>
      )}
      {isDashboardPath && (<>{slot}</>)}
    </header>
  )
}
