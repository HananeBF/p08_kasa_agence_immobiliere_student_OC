import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";
import '@components/Slider.css'


const Slider = () => {
  const [propertie, setPropertie] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [load, setLoad] = useState(true)
  
 

  //Extract ID of the Location
  const { id } = useParams();

  useEffect(() => {
    logementService
      .getLocation(id)
      .then((res) => {
        console.log(res.data);
        setPropertie(res.data);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, [])

  const nextImage = (event) => {
    event.preventDefault()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % propertie.pictures.length)
    console.log(setCurrentIndex)
  }

  const prevImage = (e) => {
    e.preventDefault()
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + propertie.pictures.length) % propertie.pictures.length)
  }

  if (load) {
    return <div>Loading...</div>
  }

  return (
    <div className="Slider">
      <div className="Slides">
        {propertie.pictures.map((slide) => (
          <div key={slide[currentIndex]} className="SlidesImages">
            <img className="Slide"
              src={slide[currentIndex].url}/>
          </div>
        ))}
        <button className="Left" onClick={prevImage}>&#10094;</button>
        <button className="Right"onClick={nextImage}> &#10095;</button>
      </div>
    </div>
  );
};

export default Slider;
