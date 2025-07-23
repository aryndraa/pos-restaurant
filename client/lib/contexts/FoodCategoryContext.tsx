"use client";

import { createContext, useContext, useState } from "react";

type FoodCategoryContextType = {
  id: number;
  setId: (id: number) => void;
};

const FoodCategoryContext = createContext<FoodCategoryContextType | undefined>(
  undefined
);

function FoodCategoryProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState<number>(0);

  return (
    <FoodCategoryContext.Provider value={{ id, setId }}>
      {children}
    </FoodCategoryContext.Provider>
  );
}

function useFoodCategory() {
  const context = useContext(FoodCategoryContext);

  if (context === undefined) {
    throw new Error(
      "useFoodCategory must be used within a FoodCategoryProvider"
    );
  }

  return context;
}

export { FoodCategoryProvider, useFoodCategory };
