import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? "text-blue-500 font-inter text-lg font-medium tracking-widest"
    : "hover:text-blue-500 transition text-lg font-inter tracking-widest";
}

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex items-center justify-between h-24 mr-15 ml-15">
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
          <button className="bg-blue-500 text-white pt-2 pb-2 pl-6 pr-6 rounded-xl font-inter hover:bg-blue-500/90 transition cursor-pointer font-medium text-lg">
            START A PROJECT
          </button>
        </div>
      </header>
    </>
  );
}
