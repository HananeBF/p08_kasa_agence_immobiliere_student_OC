import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";
import "@pages/FicheLogement.css";
import Slider from "@/components/Slider";

const FicheLogement = () => {
  const [propertie, setPropertie] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [load, setLoad] = useState(true)

  //Extract ID of the Location
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
   
      logementService
        .getLocation(id)
        .then((res) => {
          console.log(res.data);
          setPropertie(res.data);
          setLoad(false)
        })
        .catch((err) => console.log(err));
    
  }, []);

  if(load) {
    return <div>Loading...</div>
  }

  return (
    <div className="FicheLogement">
      <div className="Location">
        <div className="ImgLocation">
          <img src={propertie.cover} />  
          
        </div>
        
        <div className="LocationTitle">
          <h2>{propertie.title}</h2>
          <div className="LocationHost">
            <span>{propertie.host.name}</span>
            <img src={propertie.host.picture}/>
          </div>
          <p>{propertie.location}</p>
         
        </div>
        <div className="DescriptionLocation">
          <div className="Collapse">
            <button type="button">Description</button>
            <p>{propertie.description}</p>
          </div>
          <div className="Collapse">
            <button type="button">Equipements</button>
            <ul>
              <li>{propertie.equipements}</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
          <Slider>
          {propertie.pictures.map((slide) => (
          <div key={slide[currentIndex]} className="SlidesImages">
            <img className="Slide" src={slide[currentIndex].url}/>
          </div>
        ))}
          </Slider>
      </div>
    </div>
  );
};
export default FicheLogement;
