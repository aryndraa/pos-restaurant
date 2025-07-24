import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Order = {
  id: number;
  image: number;
  name: string;
  description: string;
  price: number;
  count: number;
};

interface OrderState {
  order: Order | null;
  setOrder: (order: Order) => void;
}

export const useOrder = create<OrderState>()(
  persist(
    (set) => ({
      order: null,
      setOrder: (order) => set({ order }),
    }),
    {
      name: "food-sessiom",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ order: state.order }),
    }
  )
);
