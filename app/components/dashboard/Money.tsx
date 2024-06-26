import Link from 'next/link'
import React from 'react'

export default function Money({ amount }: { amount: number }) {
  return (
    <article className='flex flex-col w-full bg-my-black text-white card p-6'>
      <div className='place-self-end flex gap-4 px-6'>
        <Link className='border-b border-my-light-grey text-xs' href={"/dashboard/cards"}>Ver tarjetas</Link>
        <Link className='border-b border-my-light-grey text-xs' href={"/dashboard/load/bank"}>Ver CVU</Link>
      </div>
      <p className='px-3 text-xs'>Dinero disponible</p>
      <p className='w-max text-xl font-semibold border-2 border-primary rounded-full p-3 mx-2 my-2'>$ {amount ? amount : "0,00"}</p>

    </article>
  )
}
