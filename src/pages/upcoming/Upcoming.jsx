import PageTitle from "../../components/pageTitle/PageTitle";
import Release from "../../components/release/Release";
import "./Upcoming.css";
import fall from "../../images/trailers/fall-2026.jpg";
import summer from "../../images/trailers/summer-2026.jpg";
import spring from "../../images/trailers/spring-2026.jpg";
import rezero from "../../images/trailers/rezero.jpg";

const Upcoming = () => {
  return (
    <div id="upcoming" className="page">
      <PageTitle
        eyebrow="Coming soon"
        title="Upcoming Releases"
        text="A simple watchlist for anime arriving next. Dates can change, so official announcements are the final word."
      />

      {/* Release cards */}
      <section className="cards release-list">
        <Release title="Spring 2026 Season" date="Spring 2026" image={spring} />
        <Release title="Summer 2026 Season" date="Summer 2026" image={summer} />
        <Release title="Fall 2026 Season" date="Fall 2026" image={fall} />
        <Release title="Re:ZERO Season 4" date="2026" image={rezero} />
      </section>
    </div>
  );
};

export default Upcoming;
