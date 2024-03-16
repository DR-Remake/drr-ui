import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: App
});

function App() {
  return (
    <>
      <div></div>
      <Outlet />
    </>
  );
}
