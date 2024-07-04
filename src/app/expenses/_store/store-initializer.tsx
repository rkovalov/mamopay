"use client";
import { useEffect } from "react";
import { Expense } from "../types";
import { useExpensesStore } from "./store";

type StoreInitializerProps = {
  totalExpenses: number;
  perPage: number;
  expenses: Expense[];
  children: React.ReactNode;
};

export function StoreInitializer({
  totalExpenses,
  perPage,
  expenses,
  children,
}: StoreInitializerProps): React.ReactElement {
  // set data to store from server;
  useEffect(() => {
    useExpensesStore.setState({
      totalExpenses,
      perPage,
      expenses,
    });
  }, []);

  return <>{children}</>;
}
