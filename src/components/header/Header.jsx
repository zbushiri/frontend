import { Link } from "react-router-dom";
import { Cloud } from "lucide-react";
import "./Header.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-top">
        <Link className="logo" to="/"><Cloud /> Cozy Corner</Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
