"use client";
import Script from "next/script";
import { useEffect, useState, useRef } from "react";
import { createPaymentLink } from "../../actions/getExpenses";

export function PaymentForm() {
  const [payment, setPayment] = useState<{ payment_url: string }>();
  const isMamoCheckoutOpenRef = useRef(false);

  useEffect(() => {
    createPaymentLink({
      email: "sdsd@test.com",
      firstName: "Tom",
      lastName: "Jarrad",
      title: "New Payment",
    }).then(setPayment);
  }, []);

  useEffect(() => {
    if (payment?.payment_url && !isMamoCheckoutOpenRef.current) {
      isMamoCheckoutOpenRef.current = true;
      window.addIframeToWebsite();
    }
  }, [payment?.payment_url]);

  // console.log("payment", { payment });

  return (
    <div className="flex-1 flex flex-col p-10">
      <Script src="https://assets.mamopay.com/public/checkout-inline.min.js" />
      <div
        id="mamo-checkout"
        data-src={payment?.payment_url}
        className="flex-1"
      />
    </div>
  );
}
