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
  totalPrice: number;
  addOrder: (order: Order) => void;
  updateOrderCount: (id: number, count: number) => void;
  removeOrder: (id: number) => void;
}

export const useOrder = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      totalPrice: 0,
      addOrder: (order) => {
        const currentOrders = get().orders ?? [];
        const updatedOrders = [...currentOrders, order];
        const totalPrice = updatedOrders.reduce(
          (total, o) => total + o.price,
          0
        );
        set({ orders: updatedOrders, totalPrice });
      },
      updateOrderCount: (id, newCount) => {
        if (newCount <= 0) {
          get().removeOrder(id);
          return;
        }
        const updatedOrders = get().orders.map((order) =>
          order.id === id
            ? {
                ...order,
                count: newCount,
                price: (order.price / order.count) * newCount,
              }
            : order
        );
        const totalPrice = updatedOrders.reduce(
          (total, o) => total + o.price,
          0
        );

        set({ orders: updatedOrders, totalPrice });
      },
      removeOrder: (id) => {
        const updatedOrders = get().orders.filter((order) => order.id !== id);
        const totalPrice = updatedOrders.reduce(
          (total, o) => total + o.price,
          0
        );
        set({ orders: updatedOrders, totalPrice });
      },
    }),
    {
      name: "food-session",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        orders: state.orders,
        totalPrice: state.totalPrice,
      }),
    }
  )
);
