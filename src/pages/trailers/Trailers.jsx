import PageTitle from "../../components/pageTitle/PageTitle";
import Trailer from "../../components/trailer/Trailer";
import "./Trailers.css";
import fall from "../../images/trailers/fall-2026.jpg";
import blackClover from "../../images/trailers/black-clover.jpg";
import summer from "../../images/trailers/summer-2026.jpg";
import rezero from "../../images/trailers/rezero.jpg";
import spring from "../../images/trailers/spring-2026.jpg";
import frieren from "../../images/trailers/frieren.jpg";
import vigilantes from "../../images/trailers/vigilantes.jpg";
import dandadan from "../../images/trailers/dandadan.jpg";

const Trailers = () => {
  return (
    <div id="trailers" className="page">
      <PageTitle
        eyebrow="Fresh from Crunchyroll"
        title="Trailer Room"
        text="See new anime trailers from Crunchyroll."
      />

      {/* Trailer cards */}
      <section className="cards trailer-list">
        <Trailer title="Fall 2026 Anime Season" text="Check out the Fall lineup." image={fall} />
        <Trailer title="Black Clover Season 2" text="Asta and the Black Bulls are back." image={blackClover} />
        <Trailer title="Summer 2026 Anime Season" text="Check out the Summer lineup." image={summer} />
        <Trailer title="Re:ZERO Season 4" text="Re:ZERO returns in 2026." image={rezero} />
        <Trailer title="Spring 2026 Anime Season" text="Check out the Spring lineup." image={spring} />
        <Trailer title="Frieren Season 2" text="Frieren returns for a new season." image={frieren} />
        <Trailer title="My Hero Academia: Vigilantes" text="More superhero action is coming." image={vigilantes} />
        <Trailer title="DAN DA DAN Season 2" text="The supernatural adventure continues." image={dandadan} />
      </section>
    </div>
  );
};

export default Trailers;
