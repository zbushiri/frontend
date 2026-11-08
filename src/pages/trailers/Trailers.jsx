import { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../../components/pageTitle/PageTitle";
import Trailer from "../../components/trailer/Trailer";
import "./Trailers.css";

const Trailers = () => {
  const [trailers, setTrailers] = useState([]);
  const [error, setError] = useState(false);
  const server = window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://cozy-corner-server.onrender.com";

  /* Loads trailers from the server */
  useEffect(() => {
    const loadTrailers = async () => {
      try {
        const response = await axios.get(`${server}/api/trailers`);
        if (Array.isArray(response.data)) {
          setTrailers(response.data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      }
    };

    loadTrailers();
  }, [server]);

  return (
    <div id="trailers" className="page">
      <PageTitle
        eyebrow="Fresh from Crunchyroll"
        title="Trailer Room"
        text="See new anime trailers from Crunchyroll."
      />

      {/* Trailer cards */}
      <section className="cards trailer-list">
        {error && <p className="server-message">Trailers could not be loaded. Please try again later.</p>}
        {!error && trailers.length === 0 && <p className="server-message">Loading trailers...</p>}
        {trailers.map((trailer) => (
          <Trailer
            key={trailer._id}
            title={trailer.title}
            type={trailer.type}
            release={trailer.release}
            text={trailer.description}
            image={`${server}/images/${trailer.main_image}`}
            video={trailer.video_url}
          />
        ))}
      </section>
    </div>
  );
};

export default Trailers;
