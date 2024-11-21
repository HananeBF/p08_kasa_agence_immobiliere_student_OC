import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";
import "@pages/FicheLogement.css";
import Slider from "@components/Slider";

import Collapse from "@components/Collapse";

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
          <p>{propertie.location}</p>
          <div className="LocationHost">
            <span>{propertie.host.name}</span>
            <img src={propertie.host.picture} />
          </div>
          <div className="TagsLocation">
          {propertie.tags.map((tag) => (
                <span key={tag.id}>{tag}</span>
              ))}
          </div>
          
        </div>
        <div className="DescriptionLocation">
        <>
      <Collapse title="Description">
      <p>{propertie.description}</p>
      </Collapse>
      </>
      <>
      <Collapse title="Equipements">
      <ul className="ListTools">
              {propertie.equipments.map((tools) => (
                <li key={tools.id}>{tools}</li>
              ))}
            </ul>
      </Collapse>
      </>
          
        </div>

        
      </div>
    </div>
  );
};
export default FicheLogement;
