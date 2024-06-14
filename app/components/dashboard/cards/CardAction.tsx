import React from 'react'
import SVGPlus from '../../UI/SVGPlus'
import SVGRightArrow from '../../UI/SVGRightArrow'
import Link from 'next/link'

export default function CardAction() {
  return (
    <Link href={"/dashboard/cards/new"} className='card bg-my-dark-grey text-white p-8'>
      <p>Agregá tu tarjeta de débito o crédito</p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-5 mt-6'>
          <SVGPlus className='text-primary' />
          <span>Nueva tarjeta</span>
        </div>
        <SVGRightArrow className='text-primary' />
      </div>
    </Link>
  )
}
