import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./SlideShow.css";

const SlideShow = ({ slides }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const slide = slides[slideNumber];

  const nextSlide = () => setSlideNumber((slideNumber + 1) % slides.length);
  const previousSlide = () => setSlideNumber((slideNumber - 1 + slides.length) % slides.length);

  return (
    <div className="slideshow">
      <button onClick={previousSlide} aria-label="Previous slide" data-tooltip-id="slide-tip" data-tooltip-content="Previous slide">‹</button>
      <Link className="slide" to={slide.path}>
        <img src={slide.image} alt={slide.title} />
        <div>
          <p className="eyebrow">Explore</p>
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
        </div>
      </Link>
      <button onClick={nextSlide} aria-label="Next slide" data-tooltip-id="slide-tip" data-tooltip-content="Next slide">›</button>
      <Tooltip id="slide-tip" />
    </div>
  );
};

export default SlideShow;
