import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";
import "@pages/FicheLogement.css";

const FicheLogement = () => {
  const [propertie, setPropertie] = useState([]);
  const flag = useRef(false);

  //Extract ID of the Location
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (flag.current === false) {
      logementService
        .getLocation(id)
        .then((res) => {
          console.log(res.data);
          setPropertie(res.data);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, []);

  return (
    <div className="FicheLogement">
      <div className="Location">
        <div className="ImgLocation">
          <img src={propertie.cover} />
          <figure className="SliderImage" src={propertie.pictures} />
          {/* mettre en place un slider ici */}
        </div>
        <div className="LocationTitle">
          <h2>{propertie.title}</h2>
          <p>{propertie.location}</p>
          <div className="LocationHost">
            <span>{propertie.host.name}</span>
            <img src={propertie.host.picture}/>
          </div>
        </div>
        <div className="DescriptionLocation">
          <button type="button">Description</button>
          <p>{propertie.description}</p>
          <button type="button">Equipements</button>
          <ul>
            <li>{propertie.equipements}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FicheLogement;
