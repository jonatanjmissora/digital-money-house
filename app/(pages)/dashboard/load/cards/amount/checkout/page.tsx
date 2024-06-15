import SVGEdit from '@/app/components/UI/SVGEdit'
import Link from 'next/link'
import React from 'react'

export default function LoadBankAmountCheckout() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-between 2xl:justify-start 2xl:gap-4 bg-my-light-light-grey py-6 px-[10%] text-white">
      <div className='card bg-my-black p-12 flex flex-col gap-6'>
        <h2 className='text-2xl font-bold text-primary'>Revisá que todo está bien</h2>
        <div>
          <p className='flex gap-4 items-center'>Vas a transferir <SVGEdit className='text-primary' /></p>
          <p>$300</p>
        </div>

        <div >
          <p>Para</p>
          <p className='py-2 text-xl font-semibold'>Cuenta propia</p>
        </div>

        <div>
          <p>Brubank</p>
          <p>CVU 00000021000759050000000</p>
        </div>

        <div className='w-full'>
          <Link className='form-btn bg-primary ml-auto text-black' href={"/dashboard/load/cards/amount/checkout/confirm"}>Continuar</Link>
        </div>

      </div>
    </article>
  )
}