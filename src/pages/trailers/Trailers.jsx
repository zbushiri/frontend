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
        <Trailer title="Fall 2026 Anime Season" text="Check out the Fall lineup." image={fall} video="https://www.youtube.com/embed/zjTA2uE_y_8" />
        <Trailer title="Black Clover Season 2" text="Asta and the Black Bulls are back." image={blackClover} video="https://www.youtube.com/embed/Y7sQPj1moTw" />
        <Trailer title="Summer 2026 Anime Season" text="Check out the Summer lineup." image={summer} video="https://www.youtube.com/embed/DWM2IfkzLHo" />
        <Trailer title="Re:ZERO Season 4" text="Re:ZERO returns in 2026." image={rezero} video="https://www.youtube.com/embed/jVl4bY81iIs" />
        <Trailer title="Spring 2026 Anime Season" text="Check out the Spring lineup." image={spring} video="https://www.youtube.com/embed/7Wc6ugY3meg" />
        <Trailer title="Frieren Season 2" text="Frieren returns for a new season." image={frieren} video="https://www.youtube.com/embed/EOMVXqH9DSg" />
        <Trailer title="My Hero Academia: Vigilantes" text="More superhero action is coming." image={vigilantes} video="https://www.youtube.com/embed/WSAbTZuGmW4" />
        <Trailer title="DAN DA DAN Season 2" text="The supernatural adventure continues." image={dandadan} video="https://www.youtube.com/embed/0G7HX16YTLU" />
      </section>
    </div>
  );
};

export default Trailers;
