import CartItems from "@/components/CartItems";
import PageTitle from "@/components/PageTitle";
import PaymentButton from "@/components/PaymentButton";
import PaymentDetail from "@/components/PaymentDetail";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle content="Review Your Order" />
      <CartItems />
      <PaymentDetail />
      <PaymentButton />
    </div>
  );
}
