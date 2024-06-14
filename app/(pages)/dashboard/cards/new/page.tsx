import React from 'react'

export default function NewCard() {
  return (
    <article className="flex-1 h-full flex flex-col justify-center  bg-my-light-light-grey py-4 px-[10%]">
      <div className="card bg-white flex flex-col justify-center items-center gap-4 p-8">
        <div>
          <div className='card w-80 h-48 bg-my-light-light-grey'></div>
        </div>
        <form
          className='pt-6 grid grid-cols-2 gap-8'
        >
          <input className='card text-lg px-4 py-4 border border-gray-100' type="text" placeholder='Número de tarjeta*' name="number" />
          <input className='card text-lg px-4 py-4 border border-gray-100' type="text" placeholder='Fecha de vencimiento*' name="date" />
          <input className='card text-lg px-4 py-4 border border-gray-100' type="text" placeholder='Nombre y apellido' name="name" />
          <input className='card text-lg px-4 py-4 border border-gray-100' type="text" placeholder='Código de seguridad*' name="code" />
          <div></div>
          <button className='form-btn bg-my-light-light-grey'>Continuar</button>
        </form>
      </div>
    </article>
  )
}
