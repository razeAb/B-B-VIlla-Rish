import React, { useState } from "react";
import "../src/slides.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  

  return (
    <div className="slider-container">
      <div className="left-arrow" onClick={goToPrevious}>
        &larr;
      </div>
      <div className="right-arrow" onClick={goToNext}>
        &rarr;
      </div>
      <div
        className="slide"
        style={{
          backgroundImage: `url(${slides[currentIndex].src})`,
        }}
      ></div>
      {/* <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></div> */}
    </div>
  );
};

export default ImageSlider;
