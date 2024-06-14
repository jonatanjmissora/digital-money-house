import React from 'react'
import SVGRightArrow from '../UI/SVGRightArrow';
import Link from 'next/link';

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

export default function Transactions({ pagination }: { pagination?: boolean }) {
  return (
    <article className='card bg-white p-8 py-4'>
      <h3 className='font-semibold tracking-wide py-1'>Tu actividad</h3>
      {
        TRANSACTIONS.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)
      }
      {pagination ? (
        <p className='py-2 pt-6 w-full text-center'>1 2 3 4 5 6 7 ...</p>
      ) : (
        <>
          <Link href={"/dashboard/transactions"} className='font-semibold tracking-wide py-2 pt-3 flex justify-between items-center w-full'>Ver toda tu actividad <SVGRightArrow className={"w-[1rem]"} /></Link>
        </>
      )}
    </article>
  )
}

type TransactionTypes = {
  detail: string;
  sign: string;
  value: string;
  day: string;
}

const Transaction = ({ transaction }: { transaction: TransactionTypes }) => {

  const { detail, sign, value, day } = transaction

  return (
    <div className='tracking-normal flex gap-4 items-center border-b border-black py-2 opacity-75 text-sm'>
      <span className='bg-primary rounded-full w-8 aspect-square'></span>
      <span>{detail}</span>
      <div className='ml-auto flex flex-col'>
        <span>{sign}$ {value}</span>
        <span className='text-xs opacity-50 place-self-end'>{day}</span>
      </div>
    </div>
  )
}
