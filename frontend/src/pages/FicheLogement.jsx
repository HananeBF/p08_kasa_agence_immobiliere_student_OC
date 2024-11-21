import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";
import "@pages/FicheLogement.css";
import Slider from "@components/Slider";

//import Collapse from "@components/Collapse";

const FicheLogement = () => {
  const [propertie, setPropertie] = useState([])
  const [load, setLoad] = useState(true)
  const [slides, setSlides] = useState([])
  
  

  //Extract ID of the Location
  const { id } = useParams();
  


  useEffect(() => {
    logementService
      .getLocation(id)
      .then((res) => {
        setPropertie(res.data);
        console.log(res.data.pictures);
        setLoad(false);
        setSlides(res.data.pictures)       
      })
      .catch((err) => console.log(err));
  }, []);
  

  if (load) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="FicheLogement">
      <div className="Location">
      <>
          <Slider images={slides}/>
      </>

        <div className="LocationTitle">
          <h2>{propertie.title}</h2>
          <div className="LocationHost">
            <span>{propertie.host.name}</span>
            <img src={propertie.host.picture} />
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
            <ul className="ListTools">
              {propertie.equipments.map((tools) => (
                <li key={tools.id}>{tools}</li>
              ))}
            </ul>
          </div>
        </div>

        
      </div>
    </div>
  );
};
export default FicheLogement;
