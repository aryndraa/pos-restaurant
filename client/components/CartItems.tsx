import React from "react";
import CartItemCard from "./CartItemCard";

export default function CartItems() {
  return (
    <div className="flex flex-col gap-2">
      <CartItemCard />
      <CartItemCard />
    </div>
  );
}
