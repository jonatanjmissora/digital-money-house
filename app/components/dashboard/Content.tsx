import Money from "./Money";
import MoneyActions from "./MoneyActions";
import TransactionSearch from "./TransactionSearch";
import Transactions from "./Transactions";

export default function Content() {
  return (
    <article className="flex-1 h-full overflow-hidden flex flex-col gap-3 bg-my-light-light-grey py-6 px-[10%]">
      <Money />
      <MoneyActions />
      <TransactionSearch />
      <Transactions />
    </article>
  )
}
