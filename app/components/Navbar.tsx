import UserNav from './navbar/UserNav';
import NavbarContainer from './navbar/NavbarContainer';

export default function Navbar() {

  return (
    <NavbarContainer slot={<UserNav />} />
  );
}
