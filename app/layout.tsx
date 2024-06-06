import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-screen overflow-x-hidden flex flex-col justify-between bg-orange`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
