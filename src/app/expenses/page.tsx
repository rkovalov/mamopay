import { Expenses } from "./_components/expenses";
import { StoreInitializer } from "./_store/store-initializer";
import { getExpenses } from "./actions/getExpenses";

export default async function ExpensesPage() {
  const expenses = await getExpenses();

  return (
    <div className="flex flex-col">
      <StoreInitializer
        perPage={Number(expenses.pagination.itemsPerPage)}
        totalExpenses={expenses.pagination.totalItems}
        expenses={expenses.expenses}
      >
        <Expenses defaultExpenses={expenses.expenses} />
      </StoreInitializer>
    </div>
  );
}
