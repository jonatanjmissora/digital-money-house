import SVGSpinner from '@/app/components/UI/SVGSpinner'
import React from 'react'

export default function loading() {
  return (
    <article className="flex-1 h-full flex justify-center items-center bg-my-light-light-grey">

      <SVGSpinner />
    </article>
  )
}
