"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Counter from "./Counter";

type AddCartModalType = {
  open: boolean;
  setOpen: () => void;
};

export default function AddCartModal({ open, setOpen }: AddCartModalType) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={`fixed p-4 py-6 bg-white inset-0 top-auto z-50 transition ease-in-out duration-500 overflow-y-hidden transform ${
        !open ? "translate-y-[100vh]" : "translate-y-auto"
      }`}
    >
      <div className="grid grid-cols-4 items-center mb-6">
        <button
          onClick={setOpen}
          className="text-sm p-2 border rounded-full w-fit"
        >
          <IoIosArrowDown />
        </button>
        <h1 className="col-span-2 text-nowrap text-center  font-semibold ">
          Customize Your Order
        </h1>
      </div>
      <div>
        <div className="mb-4">
          <img
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-square "
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-400">
            <div>
              <h2 className="text-xl font-semibold">Remake Ramen</h2>
              <p>⭐4.1</p>
            </div>
            <div>
              <Counter count={count} setCount={setCount} />
            </div>
          </div>
          <p className="text-sm mb-6">
            Indulge in a delightful and straightforward ramen recipe that
            features rich, flavorful noodles paired with a vibrant assortment of
            fresh vegetables.
          </p>
          <button className="p-3 bg-primary text-white  font-bold w-full rounded-full">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
