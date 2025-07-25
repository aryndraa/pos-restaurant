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
  tax: number;
  addOrder: (order: Order) => void;
  updateOrderCount: (id: number, count: number) => void;
  removeOrder: (id: number) => void;
}

export const useOrder = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      totalPrice: 0,
      tax: 0,
      addOrder: (newOrder) => {
        const currentOrders = get().orders ?? [];

        const existingOrder = currentOrders.find((o) => o.id === newOrder.id);

        let updatedOrders;

        if (existingOrder) {
          updatedOrders = currentOrders.map((order) =>
            order.id === newOrder.id
              ? {
                  ...order,
                  count: order.count + newOrder.count,
                  price:
                    (order.price / order.count) *
                    (order.count + newOrder.count),
                }
              : order
          );
        } else {
          updatedOrders = [...currentOrders, newOrder];
        }

        const subtotal = updatedOrders.reduce((total, o) => total + o.price, 0);
        const tax = subtotal * 0.1;
        const totalPrice = subtotal + tax;

        set({ orders: updatedOrders, tax, totalPrice });
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

        const subtotal = updatedOrders.reduce((total, o) => total + o.price, 0);
        const tax = subtotal * 0.1;
        const totalPrice = subtotal + tax;

        set({ orders: updatedOrders, tax, totalPrice });
      },
      removeOrder: (id) => {
        const updatedOrders = get().orders.filter((order) => order.id !== id);
        const subtotal = updatedOrders.reduce((total, o) => total + o.price, 0);
        const tax = subtotal * 0.1;
        const totalPrice = subtotal + tax;

        set({ orders: updatedOrders, tax, totalPrice });
      },
    }),
    {
      name: "food-session",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        orders: state.orders,
        totalPrice: state.totalPrice,
        tax: state.tax,
      }),
    }
  )
);
