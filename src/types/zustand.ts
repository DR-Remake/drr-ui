export interface User {
  email: string;
  avatar: string;
  username: string;
  isVerifiedEmail: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

export interface AuthActions {
  login: ({
    user,
    isAuthenticated,
    token
  }: {
    user: AuthState["user"];
    isAuthenticated: AuthState["isAuthenticated"];
    token: AuthState["token"];
  }) => void;
  updateAvatar: ({ avatar }: { avatar: string }) => void;
  logout: () => void;
}
