import React, { useState } from "react"

import "@components/Slider.css"

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
   
  }

  return (
    <div className="Slider">
      <div className="Slides">
        <div key={images[currentIndex]} className="SlidesImages">
          <img
            src={images[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            className="Slide"
          />
          {/* pour selon la taille du Array d'images contenues dans le slider, j'ajoute des boutons de navigations gauche et droite ainsi qu'un commpteur qui prend le numéro de l'index + 1 sur le total du nombre d'image. Si l'index supérieur à un ces éléments s'affiche */}
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
  )
}

export default Slider
