import CartItems from "@/components/CartItems";
import PageTitle from "@/components/PageTitle";
import PaymentDetail from "@/components/PaymentDetail";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle content="Review Your Order" />
      <div className="bg-primary text-white py-8 mt-4   text-center rounded-xl">
        <h3 className="text-5xl font-bold mb-2">52-63</h3>
        <p className="font-medium text-sm">Minutes of waiting time</p>
      </div>
      <CartItems />
      <PaymentDetail />
    </div>
  );
}
