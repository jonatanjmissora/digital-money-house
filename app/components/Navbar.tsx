'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SVGLogo from './UI/SVGLogo';
import UserNavbar from './UserNavbar';

export default async function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isDashboardPath = pathname === '/dashboard';
  const isRegisterPath = pathname === '/register';
  const isHomePath = pathname === '/';
  const headerBg =
    isHomePath || isDashboardPath ? 'bg-my-dark-grey' : 'bg-primary';
  const textLogo =
    isHomePath || isDashboardPath ? 'text-primary' : 'text-black';

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <header
      className={`w-full h-nav fixed z-10 flex justify-between items-center px-[20px] ${headerBg}`}
    >
      <Link href="/">
        <SVGLogo className={`w-[87px] h-[33px] ${textLogo}`} />
      </Link>
      {isHomePath && (
        <nav className="flex gap-[20px]">
          <Link href="/login" className="nav-btn text-primary border-primary">
            Ingresar
          </Link>
          <Link href="/register" className="nav-btn bg-primary border-primary">
            Crear cuenta
          </Link>
        </nav>
      )}
      {isRegisterPath && (
        <Link
          href="/login"
          className="nav-btn border-my-light-grey bg-my-light-grey text-white"
        >
          Iniciar sesión
        </Link>
      )}
      {isDashboardPath && <UserNavbar />}
    </header>
  );
}
