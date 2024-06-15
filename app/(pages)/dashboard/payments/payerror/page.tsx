import SVGWrong from '@/app/components/UI/SVGWrong'
import Link from 'next/link'
import React from 'react'

export default function PayError() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-start gap-6 bg-my-light-light-grey py-6 px-[10%] text-white">
      <div className='card bg-my-black flex flex-col gap-4 justify-center items-center p-12 text-white'>
        <SVGWrong className='text-black w-14' />
        <h2 className='text-2xl font-bold pb-2'>Hubo un problema en tu pago</h2>
        <div className='w-full border-b border-gray-500'></div>

        <div className='flex flex-col justify-center items-center opacity-75'>
          <p>Puede deberse a fondos insuficientes</p>
          <p>Comunicate con la entidad emisora de la tarjeta</p>
        </div>
      </div>

      <div className='flex gap-4'>
        <Link className='ml-auto form-btn bg-primary text-black' href={"/dashboard/payments"}>Volver a intentarlo</Link>

      </div>

    </article>
  )
}