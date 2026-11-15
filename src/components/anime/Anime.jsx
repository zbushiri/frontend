import "./Anime.css";

/** Shows one anime item in the list. */
const Anime = (props) => {
  /* The whole card opens the details modal */
  return (
    <button className="anime" onClick={props.onClick}>
      <img src={props.image} alt={props.title} />
      <span>
        <h2>{props.title}</h2>
        <p>{props.genre}</p>
      </span>
    </button>
  );
};

export default Anime;
