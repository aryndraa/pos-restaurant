import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type User = {
  name: string;
  count: number;
};

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUser = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-session",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ user: state.user }),
    }
  )
);
