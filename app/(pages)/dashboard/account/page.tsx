import UserAccount from "@/app/components/dashboard/Profile/UserAccount";

export default function Account() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-between 2xl:justify-start 2xl:gap-4 bg-my-light-light-grey py-6 px-[10%]">
      <UserAccount />
    </article>
  )
}
