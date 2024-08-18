import { Link } from "@tanstack/react-router";
import logo from "../../assets/drr-logo.png";
import { siteConfig } from "../../config/siteConfig";

export default function NavBar() {
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
            return (
              <Link
                key={item.label}
                to={item.path ?? "/"}
                activeOptions={{ exact: true }}
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
