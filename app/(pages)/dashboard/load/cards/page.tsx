import SVGCheckbox from '@/app/components/UI/SVGCheckbox';
import SVGCheckboxFill from '@/app/components/UI/SVGCheckboxFill';
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

export default function LoadCards() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-between 2xl:justify-start 2xl:gap-4 bg-my-light-light-grey py-6 px-[10%]">
      <div className='card bg-my-black p-12'>
        <h2 className='text-2xl font-bold text-primary pb-6'>Seleccionar tarjetas</h2>
        <div className='card bg-white p-8'>

          <h3 className='font-semibold tracking-wide py-1'>Tus tarjetas</h3>
          {
            CARDS.map((card) => <Card key={card.id} card={card} />)
          }
        </div>
      </div>
    </article>
  )
}

const Card = ({ card }: { card: CardType }) => {

  const { id, card_number } = card

  return (
    <div className='tracking-normal flex gap-4 justify-between items-center border-b border-black py-2 opacity-75 text-sm'>
      <div className='flex justify-between items-center gap-5'>
        <span className='bg-primary rounded-full w-8 aspect-square'></span>
        <span>Terminada en {card_number}</span>
      </div>
      <SVGCheckbox />
      <SVGCheckboxFill className='text-primary' />
    </div>
  )
}