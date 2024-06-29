import { Link } from "@tanstack/react-router";
import logo from "../../assets/drr-logo.png";
import { siteConfig } from "../../config/siteConfig";
import { useAuth } from "../../zustand/store";

export default function NavBar() {
  const logout = useAuth((state) => state.logout);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const token = useAuth((state) => state.token) ?? "";

  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="h-32" />
        </Link>
      </div>
      <nav>
        <div className="flex gap-4">
          {siteConfig.navbar.map((item) => {
            if (item.hideInAuth && isAuthenticated) return null;
            if (item.isAuth && !isAuthenticated) return null;
            return (
              <Link
                key={item.label}
                to={item.path ?? "/"}
                activeOptions={{ exact: true }}
                onClick={() => item.onClick?.({ isAuthenticated, token, logout })}
                activeProps={{ className: "bg-white text-primary" }}
                className="rounded-md px-3 py-2 font-bold transition-colors hover:bg-white hover:text-primary"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
