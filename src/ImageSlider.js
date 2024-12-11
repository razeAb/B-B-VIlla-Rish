import React, { useState } from "react";
// import "../src/slides.css";

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
      <div className="gallery-wrapper">
        <div className="left-arrow" onClick={goToPrevious} role="button" aria-label="Previous slide">
          &larr;
        </div>
        {/* Main Image */}
        <div className="main-slide">
          <div
            className="main-image"
            style={{
              backgroundImage: `url(${slides[currentIndex].src})`,
            }}
          ></div>
        </div>
        {/* Side Images */}
        <div className="side-images">
          <div
            className="side-image"
            style={{
              backgroundImage: `url(${slides[(currentIndex - 1 + slides.length) % slides.length].src})`,
            }}
          ></div>
          <div
            className="side-image"
            style={{
              backgroundImage: `url(${slides[(currentIndex + 1) % slides.length].src})`,
            }}
          ></div>
        </div>
        <div className="right-arrow" onClick={goToNext} role="button" aria-label="Next slide">
          &rarr;
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
