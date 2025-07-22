import { create } from "zustand";

export type User = {
  name: string;
  count: number;
};

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUser = create<UserState>()((set) => ({
  user: null,
  setUser(user) {
    set({ user });
  },
}));
