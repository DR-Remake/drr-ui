import { create } from "zustand";
import { AuthStore } from "../types/zustand";

export const useAuth = create<AuthStore>((set) => ({
  isAuthenticated: false,
  token: null,
  user: null,
  login: ({ user, isAuthenticated, token }) => set({ isAuthenticated, user, token }),
  logout: () => set({ isAuthenticated: false, user: null, token: null })
}));
