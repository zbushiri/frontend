import "./Anime.css";

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
