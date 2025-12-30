import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? "bg-black text-white" : "text-black/70 hover:text-black hover:bg-black/5"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-semibold tracking-tight">
          Tobin Richards
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
	  <NavLink to="/contact" className={linkClass}>
	    Contact Me
	  </NavLink>
        </div>
      </nav>
    </header>
  );
}
