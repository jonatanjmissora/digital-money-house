import SVGCheck from '@/app/components/UI/SVGCheck'
import Link from 'next/link'
import React from 'react'

export default function LoadBankAmountCheckoutConfirm() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-start gap-6 bg-my-light-light-grey py-6 px-[10%] text-white">
      <div className='card bg-primary flex flex-col gap-1 justify-center items-center p-3'>
        <SVGCheck className='text-black w-14' />
        <h2 className='text-2xl text-black font-bold pb-2'>Ya cargamos el dinero en tu cuenta</h2>
      </div>

      <div className='card bg-my-black p-12 flex flex-col gap-6'>
        <div>
          <p>17 de agosto 2022 a 16:34 hs</p>
          <p className='text-primary font-semibold text-lg'>$300</p>
        </div>

        <div >
          <p>Para</p>
          <p className='py-2 text-xl font-semibold'>Cuenta propia</p>
        </div>

        <div>
          <p>Brubank</p>
          <p>CVU 00000021000759050000000</p>
        </div>
      </div>

      <div className='flex gap-4'>
        <Link className='ml-auto form-btn bg-my-light-grey' href={"/dashboard"}>Ir al inicio</Link>
        <Link className='form-btn bg-primary text-black' href={"/dashboard/load/cards/amount/checkout/confirm"}>Descargar comprobante</Link>
      </div>

    </article>
  )
}
