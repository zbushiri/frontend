import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a className="active" href="./">Home</a></li>
                <li><a href="anime.html">Anime Shelf</a></li>
                <li><a href="upcoming.html">Upcoming Releases</a></li>
                <li><a href="trailers.html">Trailer Room</a></li>
                <li><a href="about.html">About Me</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
