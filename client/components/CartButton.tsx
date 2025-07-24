"use client";

import { useOrder } from "@/lib/stores/Order";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartButton() {
  const orders = useOrder((state) => state.orders);
  const totalPrice = useOrder((state) => state.totalPrice);

  if (orders.length === 0) {
    return;
  }

  return (
    <div className="px-4 py-6 fixed bottom-0 right-0 left-0 bg-white">
      <div className="flex justify-between font-semibold mb-3">
        <p>{orders.length} Items in cart</p>
        <p>Rp. {totalPrice.toLocaleString("id-ID")}</p>
      </div>
      <Link
        href={"/cart"}
        className="bg-primary p-3 flex items-center text-white font-bold gap-3 justify-center w-full rounded-full"
      >
        <span>
          <FaShoppingCart />
        </span>
        Visit Card
      </Link>
    </div>
  );
}
