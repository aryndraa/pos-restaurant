"use client";

import { Foods } from "@/dummy/Food";
import { useFoodCategory } from "@/lib/contexts/FoodCategoryContext";
import React from "react";
import MenuCard from "./MenuCard";

export default function FoodMenu() {
  const { id: selectedCategoryId } = useFoodCategory();

  const filteredFoods =
    selectedCategoryId === 0
      ? Foods
      : Foods.filter((food) => food.categoryId === selectedCategoryId);

  return (
    <div className="grid grid-cols-2 gap-2 ">
      {filteredFoods.map((food, key) => (
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
  );
}
