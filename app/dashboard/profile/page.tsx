import UserAccount from '@/app/components/dashboard/Profile/UserAccount'
import UserCards from '@/app/components/dashboard/Profile/UserCards'
import UserData from '@/app/components/dashboard/Profile/UserData'
import React from 'react'

export default function Profile() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col gap-3 bg-my-light-light-grey py-6 px-[10%]">
      <UserData />
      <UserCards />
      <UserAccount />
    </article>
  )
}
