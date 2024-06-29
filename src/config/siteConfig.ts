import { logoutRequest } from "@/rest/auth";

export const siteConfig = {
  title: "My Site",
  description: "This is my site",
  navbar: [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Login",
      path: "/login",
      hideInAuth: true
    },
    {
      label: "Register",
      path: "/register",
      hideInAuth: true
    },
    {
      label: "Profile",
      path: "/profile",
      isAuth: true
    },
    {
      label: "Logout",
      path: "/logout",
      onClick: async ({
        token,
        isAuthenticated,
        logout
      }: {
        token: string;
        isAuthenticated: boolean;
        logout: () => void;
      }) => {
        try {
          if (!token || !isAuthenticated) throw new Error("Unauthorized");
          localStorage.removeItem("session");
          await logoutRequest({ token });
          logout();
        } catch (error) {
          console.error(error);
        }
      },
      isAuth: true
    }
  ],
  env: {
    BASE_API: import.meta.env.BASE_API ?? "http://localhost:3000/api"
  }
};
