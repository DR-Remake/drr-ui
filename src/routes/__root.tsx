import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import logo from "../assets/drr-logo.png";
import { siteConfig } from "../config/siteConfig";

export const Route = createRootRoute({
  component: App
});

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col text-white">
      <div className="fixed inset-0 -z-10 size-full flex-1 bg-main-layout bg-cover bg-center bg-no-repeat"></div>
      <div className="flex items-center justify-between px-8">
        <header>
          <Link to="/">
            <img src={logo} alt="logo" className="h-32" />
          </Link>
        </header>
        <nav>
          <div className="flex gap-4">
            {siteConfig.navbar.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-white text-primary" }}
                className="rounded-md px-3 py-2 font-bold transition-colors hover:bg-white hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
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
          <a href="https://github.com/StrafeYosef" target="_blank" rel="noreferrer noopener" className="font-bold">
            @Yoseful
          </a>
          <span>and</span>
          <a
            href="https://www.linkedin.com/in/carlos-alberto-garcia-cifuentes-b90410210/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold"
          >
            @CarlinGebyte
          </a>
        </div>
      </footer>
    </div>
  );
}
