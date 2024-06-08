import React from 'react'
import SVGSearch from '../UI/SVGSearch'

export default function TransactionSearch() {
  return (
    <article className='card p-3 flex gap-2 items-center w-full bg-white'>
      <SVGSearch />
      <input type="text" placeholder='Buscar en tu actividad' />
    </article>
  )
}
