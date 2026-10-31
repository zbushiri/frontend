import "./PageTitle.css";

/** Shows the heading at the top of an inside page. */
const PageTitle = ({ eyebrow, title, text }) => {
  return (
    <div className="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro">{text}</p>
    </div>
  );
};

export default PageTitle;
