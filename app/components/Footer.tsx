export default function Footer() {
  return (
    <footer className="flex items-center bg-my-light-grey text-primary text-sm px-5 lg:py-6 py-6">
      © {new Date().getFullYear()} Digital Money House
    </footer>
  );
}
