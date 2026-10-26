import { Link } from "react-router-dom";
import { Cloud } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <Link className="logo" to="/"><Cloud /> Cozy Corner</Link>
      <p>Your cozy space for anime, trailers, and everyday favorites.</p>

      <div className="socials">
        <a href="https://www.instagram.com/zrunit">Instagram</a>
        <a href="https://www.linkedin.com/in/zakibushiri/">LinkedIn</a>
        <a href="https://discord.gg/fgdWXJXKu5">Discord</a>
      </div>

      <p className="copyright">© 2026 Cozy Corner</p>
    </footer>
  );
};

export default Footer;
