import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";
import "@pages/FicheLogement.css";
import Slider from "@components/Slider";
//import Rating from "@components/Rating"
import Collapse from "@components/Collapse";

const FicheLogement = () => {
  const [propertie, setPropertie] = useState([]);
  const [load, setLoad] = useState(true);
  const [slides, setSlides] = useState([]);

  const totalStars = useState(5);

  //Extract ID of the Location
  const { idl } = useParams();

  useEffect(() => {
    logementService
      .getLocation(idl)
      .then((res) => {
        setPropertie(res.data);
        console.log(res.data.pictures);
        setLoad(false);
        setSlides(res.data.pictures);
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
          <Slider images={slides} />
        </>

        <div className="LocationTitle">
          <h1>{propertie.title}</h1>

          <div className="LocationHost">
            <span>{propertie.host.name}</span>
            <span>{propertie.rating}/5</span>
            <img src={propertie.host.picture} />
          </div>
        </div>
        <div className="Localisation">
          <p>{propertie.location}</p>
          <div className="TagsLocation">
            {propertie.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="DescriptionLocation">
          
            <Collapse title="Description">
              <p>{propertie.description}</p>
            </Collapse>
          
            <Collapse title="Equipements">
              <ul>
                {propertie.equipments.map((tools) => (
                  <li key={tools}>{tools}</li>
                ))}
              </ul>
            </Collapse>
          
        </div>
      </div>
    </div>
  );
};
export default FicheLogement;
