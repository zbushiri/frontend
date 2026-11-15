import "./AnimeModal.css";

/** Shows more information about one anime. */
const AnimeModal = (props) => {
  return (
    <div className="modal-background">
      <section className="anime-modal" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={props.onClose}>Close</button>
        <img src={props.image} alt={props.anime.title} />
        <div>
          <h2>{props.anime.title}</h2>
          <p className="anime-details">{props.anime.genre} • {props.anime.year}</p>
          <p>{props.anime.description}</p>
        </div>
      </section>
    </div>
  );
};

export default AnimeModal;
