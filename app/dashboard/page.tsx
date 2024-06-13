import Money from "../components/dashboard/Money";
import MoneyActions from "../components/dashboard/MoneyActions";
import TransactionSearch from "../components/dashboard/TransactionSearch";
import Transactions from "../components/dashboard/Transactions";
import accountApi from "../services/account/account.services";

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
  console.log({ account })

  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col gap-3 bg-my-light-light-grey py-6 px-[10%]">
      <Money amount={account.available_amount} />
      <MoneyActions />
      <TransactionSearch />
      <Transactions />
    </article>
  )
}