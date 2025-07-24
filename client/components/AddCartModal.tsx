"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Counter from "./Counter";
import { Food } from "@/dummy/Food";
import { Order, useOrder } from "@/lib/stores/Order";

type AddCartModalType = {
  open: boolean;
  setOpen: (val: boolean) => void;
  food: Food;
};

export default function AddCartModal({
  open,
  setOpen,
  food,
}: AddCartModalType) {
  const [count, setCount] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const totalPrice = count * food.price;
  const setOrder = useOrder((state) => state.addOrder);

  const handleSubmit = () => {
    if (count === 0) return;

    const newOrder: Order = {
      id: food.id,
      image: food.image,
      description: food.description,
      name: food.name,
      count,
      price: totalPrice,
    };

    setOrder(newOrder);
    setOpen(false);
    setCount(0);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 flex justify-center items-end transition duration-300 ease-in-out ${
        open ? "visible" : "invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative z-50 p-4 py-6 bg-white w-full max-h-[90vh] overflow-y-auto rounded-t-2xl transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="grid grid-cols-4 items-center mb-6">
          <button
            onClick={() => setOpen(false)}
            className="text-sm p-2 border rounded-full w-fit"
          >
            <IoIosArrowDown />
          </button>
          <h1 className="col-span-2 text-nowrap text-center font-semibold">
            Customize Your Order
          </h1>
        </div>

        <div className="mb-4">
          <img
            src={food?.image}
            alt={food?.name}
            className="aspect-square object-cover rounded-lg w-full"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-400">
            <div>
              <h2 className="text-xl font-semibold mb-1">{food?.name}</h2>
              <div className="flex items-center gap-4 font-medium">
                <p className="border-r border-zinc-400 pr-4">
                  ⭐{food?.rating}
                </p>
                <p>Rp. {food?.price.toLocaleString("id-ID")}</p>
              </div>
            </div>
            <div>
              <Counter count={count} setCount={setCount} />
            </div>
          </div>

          <p className="text-sm mb-6">{food?.description}</p>

          <button
            onClick={handleSubmit}
            disabled={count === 0}
            className={`p-3  text-white font-bold w-full rounded-full ${
              count === 0 ? "bg-zinc-400" : "bg-primary"
            }`}
          >
            Continue{" "}
            {count > 0 && " - " + (food?.price * count).toLocaleString("id-ID")}
          </button>
        </div>
      </div>
    </div>
  );
}
