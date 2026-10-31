import "./FeaturedTrailer.css";

const FeaturedTrailer = () => {
  return (
    <section className="featured-trailer">
      <div>
        <p className="eyebrow">Featured video</p>
        <h2>Fall 2026 Anime Season</h2>
        <p>Watch the latest season preview from Crunchyroll.</p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/zjTA2uE_y_8"
        title="Fall 2026 anime season trailer"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default FeaturedTrailer;
