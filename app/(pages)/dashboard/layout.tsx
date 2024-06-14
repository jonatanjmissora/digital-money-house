import Menu from '@/app/components/dashboard/Menu';
import React from 'react'

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