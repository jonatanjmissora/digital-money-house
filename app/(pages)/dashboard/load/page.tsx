import SVGCard from '@/app/components/UI/SVGCard'
import SVGProfile from '@/app/components/UI/SVGProfile'
import SVGRightArrow from '@/app/components/UI/SVGRightArrow'
import Link from 'next/link'
import React from 'react'

export default function Load() {
  return (
    <article className="flex-1 h-full flex flex-col justify-start gap-5  bg-my-light-light-grey py-4 px-[10%]">
      <Link href={"/dashboard/load/bank"}
        className='card px-8 py-16 bg-my-black text-primary flex justify-between items-center'
      >
        <div className='flex justify-center items-center gap-4 text-2xl font-semibold'>
          <SVGProfile />
          Transferencia bancaria
        </div>
        <SVGRightArrow />
      </Link>

      <Link href={"/dashboard/load/cards"}
        className='card px-8 py-16 bg-my-black text-primary flex justify-between items-center'
      >
        <div className='flex justify-center items-center gap-4 text-2xl font-semibold'>
          <SVGCard />
          Seleccionar tarjeta
        </div>
        <SVGRightArrow />
      </Link>
    </article>
  )
}

