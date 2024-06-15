"use client"
import SVGPlus from '@/app/components/UI/SVGPlus';
import { CardRow } from '@/app/components/dashboard/load/CardRow';
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

export default function LoadCards() {
  const [actualCardId, setActualCardId] = useState<number>(1)

  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-between 2xl:justify-start 2xl:gap-4 bg-my-light-light-grey py-6 px-[10%]">
      <div className='card bg-my-black p-12 flex flex-col gap-5'>
        <h2 className='text-2xl font-bold text-primary'>Seleccionar tarjetas</h2>
        <div className='card bg-white p-8'>

          <h3 className='font-semibold tracking-wide py-1'>Tus tarjetas</h3>
          {
            CARDS.map((card) => <CardRow key={card.id} card={card} actualCardId={actualCardId} changeCardId={setActualCardId} />)
          }
        </div>
        <div className='flex justify-between'>
          <Link href={"/dashboard/cards/new"} className='flex justify-center items-center gap-4'>
            <SVGPlus className='text-primary' />
            <span className='text-primary font-semibold text-xl'>Nueva tarjeta</span>
          </Link>
          <Link href={"/dashboard/load/cards/amount"} className='bg-primary form-btn'>Continuar</Link>
        </div>
      </div>
    </article>
  )
}

