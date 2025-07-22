import React from "react";
import FoodProgress from "./FoodProgress";

export default function ListProgress() {
  return (
    <div className="bg-white py-6 px-4 rounded-xl">
      <h1 className="pb-4 mb-4 border-b border-zinc-400 text-lg font-semibold">
        Food Status
      </h1>
      <div className="flex flex-col gap-3">
        <FoodProgress />
        <FoodProgress />
        <FoodProgress />
        <FoodProgress />
      </div>
    </div>
  );
}
