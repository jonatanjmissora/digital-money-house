import React from 'react'
import SVGRightArrow from '../../UI/SVGRightArrow'
import Link from 'next/link'

export default function UserCards() {
  return (
    <Link href={"/dashboard/cards"}
      className='card bg-primary py-8 px-8 pr-16 text-xl font-semibold flex justify-between items-center'>
      <p>Gestioná tus medios de pago </p>
      <SVGRightArrow />
    </Link>
  )
}
