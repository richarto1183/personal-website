import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition ${
    isActive ? "bg-white/10" : "hover:bg-white/10"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-6 py-3 flex gap-2">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About Me
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
}
