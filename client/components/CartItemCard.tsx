import React from "react";
import { MdEdit } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CartItemCard() {
  return (
    <div className="bg-white px-4 py-6 rounded-xl">
      <div className="flex gap-3 mb-4">
        <img
          src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="min-w-[100px] h-[90px] object-cover rounded-xl"
        />
        <div className="flex gap-2">
          <div>
            <h3 className="font-semibold text-lg leading-[1.2] mb-1">
              Mie Jawa
            </h3>
            <p className="text-sm text-zinc-500 font-medium">
              Pake Terasi, Sempak Lvl 12, Ayam
            </p>
          </div>
          <button className="h-fit p-2 bg-primary text-white rounded-full">
            <MdEdit />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">Rp120.000</p>
        <div className="flex gap-3 items-center">
          <button className="p-2 border rounded-full text-sm">
            <FaMinus />
          </button>
          <span className="text-lg font-bold">1</span>
          <button className="p-2 border rounded-full text-sm bg-black text-white">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
