import { Link } from "react-router-dom";
import "./Home.css";
import PageLink from "../../components/pageLink/PageLink";
import bookshelf from "../../images/bookshelf.avif";
import soon from "../../images/soon.jpg";
import crunchyroll from "../../images/crunchyroll.png";
import me from "../../images/me.jpg";
import what from "../../images/what.jpg";

const Home = () => {
  return (
    <div id="home" className="page">
      {/* Welcome */}
      <section className="home-hero">
        <div>
          <h1>Welcome to Cozy Corner</h1>
          <p>
            A cozy place for anime recommendations, fresh trailers,
            community favorites, and stories worth sharing.
          </p>
          <Link className="button" to="/anime">Browse the Shelf</Link>
        </div>
      </section>

      {/* Page links */}
      <section>
        <h2>Explore Cozy Corner</h2>
        <div className="home-links">
          <PageLink
            path="/anime"
            title="Anime Shelf"
            text="Find anime based on genres you enjoy."
            image={bookshelf}
          />
          <PageLink
            path="/upcoming"
            title="Upcoming Releases"
            text="See new anime releases and when they are coming out."
            image={soon}
          />
          <PageLink
            path="/trailers"
            title="Trailer Room"
            text="See fresh anime trailers from Crunchyroll."
            image={crunchyroll}
          />
          <PageLink
            path="/about"
            title="About Me"
            text="Meet the person behind Cozy Corner."
            image={me}
          />
          <PageLink
            path="/faq"
            title="FAQ"
            text="Find answers to common questions about the website."
            image={what}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
