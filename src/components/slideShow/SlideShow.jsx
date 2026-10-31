import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./SlideShow.css";

/** Shows one slide at a time without a slideshow library. */
const SlideShow = ({ slides }) => {
  /* Remembers the current slide. */
  const [slideNumber, setSlideNumber] = useState(0);
  const slide = slides[slideNumber];

  /* Changes the slide and loops at each end. */
  const nextSlide = () => setSlideNumber((slideNumber + 1) % slides.length);
  const previousSlide = () => setSlideNumber((slideNumber - 1 + slides.length) % slides.length);

  return (
    <div className="slideshow">
      {/* Previous button */}
      <button onClick={previousSlide} aria-label="Previous slide" data-tooltip-id="slide-tip" data-tooltip-content="Previous slide">‹</button>

      {/* Current slide */}
      <Link className="slide" to={slide.path}>
        <img className={slide.fit} src={slide.image} alt={slide.title} />
        <div>
          <p className="eyebrow">Explore</p>
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
        </div>
      </Link>

      {/* Next button and tooltip */}
      <button onClick={nextSlide} aria-label="Next slide" data-tooltip-id="slide-tip" data-tooltip-content="Next slide">›</button>
      <Tooltip id="slide-tip" />
    </div>
  );
};

export default SlideShow;
