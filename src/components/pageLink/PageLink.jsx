import { Link } from "react-router-dom";
import "./PageLink.css";

/** Shows one large homepage link. */
const PageLink = (props) => {
  return (
    <Link className="home-link" to={props.path}>
      <img className={props.fit} src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </Link>
  );
};

export default PageLink;
