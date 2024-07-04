"use client";
import { useEffect, useRef } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InView, useInView } from "react-intersection-observer";

import { useExpensesStore } from "../../_store";
import { getExpenses } from "../../actions/getExpenses";
import { Expense } from "../../types";
interface ExpensesProps {
  defaultExpenses: Expense[];
}

const useExpenses = () => {
  const { expenses, totalExpenses, perPage, addExpenses } = useExpensesStore();
  const { ref: scrollTriggerRef, inView } = useInView();

  const hasMore = expenses && expenses.length < Number(totalExpenses);

  useEffect(() => {
    if (inView && hasMore && expenses) {
      const currentPage = Math.ceil(expenses.length / perPage);
      getExpenses(currentPage + 1, perPage).then((res) => {
        addExpenses(res.expenses);
      });
    }
  }, [hasMore, inView, perPage, expenses]);

  return {
    expenses,
    totalExpenses,
    perPage,
    hasMore,
    scrollTriggerRef,
  };
};

export function Expenses({ defaultExpenses }: ExpensesProps) {
  const { expenses, hasMore, scrollTriggerRef } = useExpenses();

  return (
    <Table>
      <TableCaption>
        A list of your recent expenses.{" "}
        {!hasMore && expenses && "No more expenses to load."}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[20px]">N</TableHead>
          <TableHead className="w-[100px]">Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(expenses || defaultExpenses)?.map((expense, index) => (
          <TableRow key={expense.id + index}>
            <TableHead className="w-[20px]">{index + 1}</TableHead>
            <TableCell className="font-medium">{expense.category}</TableCell>
            <TableCell>{expense.status}</TableCell>
            <TableCell>{expense.paymentMethod}</TableCell>
            <TableCell className="text-right">{expense.amount}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          {hasMore && (
            <TableCell
              colSpan={4}
              ref={scrollTriggerRef}
              className="text-center"
            >
              Loading...
            </TableCell>
          )}
        </TableRow>
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}
