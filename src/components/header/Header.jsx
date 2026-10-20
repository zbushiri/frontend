import "./Header.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <a className="main-header-logo" href="./">☁️ Cozy Corner</a>
            <Navigation />
        </header>
    );
};

export default Header;
