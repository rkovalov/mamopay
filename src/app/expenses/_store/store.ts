import { create } from "zustand";
import { Expense } from "../types";

export type ExpensesState = {
  perPage: number;
  totalExpenses: number | null;
  expenses: Expense[] | null;
  addExpenses: (newExpanses: Expense[]) => void;
};

export const useExpensesStore = create<ExpensesState>((set) => ({
  totalExpenses: null,
  expenses: null,
  perPage: 10,
  addExpenses: (newExpanses) => {
    set((state) => ({
      // ...state,
      expenses: [...(state.expenses ?? []), ...newExpanses],
    }));
  },
}));
