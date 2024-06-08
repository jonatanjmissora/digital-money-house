import Link from 'next/link'
import React from 'react'

export default function Money() {
  return (
    <article className='flex flex-col w-full bg-my-black text-white card p-6'>
      <div className='place-self-end flex gap-4 px-6'>
        <Link className='border-b border-my-light-grey text-xs' href={"/dashboard/account/info"}>Ver tarjetas</Link>
        <Link className='border-b border-my-light-grey text-xs' href={"/dashboard/account/info"}>Ver CVU</Link>
      </div>
      <p className='px-6 text-xs'>Dinero disponible</p>
      <p className='w-max text-xl font-semibold border-2 border-primary rounded-full p-3 my-2'>$ 6.890.534,17</p>

    </article>
  )
}
