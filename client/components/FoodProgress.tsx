import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

export default function FoodProgress() {
  return (
    <div className="flex items-center gap-4 p-4 border border-primary rounded-2xl">
      <span className="bg-primary text-white p-2 text-lg border rounded-full">
        <BiLoaderAlt />
      </span>
      <p className="text-lg font-medium">Cooking Your Food</p>
    </div>
  );
}
