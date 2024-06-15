"use client"

import { CardRow } from '@/app/components/dashboard/load/CardRow'
import Link from 'next/link';
import React, { useState } from 'react'

type CardType = {
  id: number;
  card_number: string;
}

const CARDS: CardType[] = [{
  id: 1,
  card_number: "0000",
},
{
  id: 2,
  card_number: "4067",
},
{
  id: 3,
  card_number: "8040",
},
{
  id: 4,
  card_number: "9006",
},
];

export default function PaymentBillCard() {

  const [actualCardId, setActualCardId] = useState<number>(1)

  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-start gap-4 bg-my-light-light-grey py-6 px-[10%]">
      <div className='card p-12 flex flex-col gap-5 items-center w-full bg-my-black'>
        <div className='w-full flex justify-between items-center' >
          <span className='text-2xl font-bold text-primary'>Cablevisión</span>
          <span className='text-ms text-white'>Ver detalles del pago</span>
        </div>

        <div className='w-full border-b border-gray-500'></div>

        <div className='w-full flex justify-between items-center' >
          <span className='text-2xl font-bold text-white'>Total a pagar</span>
          <span className='text-2xl text-white font-bold'>$1.153,75</span>
        </div>

      </div>
      <div className='card bg-white p-8'>

        <h3 className='font-semibold tracking-wide py-1'>Tus tarjetas</h3>
        {
          CARDS.map((card) => <CardRow key={card.id} card={card} actualCardId={actualCardId} changeCardId={setActualCardId} />)
        }
      </div>
      <div className='w-full'>
        <Link className='form-btn bg-primary ml-auto' href={"/dashboard/payments/bill/cards/confirm"}>Pagar</Link>
      </div>
    </article>
  )
}