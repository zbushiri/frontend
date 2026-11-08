import "./Trailer.css";

/** Shows one trailer picture, description, and video. */
const Trailer = (props) => {
  return (
    <article className="trailer">
      <img src={props.image} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p className="trailer-info">{props.type} • {props.release}</p>
        <p>{props.text}</p>
        {/* Trailer video */}
        <iframe src={props.video} title={`${props.title} trailer`} allowFullScreen></iframe>
      </div>
    </article>
  );
};

export default Trailer;
