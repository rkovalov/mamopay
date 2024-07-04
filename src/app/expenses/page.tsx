import * as DL from "./_data-layer";
import { Expenses } from "./_components/expenses";
import { StoreInitializer } from "./_store/store-initializer";

export default async function ExpensesPage() {
  async function getExpenses() {
    "use server";
    return await DL.fetchExpenses();
  }

  const expenses = await getExpenses();

  return (
    <div className="flex flex-col">
      <StoreInitializer totalExpenses={expenses.pagination.totalItems}>
        <Expenses expenses={expenses.expenses} />
      </StoreInitializer>
    </div>
  );
}
