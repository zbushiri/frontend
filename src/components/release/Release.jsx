import "./Release.css";

const Release = (props) => {
  return (
    <article className="release">
      <img src={props.image} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
      </div>
    </article>
  );
};

export default Release;
