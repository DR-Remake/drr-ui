import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import logo from "../assets/drr-logo.png";

export const Route = createRootRoute({
  component: App
});

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col bg-main-layout bg-cover bg-center px-8 text-white">
      <div className="flex items-center justify-between">
        <header>
          <Link to="/">
            <img src={logo} alt="logo" className="h-32" />
          </Link>
        </header>
        <nav>
          <div className="flex gap-2">
            <Link to="/" className="px-3 py-2">
              Home
            </Link>
            <Link to="/login" className="px-3 py-2">
              Login
            </Link>
            <Link to="/register" className="px-3 py-2">
              Register
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div>
        <footer>Hola</footer>
      </div>
    </div>
  );
}
