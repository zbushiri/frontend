import { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../../components/pageTitle/PageTitle";
import Anime from "../../components/anime/Anime";
import AnimeForm from "../../components/animeForm/AnimeForm";
import AnimeModal from "../../components/animeModal/AnimeModal";
import "./AnimeShelf.css";

/* Uses the local server during development and Render on the live site */
const server = window.location.hostname === "localhost"
  ? "http://localhost:3001"
  : "https://backend-jcmr.onrender.com";

const AnimeShelf = () => {
  /* Stores the server list, selected card, and loading error */
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [error, setError] = useState(false);

  /* Loads the Anime Shelf */
  useEffect(() => {
    const loadAnime = async () => {
      try {
        const response = await axios.get(`${server}/api/anime`);
        setAnimeList(response.data);
      } catch {
        setError(true);
      }
    };

    loadAnime();
  }, []);

  /* Adds the new anime to the page */
  const addAnime = (anime) => {
    setAnimeList([...animeList, anime]);
  };

  return (
    <div id="anime-shelf" className="page">
      <PageTitle
        eyebrow="Find your next favorite"
        title="Anime Shelf"
        text="Add anime and create your own shelf of shows you want to remember."
      />

      {/* Anime cards */}
      <section className="cards anime-list">
        {/* Loading and error messages */}
        {error && <p className="anime-message">Anime could not be loaded.</p>}
        {!error && animeList.length === 0 && <p className="anime-message">Loading anime...</p>}
        {animeList.map((anime) => (
          <Anime
            key={anime._id}
            title={anime.title}
            genre={anime.genre}
            image={`${server}/images/${anime.main_image}`}
            onClick={() => setSelectedAnime(anime)}
          />
        ))}
      </section>

      {/* Add Anime form */}
      <AnimeForm server={server} onAdd={addAnime} />

      {/* Opens details for the selected anime */}
      {selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          image={`${server}/images/${selectedAnime.main_image}`}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </div>
  );
};

export default AnimeShelf;
