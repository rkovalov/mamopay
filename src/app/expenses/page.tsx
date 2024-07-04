import * as DL from "./_data-layer";
import { Expenses } from "./_components/expenses";

export default async function ExpensesPage() {
  const expenses = await DL.fetchExpenses();

  return (
    <div className="flex flex-col">
      <Expenses expenses={expenses.expenses} />
    </div>
  );
}
