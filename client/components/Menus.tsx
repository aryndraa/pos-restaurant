import Link from "next/link";
import React from "react";
import MenuCard from "./MenuCard";
import { Foods } from "@/dummy/Food";

export default function Menus() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Featured Pics</h2>
        <Link href={"/menu"} className="text-primary font-semibold ">
          See More
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {Foods.slice(0, 4).map((food, key) => (
          <MenuCard
            key={key}
            id={food.id}
            name={food.name}
            description={food.description}
            price={food.price}
            categoryId={food.categoryId}
            image={food.image}
            rating={food.rating}
          />
        ))}
      </div>
    </div>
  );
}
