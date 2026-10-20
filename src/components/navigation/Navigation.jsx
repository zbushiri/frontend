import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#anime">Anime Shelf</a></li>
                <li><a href="#upcoming">Upcoming Releases</a></li>
                <li><a href="#trailers">Trailer Room</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
