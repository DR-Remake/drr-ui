import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./zustand/store";

const router = createRouter({
  routeTree,
  context: { isAuthenticated: false, login: () => {} }
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
export default function Main() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const login = useAuth((state) => state.login);
  return <RouterProvider router={router} context={{ isAuthenticated, login }} />;
}
