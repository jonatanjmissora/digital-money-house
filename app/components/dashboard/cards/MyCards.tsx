import React from 'react'

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

export default function MyCards() {
  return (
    <article className='card bg-white p-8'>
      <h3 className='font-semibold tracking-wide py-1'>Tus tarjetas</h3>
      {
        CARDS.map((card) => <Card key={card.id} card={card} />)
      }
    </article>
  )
}

const Card = ({ card }) => {

  const { id, card_number } = card

  return (
    <div className='tracking-normal flex gap-4 justify-between items-center border-b border-black py-2 opacity-75 text-sm'>
      <div className='flex justify-between items-center gap-5'>
        <span className='bg-primary rounded-full w-8 aspect-square'></span>
        <span>Terminada en {card_number}</span>
      </div>
      <span className='font-bold'>Eliminar</span>
    </div>
  )
}

