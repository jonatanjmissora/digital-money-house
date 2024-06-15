import Link from 'next/link'
import React from 'react'

export default function PaymentsBill() {

  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-start gap-2 bg-my-light-light-grey py-6 px-[10%]">
      <div className='card p-12 flex flex-col gap-6 w-full bg-my-black'>
        <h2 className='text-2xl font-bold text-primary pb-4'>Número de cuenta sin el primer 2</h2>

        <div>
          <input type="number" className='px-4 py-4 card w-1/2' />
          <p className='text-white text-[0.6rem] my-4'>{`Son 11 números sin espacios, sin el "2" inicial. Agregá ceros adelante si tenés menos`}</p>
        </div>

        <div className='w-full'>
          <Link className='bg-primary ml-auto form-btn' href={"/dashboard/payments/bill/cards"}>Continuar</Link>
        </div>
      </div>

    </article>
  )
}