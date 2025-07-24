import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type CounterProps = {
  count: number;
  setCount: (count: number) => void;
};

export default function Counter({ count = 0, setCount }: CounterProps) {
  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => setCount(Math.max(0, count - 1))}
        className="p-2 border rounded-full text-sm"
      >
        <FaMinus />
      </button>
      <span className="text-lg font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="p-2 border rounded-full text-sm bg-black text-white"
      >
        <FaPlus />
      </button>
    </div>
  );
}
