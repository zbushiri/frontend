import "./AnimeModal.css";

/** Shows more information about one anime. */
const AnimeModal = (props) => {
  /* Covers the page while details are open */
  return (
    <div className="modal-background">
      <section className="anime-modal" role="dialog" aria-modal="true">
        {/* Closes the modal */}
        <button className="modal-close" onClick={props.onClose}>Close</button>
        {/* Selected anime details */}
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
