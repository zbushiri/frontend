import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <ul>
        <li><NavLink to="/anime">Anime Shelf</NavLink></li>
        <li><NavLink to="/upcoming">Upcoming Releases</NavLink></li>
        <li><NavLink to="/trailers">Trailer Room</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
