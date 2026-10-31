import { Link } from "react-router-dom";
import { Cloud } from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Footer.css";

/** Shows the shared footer and social links. */
const Footer = () => {
  return (
    <footer className="main-footer">
      <Link className="logo" to="/"><Cloud /> Cozy Corner</Link>
      <p>Your cozy space for anime, trailers, and everyday favorites.</p>

      {/* Social links */}
      <div className="socials">
        <a href="https://www.instagram.com/zrunit" data-tooltip-id="social-tip" data-tooltip-content="Visit Instagram">Instagram</a>
        <a href="https://www.linkedin.com/in/zakibushiri/" data-tooltip-id="social-tip" data-tooltip-content="Visit LinkedIn">LinkedIn</a>
        <a href="https://discord.gg/fgdWXJXKu5" data-tooltip-id="social-tip" data-tooltip-content="Join Discord">Discord</a>
      </div>
      <Tooltip id="social-tip" />

      <p className="copyright">© 2026 Cozy Corner</p>
    </footer>
  );
};

export default Footer;
