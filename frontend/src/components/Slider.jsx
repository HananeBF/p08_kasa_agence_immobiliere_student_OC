import React, { useEffect, useState } from "react";

import "@components/Slider.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log(setCurrentIndex);
    console.log(currentIndex);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    console.log(currentIndex);
  };

  return (
    <div className="Slider">
      <div className="Slides">
        <div key={images[currentIndex]} className="SlidesImages">
          <img
            src={images[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            className="Slide"
          />
          <>
            {images.length > 1 && (
              <div className="Counter">
                {currentIndex + 1}/{images.length}
              </div>
            )}
          </>
        </div>
        {images.length > 1 && (
          <button className="Left" onClick={prevImage}>
            &#10094;
          </button>
        )}
        {images.length > 1 && (
          <button className="Right" onClick={nextImage}>
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;
