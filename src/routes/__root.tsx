import { Loader } from "@/components/Loader";
import { validateUserSession } from "@/lib/utils";
import { AuthActions, AuthState } from "@/types/zustand";
import { useAuth } from "@/zustand/store";
import { useQuery } from "@tanstack/react-query";
import { createRootRouteWithContext, Navigate, Outlet } from "@tanstack/react-router";
import NavBar from "../components/Header/NavBar";

export const Route = createRootRouteWithContext<Pick<AuthState, "isAuthenticated"> & Pick<AuthActions, "login">>()({
  component: App,
  notFoundComponent: () => <Navigate to="/" replace />,
  wrapInSuspense: true,
  pendingComponent: Loader
});

function App() {
  const login = useAuth((state) => state.login);

  useQuery({
    queryKey: ["validateUserSession"],
    queryFn: async () => {
      try {
        const session = localStorage.getItem("session") ?? null;
        if (!session) return { userSession: null };
        const data = await validateUserSession({ session });
        login({ isAuthenticated: data.isAuthenticated, user: data.user, token: session });

        return;
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className="flex h-full min-h-screen flex-col text-white">
      <div className="fixed inset-0 -z-10 size-full flex-1 bg-main-layout bg-cover bg-center bg-no-repeat"></div>
      <header className="flex items-center justify-between px-8">
        <NavBar />
      </header>
      <div className="container m-auto flex-1 px-8">
        <Outlet />
      </div>
      <footer className="bg-footer bg-cover bg-center px-8 py-20">
        <div className="flex items-center justify-center gap-4 font-semibold uppercase">
          <p>Home</p>
          <p>|</p>
          <p>Blog</p>
          <p>|</p>
          <p>Help</p>
          <p>|</p>
          <p>Terms of use</p>
          <p>|</p>
          <p>Privacy policy</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span>Developed by</span>
          <a
            href="https://www.linkedin.com/in/carlos-alberto-garcia-cifuentes-b90410210/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold"
          >
            @CarlinGebyte
          </a>
          <span>and</span>
          <a href="https://github.com/StrafeYosef" target="_blank" rel="noreferrer noopener" className="font-bold">
            @Yoseful
          </a>
        </div>
      </footer>
    </div>
  );
}
