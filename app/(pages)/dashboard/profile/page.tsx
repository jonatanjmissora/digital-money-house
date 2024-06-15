import UserAccount from '@/app/components/dashboard/Profile/UserAccount'
import UserCards from '@/app/components/dashboard/Profile/UserCards'
import UserData from '@/app/components/dashboard/Profile/UserData'
import React from 'react'

export default function Profile() {
  return (
    <article className="flex-1 h-full flex flex-col justify-between 2xl:justify-start 2xl:gap-4  bg-my-light-light-grey py-4 px-[10%]">
      <UserData />
      <UserCards />
      <UserAccount />
    </article>
  )
}
