import Link from 'next/link'
import React from 'react'

export default function MoneyActions() {
  return (
    <article className='flex gap-6'>
      <Link className="form-btn bg-primary flex-1 card py-[2em]" href={"/dashboard/load"}>Transferir dinero</Link>
      <Link className="form-btn bg-primary flex-1 card py-[2em]" href={"/dashboard/payments"}>Pago de servicios</Link>
    </article>
  )
}
