import "./Trailer.css";

const Trailer = (props) => {
  return (
    <article className="trailer">
      <img src={props.image} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </article>
  );
};

export default Trailer;
