import { Link } from "react-router-dom";
import "./PageLink.css";

const PageLink = (props) => {
  return (
    <Link className="home-link" to={props.path}>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </Link>
  );
};

export default PageLink;
