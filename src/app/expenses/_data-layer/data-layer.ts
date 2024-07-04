import { z } from "zod";

type ExpensesRequestParams = {
  page?: number;
  limit?: number;
};
// type Category = string; // "Travel"
// type Currency = string; // "USD"
// type PaymentMethod = string;
// type Status = string; // Submitted

// const userSchema = z.object({
//   id: z.string().uuid(),
//   email: z.string().email(),
//   login: z.string(),
//   createdAt: z.string().datetime(),
//   deletedAt: z.string().datetime().nullable(),
// });
export const expenseSchema = z.object({
  id: z.string(),
  date: z.string(),
  category: z.string(),
  description: z.string(),
  amount: z.number(),
  currency: z.string(),
  paymentMethod: z.string(),
  status: z.string(),
  receiptAttached: z.boolean(),
});

export type Expense = z.infer<typeof expenseSchema>;

export const expensesSchema = z.object({
  expenses: z.array(expenseSchema),
  pagination: z.object({
    currentPage: z.string(), // "1"
    totalPages: z.number(),
    totalItems: z.number(),
    itemsPerPage: z.string(),
    hasNextPage: z.boolean(),
    hasPreviousPage: z.boolean(),
  }),
});

export type ExpensesResponse = z.infer<typeof expensesSchema>;

function validate(dto: unknown): ExpensesResponse {
  return expensesSchema.parse(dto);
}

export function fetchExpenses({
  page = 1,
  limit = 10,
}: ExpensesRequestParams = {}) {
  return fetch(
    `https://mamo-mock-server.glitch.me/expenses?page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then(validate);
}
