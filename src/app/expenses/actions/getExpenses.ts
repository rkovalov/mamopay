// actions/getPosts.ts
"use server";
import * as DL from "../_data-layer";

export const getExpenses = async (page: number = 1, limit: number = 10) => {
  try {
    return await DL.fetchExpenses({ page, limit });
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error occurred: ${error}`);
  }
};
