"use client";
import { useEffect } from "react";

import { useExpensesStore } from "./store";

type StoreInitializerProps = {
  totalExpenses: number;
  children: React.ReactNode;
};

export function StoreInitializer({
  totalExpenses,
  children,
}: StoreInitializerProps): React.ReactElement {
  useEffect(() => {
    console.log({ totalExpenses });
    useExpensesStore.setState({
      totalExpenses,
    });
  }, []);

  console.log("RENDER initializer");
  return <>{children}</>;
}
