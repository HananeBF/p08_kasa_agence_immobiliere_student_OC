import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";

const FicheLogement = () => {
  const [propertie, setPropertie] = useState([]);
  const flag = useRef(false);
  let navigate = useNavigate();

  // Récupération ID du logement
  const { id } = useParams();

  useEffect(() => {
    if (flag.current === false) {
      logementService
        .getLocation(id)
        .then((res) => {
          setPropertie(res.data);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, []);

  return (
    <div className="FicheLogement">
      FicheLogement
      <div className="Location">
        <img src={propertie.cover}/>
        <h2>{propertie.title}</h2>
        <p>{propertie.description}</p>
      </div>
      
    </div>
  )
}
export default FicheLogement;
