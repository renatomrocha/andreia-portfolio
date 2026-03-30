import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-inter text-[14px] font-semibold tracking-[-0.42px] leading-[14px] ${
      isActive ? "text-cod-gray" : "text-boulder"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-11 items-center bg-white border-b border-mercury px-5">
      <div className="flex items-center gap-[3px] w-[470px] shrink-0">
        <span className="font-koulen text-[18px] text-cod-gray leading-[20px] tracking-[-0.42px]">
          ✺
        </span>
        <NavLink to="/" className="font-koulen text-[18px] text-cod-gray leading-[20px] tracking-[-0.42px]">
          Andreia
        </NavLink>
      </div>

      <div className="flex items-center gap-1 pl-4 flex-1">
        <NavLink to="/" className={linkClass}>
          Home,
        </NavLink>
        <NavLink to="/info" className={linkClass}>
          Info,
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      <a
        href="#"
        className="font-inter text-[14px] font-semibold text-cod-gray tracking-[-0.42px] leading-[14px] underline shrink-0"
      >
        Book a Call
      </a>
    </nav>
  );
}
