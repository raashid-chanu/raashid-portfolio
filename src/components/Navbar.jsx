import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">

      {/* LOGO */}
      <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
        MR<span>.</span>
      </NavLink>

      {/* DESKTOP NAVIGATION */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* CONTACT BUTTON */}
      <NavLink
        to="/contact"
        className="nav-button"
        onClick={() => setMenuOpen(false)}
      >
        Let's Talk <ArrowUpRight size={16} />
      </NavLink>

      {/* MOBILE MENU BUTTON */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

    </nav>
  );
}

export default Navbar;