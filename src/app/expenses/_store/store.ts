import { create } from "zustand";

export type ExpensesState = {
  totalExpenses: number | null;
};

export const useExpensesStore = create<ExpensesState>(() => ({
  totalExpenses: null,
}));
