import accountApi from "@/app/services/account/account.services";
import Money from "./Money";
import MoneyActions from "./MoneyActions";
import TransactionSearch from "./TransactionSearch";
import Transactions from "./Transactions";

type AccountTypes = {
  id: number,
  user_id: number,
  cvu: string,
  alias: string,
  available_amount: number
}

export default async function Content() {

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
