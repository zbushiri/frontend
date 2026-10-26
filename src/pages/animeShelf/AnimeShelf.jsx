import PageTitle from "../../components/pageTitle/PageTitle";
import Anime from "../../components/anime/Anime";
import "./AnimeShelf.css";
import blackClover from "../../images/trailers/black-clover.jpg";
import frieren from "../../images/trailers/frieren.jpg";
import vigilantes from "../../images/trailers/vigilantes.jpg";
import dandadan from "../../images/trailers/dandadan.jpg";

const AnimeShelf = () => {
  return (
    <div id="anime-shelf" className="page">
      <PageTitle
        eyebrow="Find your next favorite"
        title="Anime Shelf"
        text="Choose a genre and explore a few anime recommendations."
      />

      {/* Anime cards */}
      <section className="cards anime-list">
        <Anime title="Black Clover" genre="Action Fantasy" image={blackClover} />
        <Anime title="Frieren" genre="Fantasy Adventure" image={frieren} />
        <Anime title="My Hero Academia: Vigilantes" genre="Superhero Action" image={vigilantes} />
        <Anime title="DAN DA DAN" genre="Supernatural Action" image={dandadan} />
      </section>
    </div>
  );
};

export default AnimeShelf;
