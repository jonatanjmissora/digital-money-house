import SVGSearch from '@/app/components/UI/SVGSearch'
import Link from 'next/link'
import React from 'react'

const SERVICES = [
  {
    id: 1,
    logo: "claro",
    name: "Claro",
  },
  {
    id: 2,
    logo: "personal",
    name: "Personal",
  },
  {
    id: 3,
    logo: "cablevision",
    name: "Cablevisión",
  },
  {
    id: 4,
    logo: "claro",
    name: "Claro",
  },
  {
    id: 5,
    logo: "personal",
    name: "Personal",
  },
  {
    id: 6,
    logo: "cablevision",
    name: "Cablevisión",
  },

]

export default function Payments() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-start gap-4 bg-my-light-light-grey py-6 px-[10%]">
      <div className='card p-3 px-8 flex gap-2 items-center w-full bg-white'>
        <SVGSearch />
        <input className='w-[80%]' type="text" placeholder='Buscá entre más de 5.000 empresas' />
      </div>
      <div className='p-12 bg-white card'>
        <h2 className='text-xl font-bold pb-4'>Más recientes</h2>
        {SERVICES.map((service) => <ServiceRow key={service.id} service={service} />)}
      </div>
    </article>
  )
}

type ServiceType = {
  id: number;
  logo: string;
  name: string;
}

const ServiceRow = ({ service }: { service: ServiceType }) => {

  const { id, logo, name } = service

  return (
    <div className='tracking-normal flex justify-between gap-4 items-center border-b border-grey-700 py-4'>
      <div className='flex items-center gap-4'>
        <span className='w-28'>{logo}</span>
        <span className='opacity-75'>{name}</span>
      </div>
      <Link className="font-bold opacity-75" href={"/dashboard/payments/bill"}>Seleccionar</Link>
    </div>
  )
}
