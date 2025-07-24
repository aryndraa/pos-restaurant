import React from "react";
import { MdEdit } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Order, useOrder } from "@/lib/stores/Order";

export default function CartItemCard({
  count,
  description,
  image,
  name,
  price,
  id,
}: Order) {
  const updateOrderCount = useOrder((state) => state.updateOrderCount);

  const handleIncrease = () => {
    updateOrderCount(id, count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      updateOrderCount(id, count - 1);
    }
  };

  return (
    <div className="bg-white px-4 py-6 rounded-xl">
      <div className="flex gap-3 mb-4">
        <img
          src={image}
          alt=""
          className="min-w-[100px] h-[90px] object-cover rounded-xl"
        />
        <div className="flex gap-2">
          <div>
            <h3 className="font-semibold text-lg leading-[1.2] mb-1">{name}</h3>
            <p className="text-sm text-zinc-500 font-medium">{description}</p>
          </div>
          <button className="h-fit p-2 bg-primary text-white rounded-full">
            <MdEdit />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">Rp. {price.toLocaleString("id-ID")}</p>
        <div className="flex gap-3 items-center">
          <button
            onClick={handleDecrease}
            className="p-2 border rounded-full text-sm"
          >
            <FaMinus />
          </button>
          <span className="text-lg font-bold">{count}</span>
          <button
            onClick={handleIncrease}
            className="p-2 border rounded-full text-sm bg-black text-white"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
