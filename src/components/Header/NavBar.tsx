import { Link } from "@tanstack/react-router";
// import logo from "../../assets/dr-logo.png";
import AnimatedLogo from "./AnimatedLogo";

export default function NavBar() {
  return (
    <>
      <Link to="/">
        {/* <img src={logo} alt="logo" className="w-56" /> */}
        <AnimatedLogo />
      </Link>
    </>
  );
}
