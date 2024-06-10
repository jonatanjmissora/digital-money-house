import UserNav from './UserNav';
import NavbarContainer from './NavbarContainer';

export default function Navbar() {

  return (
    <NavbarContainer slot={<UserNav />} />
  );
}
