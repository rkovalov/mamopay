import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import * as DL from "../_data-layer";
import { PaymentForm } from "./_components/payment-form";

export default function NewPayment() {
  return (
    <>
      <h1>New Payment</h1>
      <PaymentForm />
    </>
  );
}
