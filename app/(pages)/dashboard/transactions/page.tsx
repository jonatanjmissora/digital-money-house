"use client"

import SVGFilter from '@/app/components/UI/SVGFilter'
import SVGSearch from '@/app/components/UI/SVGSearch'
import Transactions from '@/app/components/dashboard/Transactions'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function TransactionsPage() {

  const pathname = usePathname()
  const isTransactions = pathname.split("/")[2] === "transactions"

  return (
    <article className="flex-1 h-full flex flex-col justify-center gap-5 2xl:justify-start bg-my-light-light-grey py-4 px-[10%]">
      <div className='flex gap-5'>
        <div className='card p-5 flex gap-2 items-center w-full bg-white text-lg'>
          <SVGSearch className="w-5 h-5" />
          <input type="text" placeholder='Buscar en tu actividad' />
        </div>
        <button className='bg-primary px-6 py-2 card flex justify-between items-center gap-12 text-lg font-semibold'>
          Filtrar
          <SVGFilter />
        </button>
      </div>
      <Transactions pagination={isTransactions} />
    </article>
  )
}
