import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Counter() {
  return (
    <div className="flex gap-3 items-center">
      <button className="p-2 border rounded-full text-sm">
        <FaMinus />
      </button>
      <span className="text-lg font-bold">1</span>
      <button className="p-2 border rounded-full text-sm bg-black text-white">
        <FaPlus />
      </button>
    </div>
  );
}
