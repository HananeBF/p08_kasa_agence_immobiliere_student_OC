import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";

const FicheLogement = () => {
  const flag = useRef(false);
  let navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const [propertie, setPropertie] = useState([])

  useEffect(() => {
    if (flag.current === false) {
      logementService
        .getLocation(id)
        .then((res) => {
          console.log(res.data)
          setPropertie(res.data)
        })
        .catch((err) => console.log(err))
    }

    return () => flag.current = true
  }, [])

  return (
    <div className="FicheLogement">
      FicheLogement
      <div className="Location">

        {
        propertie.map(flat => (
            <img src={flat.cover} />,
            <h2>{flat.title}</h2>,
            <p>{flat.description}</p>
          )
        )}
      </div>
    </div>
  );
};
export default FicheLogement;
