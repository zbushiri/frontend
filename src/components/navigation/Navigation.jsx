import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** Shows the large menu and the small-screen toggle menu. */
const Navigation = () => {
  /* Remembers if the small menu is open. */
  const [menuOpen, setMenuOpen] = useState(false);

  /* Closes the menu after a page is selected. */
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav-area">
      {/* Small-screen menu button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      {/* Page links */}
      <nav className={`main-nav ${menuOpen ? "show-menu" : ""}`} aria-label="Main navigation">
        <ul>
          <li><NavLink to="/anime" onClick={closeMenu}>Anime Shelf</NavLink></li>
          <li><NavLink to="/upcoming" onClick={closeMenu}>Upcoming Releases</NavLink></li>
          <li><NavLink to="/trailers" onClick={closeMenu}>Trailer Room</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Me</NavLink></li>
          <li><NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
