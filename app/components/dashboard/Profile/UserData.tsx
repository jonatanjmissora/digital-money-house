import React from 'react'
import SVGEdit from '../../UI/SVGEdit'

const USERDATA = [
  { key: "Email", value: "jonatanjmissora@gmail.com", edit: false },
  { key: "Nombre y apellido", value: "Jonatan Missora", edit: true },
  { key: "CUIT", value: "20287654320", edit: true },
  { key: "Teléfono", value: "29145449732", edit: true },
  { key: "Contraseña", value: "******", edit: true },
]

export default function UserData() {
  return (
    <article className='flex flex-col w-full bg-white text-black card p-5 pl-8 pr-16'>
      <h2 className="text-xl font-bold mb-1">Tus datos</h2>
      {USERDATA.map(row =>
        <div key={row.key} className='tracking-normal flex justify-between items-center border-b border-gray-600 py-1 font-normal'>
          <span className='w-[20%]'>{row.key}</span>
          <span className='flex-1 opacity-50'>{row.value}</span>
          <span>{row.edit && <SVGEdit className="opacity-50 w-6" />}</span>
        </div>
      )}
    </article>
  )
}
