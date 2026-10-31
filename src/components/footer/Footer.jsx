import { Link } from "react-router-dom";
import { Cloud } from "lucide-react";
import "./Footer.css";

/** Shows the shared footer and social links. */
const Footer = () => {
  return (
    <footer className="main-footer">
      <Link className="logo" to="/"><Cloud /> Cozy Corner</Link>
      <p>Your cozy space for anime, trailers, and everyday favorites.</p>

      {/* Social links */}
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
