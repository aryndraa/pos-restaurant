"use client";

import React from "react";
import CartItemCard from "./CartItemCard";
import { useOrder } from "@/lib/stores/Order";

export default function CartItems() {
  const orders = useOrder((state) => state.orders);

  return (
    <div className="flex flex-col gap-2">
      {orders.map((value, key) => (
        <CartItemCard
          image={value.image}
          name={value.name}
          count={value.count}
          description={value.description}
          price={value.price}
          id={value.id}
          key={key}
        />
      ))}
    </div>
  );
}
