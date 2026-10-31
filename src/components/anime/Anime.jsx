import "./Anime.css";

/** Shows one anime item in the list. */
const Anime = (props) => {
  return (
    <article className="anime">
      <img src={props.image} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.genre}</p>
      </div>
    </article>
  );
};

export default Anime;
