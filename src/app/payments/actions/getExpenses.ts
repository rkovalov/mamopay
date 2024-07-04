// actions/getPosts.ts
"use server";
import * as DL from "../_data-layer";
import { PaymentInfo } from "../types";

export const createPaymentLink = async ({
  email,
  firstName,
  lastName,
  title,
}: PaymentInfo) => {
  try {
    return await DL.createPaymentLink({ email, firstName, lastName, title });
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error occurred: ${error}`);
  }
};
