import PageTitle from "../../components/pageTitle/PageTitle";
import Card from "../../components/card/Card";
import { Hand } from "lucide-react";
import "./About.css";
import me from "../../images/me.jpg";

const About = () => {
  return (
    <div id="about" className="page">
      <PageTitle
        eyebrow="Behind the site"
        title="About Me"
        text="Meet the person behind Cozy Corner."
      />

      {/* About me */}
      <section className="about-grid">
        <img src={me} alt="Zaki" />
        <div>
          <h2 className="about-heading">Hi, I'm Zaki. <Hand /></h2>
          <p>
            I built Cozy Corner as a personal space to help others find and
            keep track of anime they like.
          </p>
          <p>No algorithms and no noise - just you, the site, and anime.</p>
        </div>
      </section>

      {/* About cards */}
      <section>
        <h2>A Few Things About Me</h2>
        <div className="cards">
          <Card
            title="Favorite genres"
            text="Action, Drama, and Fantasy with a soft spot for stories with lessons."
          />
          <Card
            title="What I enjoy"
            text="Anime, movies, shows, and games that tell a good story."
          />
          <Card
            title="Why I made Cozy Corner"
            text="To keep recommendations and trailers together in one calm place."
          />
        </div>
      </section>
    </div>
  );
};

export default About;
