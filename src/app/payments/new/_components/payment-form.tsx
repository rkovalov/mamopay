"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import * as DL from "../../_data-layer";

export function PaymentForm() {
  useEffect(() => {
    //
    DL.createPaymentLink({
      email: "sdsd@test.com",
      firstName: "Tom",
      lastName: "Jarrad",
    });
  }, []);
  return (
    <div className="">
      FORM
      {/* Implement Form for creating new payment link */}
      {/*  */}
      {/* <div id="mamo-checkout" data-src="<payment-link-placeholder>"></div>
      <script src="https://assets.mamopay.com/public/checkout-inline.min.js" /> */}
    </div>
  );
}
