import React from 'react'
import Menu from '../components/dashboard/Menu';

export default function DashboardLayout({ children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-1 w-screen flex justify-start items-center ">
      <Menu />
      {children}
    </section>
  );
}