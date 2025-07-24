import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Order = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  count: number;
};

interface OrderState {
  orders: Order[];
  addOrder: (order: Order) => void;
}

export const useOrder = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (order) => {
        const currentOrders = get().orders ?? [];
        set({ orders: [...currentOrders, order] });
      },
    }),
    {
      name: "food-session",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ orders: state.orders }),
    }
  )
);
