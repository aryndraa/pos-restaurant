"use client";

import { useOrder } from "@/lib/stores/Order";
import React from "react";

export default function PaymentDetail() {
  const orders = useOrder((state) => state.orders);
  const totalPrice = useOrder((state) => state.totalPrice);
  const tax = useOrder((state) => state.tax);

  return (
    <div className="py-8 px-4 bg-white rounded-xl ">
      <div className="text-center border-b pb-6 mb-6 border-zinc-300">
        <p className="text-xl font-medium mb-2">Grand total</p>
        <h2 className="text-4xl font-bold">
          Rp.{totalPrice.toLocaleString("id-ID")}
        </h2>
      </div>
      <div className="flex flex-col gap-6 border-b pb-6 mb-6 border-zinc-300">
        {orders.map((value, key) => (
          <div key={key} className="flex justify-between items-center">
            <h3 className="font-semibold">
              {value.name} x{value.count}
            </h3>
            <p>Rp. {value.price.toLocaleString("id-ID")} </p>
          </div>
        ))}

        <div className="flex justify-between items-center text-zinc-400">
          <h3 className="font-semibold">Tax & Fee 10%</h3>
          <p>Rp.{tax.toLocaleString("id-ID")}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">Total</h3>
        <p>Rp. {totalPrice.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}
