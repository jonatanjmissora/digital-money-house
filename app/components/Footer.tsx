export default function Footer() {
  return (
    <footer className="flex items-center bg-my-light-grey text-primary text-xs px-8 lg:py-4 py-6">
      © {new Date().getFullYear()} Digital Money House
    </footer>
  );
}
