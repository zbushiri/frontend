import "./PageTitle.css";

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
