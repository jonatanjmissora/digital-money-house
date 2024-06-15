import Link from 'next/link'
import React from 'react'

export default function LoadBankAmount() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-between 2xl:justify-start 2xl:gap-4 bg-my-light-light-grey py-6 px-[10%]">
      <div className='card bg-my-black p-12 flex flex-col gap-6'>
        <h2 className='text-2xl font-bold text-primary'>¿Cuánto querés ingresar a la cuenta?</h2>
        <input className='w-1/3 px-2 py-4 card' type="number" placeholder='$0' />
        <div className='w-full'>
          <Link className='form-btn bg-my-light-light-grey ml-auto' href={"/dashboard/load/cards/amount/checkout"}>Continuar</Link>
        </div>
      </div>
    </article>
  )
}
