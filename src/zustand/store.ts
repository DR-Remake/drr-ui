import { create } from "zustand";
import { AuthActions, AuthState } from "../types/zustand";

export const initialAuthState: AuthState & AuthActions = {
  isAuthenticated: false,
  token: null,
  user: null,
  login: () => {},
  updateAvatar: () => {},
  logout: () => {}
};

export const useAuth = create<AuthState & AuthActions>((set) => ({
  isAuthenticated: false,
  token: null,
  user: null,
  login: ({ user, isAuthenticated, token }) => set({ isAuthenticated, user, token }),
  updateAvatar: ({ avatar }) => set((state) => (state.user ? { user: { ...state.user, avatar } } : state)),
  logout: () => set({ isAuthenticated: false, user: null, token: null })
}));
