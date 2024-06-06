export default function Footer() {
  return (
    <footer className="relative h-[70px] px-[20px] flex items-center bg-my-light-grey text-primary">
      © {new Date().getFullYear()} Digital Money House
    </footer>
  );
}
