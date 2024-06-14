import React from 'react'
import SVGCopy from '../../UI/SVGCopy'

export default function UserAccount() {
  return (
    <article className='card bg-my-dark-grey text-white px-8 pr-16 pt-6' >
      <p>Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</p>
      <div className='flex justify-between my-5'>
        <div className='flex flex-col'>
          <span className='text-primary text-xl font-bold'>CVU</span>
          <span className='opacity-50'>0000002100073251332000000</span>
        </div>
        <SVGCopy className='text-primary' />
      </div>
      <div className='flex justify-between my-5'>
        <div className='flex flex-col'>
          <span className='text-primary text-xl font-bold'>Alias</span>
          <span className='opacity-50'>estealiasnoexiste</span>
        </div>
        <SVGCopy className='text-primary' />
      </div>
    </article>
  )
}
