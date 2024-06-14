import CardAction from '@/app/components/dashboard/cards/CardAction'
import MyCards from '@/app/components/dashboard/cards/MyCards'
import React from 'react'

export default function Cards() {
  return (
    <article className="flex-1 h-full flex flex-col justify-start gap-5  bg-my-light-light-grey py-4 px-[10%]">
      <CardAction />
      <MyCards />
    </article>
  )
}
