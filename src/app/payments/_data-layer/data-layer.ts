"use server";

import { PaymentInfo } from "../types";

export async function createPaymentLink({
  email,
  firstName,
  lastName,
  title,
}: PaymentInfo) {
  return fetch("https://sandbox.dev.business.mamopay.com/manage_api/v1/links", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.MAMO_API_KEY}`,
    },
    body: JSON.stringify({
      link_type: "inline",
      email,
      title,
      first_name: firstName,
      last_name: lastName,
    }),
  }).then((res) => res.json());
}
