import React, { useEffect, useRef, useState }  from "react"

import { useParams, useNavigate } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";

const FicheLogement = () => {
  let navigate = useNavigate()
    const [propertie, setPropertie] = useState([])
    
    useEffect(() => {
        logementService.getLocation()
            .then(res => {

                setPropertie(res.data)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div className="FicheLogement">
      FicheLogement
      <div className="Location">
        {
          propertie.map(flat => (
            <img src={flat.cover}/>,
            <h2>{flat.title}</h2>,
            <p>{flat.description}</p>
          ))
        }
    
      </div>
      
    </div>
  )
}
export default FicheLogement
