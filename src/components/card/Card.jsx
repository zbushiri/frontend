import "./Card.css";

/** Shows one reusable information card. */
const Card = ({ image, title, text }) => {
  return (
    <article className="card">
      {image && <img src={image} alt={title} />}
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </article>
  );
};

export default Card;
