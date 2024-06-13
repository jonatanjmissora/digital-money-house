import React from 'react'
import SVGEdit from '../../UI/SVGEdit'

const USERDATA = [
  { key: "Email", edit: false },
  { key: "Nombre y apellido", edit: true },
  { key: "CUIT", edit: true },
  { key: "Teléfono", edit: true },
  { key: "Contraseña", edit: true },
]

export default function UserData() {
  return (
    <article className='flex flex-col w-full bg-white text-black card p-6 px-8'>
      <h2>Tus datos</h2>
      {USERDATA.map(row =>
        <div key={row.key} className='tracking-normal flex gap-4 justify-between items-center border-b border-gray-600 py-2 opacity-75 text-sm'>{row.key} row.edit && <SVGEdit className="opacity-50 w-8" /></div>
      )}
    </article>
  )
}
