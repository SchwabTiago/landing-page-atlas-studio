import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? "text-blue-500 font-inter font-medium tracking-widest"
    : "hover:text-blue-500 transition font-inter tracking-widest";
}

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex items-center justify-between h-20 mr-12 ml-12">
          <Logo />
          <ul className="flex gap-16">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={navLinkClass}>
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                CONTACT
              </NavLink>
            </li>
          </ul>
          <Button>CONTACT US</Button>
        </div>
      </header>
    </>
  );
}
