import React from 'react'
import SVGSearch from '../UI/SVGSearch'

export default function TransactionSearch() {
  return (
    <article className='card p-3 px-8 flex gap-2 items-center w-full bg-white'>
      <SVGSearch />
      <input className="w-[80%]" type="text" placeholder='Buscar en tu actividad' />
    </article>
  )
}
