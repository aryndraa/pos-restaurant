import { Food } from "@/dummy/Food";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function MenuCard({ id, name, description, price }: Food) {
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="mb-3">
        <img
          src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-xl"
        />
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-xs font-medium text-zinc-400">{description}</p>
        <div className="mt-3 flex justify-between items-end">
          <span className="font-semibold">
            Rp. {price.toLocaleString("id-ID")}
          </span>
          <button className="p-3 rounded-full bg-primary text-white">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
