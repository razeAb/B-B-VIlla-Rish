import React, { useState } from "react";
import "../src/slides.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container flex flex-col items-center justify-center">
      {/* Main Image with Arrows */}
      <div className="gallery-wrapper relative w-full max-w-5xl flex items-center justify-center">
        <div
          className="left-arrow"
          onClick={goToPrevious}
          role="button"
          aria-label="Previous slide"
        >
          &larr;
        </div>

        <div className="main-slide w-full">
          <div
            className="main-image"
            style={{
              backgroundImage: `url(${slides[currentIndex].src})`,
            }}
          ></div>
        </div>

        <div
          className="right-arrow"
          onClick={goToNext}
          role="button"
          aria-label="Next slide"
        >
          &rarr;
        </div>
      </div>

      {/* Side Images Underneath */}
      <div className="side-images flex gap-4 mt-6">
        {[
          (currentIndex - 1 + slides.length) % slides.length,
          (currentIndex + 1) % slides.length,
        ].map((index) => (
          <div
            key={index}
            className="side-image cursor-pointer"
            style={{
              backgroundImage: `url(${slides[index].src})`,
            }}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
