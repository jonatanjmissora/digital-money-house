import React from 'react'
import SVGRightArrow from '../UI/SVGRightArrow';

type TransactionType = {
  id: number;
  detail: string;
  sign: string;
  value: string;
  day: string;
}

const TRANSACTIONS: TransactionType[] = [{
  id: 1,
  detail: "Transferiste a Rodrigo",
  sign: "-",
  value: "1265,57",
  day: "sábado",
},
{
  id: 2,
  detail: "Transferiste a Consorcio",
  sign: "-",
  value: "1265,57",
  day: "sábado",
},
{
  id: 3,
  detail: "Ingresastes dinero",
  sign: "",
  value: "1265,57",
  day: "sábado",
},

];

export default function Transactions() {
  return (
    <article className='card bg-white p-8 py-4'>
      <h3 className='font-semibold tracking-wide py-1'>Tu actividad</h3>
      {
        TRANSACTIONS.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)
      }
      <button className='font-semibold tracking-wide py-2 pt-3 flex justify-between items-center w-full'>Ver toda tu actividad <SVGRightArrow className={"w-[1rem]"} /></button>
    </article>
  )
}

const Transaction = ({ transaction }) => {

  const { detail, sign, value, day } = transaction

  return (
    <div className='tracking-normal flex gap-4 items-center border-t border-b border-black py-2 opacity-75 text-sm'>
      <span className='bg-primary rounded-full w-8 aspect-square'></span>
      <span>{detail}</span>
      <div className='ml-auto flex flex-col'>
        <span>{sign}$ {value}</span>
        <span className='text-xs opacity-50 place-self-end'>{day}</span>
      </div>
    </div>
  )
}
