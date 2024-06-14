import { useRouter } from "next/navigation";
import Money from "../../components/dashboard/Money";
import MoneyActions from "../../components/dashboard/MoneyActions";
import TransactionSearch from "../../components/dashboard/TransactionSearch";
import Transactions from "../../components/dashboard/Transactions";
import accountApi from "../../services/account/account.services";

type AccountTypes = {
  id: number,
  user_id: number,
  cvu: string,
  alias: string,
  available_amount: number
}

const localHost = "http://localhost:3000/";

export default async function Dashboard() {

  const account: AccountTypes = await accountApi.getAccount();
  if (account?.error) {
    console.log("**** DASHBOARD ERROR:", account.error)
  }
  else console.log("**** DASHBOARD ACCOUNT:", account)

  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col justify-between 2xl:justify-start 2xl:gap-4 bg-my-light-light-grey py-6 px-[10%]">
      <Money amount={account.available_amount} />
      <MoneyActions />
      <TransactionSearch />
      <Transactions />
    </article>
  )
}