export interface User {
  email: string;
  username: string;
  isEmailVerified: boolean;
}

export interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: ({ user, isAuthenticated, token }: { user: User; isAuthenticated: boolean; token: string }) => void;
  logout: () => void;
}
