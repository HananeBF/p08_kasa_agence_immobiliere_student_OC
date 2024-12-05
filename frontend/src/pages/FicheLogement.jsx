import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { logementService } from "@/_services/logement.service.jsx"
import "@pages/FicheLogement.css"
import Slider from "@components/Slider"
import Rating from "@components/Rating"
import Collapse from "@components/Collapse"
import Error from "@/_utils/Error"

const FicheLogement = () => {
  const [propertie, setPropertie] = useState([])
  const [load, setLoad] = useState(true)
  const [slides, setSlides] = useState([])
  const [rating, setRating] = useState(0)
  const [error, setError] = useState(null)

  //Extract ID of the Location (idl)
  const { idl } = useParams()

  useEffect(() => {
    logementService
      .getLocation(idl)
      .then((res) => {
        setPropertie(res.data)
        setLoad(false)
        setSlides(res.data.pictures)
        setRating(res.data.rating)
        setError(false)
      })
      .catch((err) => {

        // si l'erreur est catché par la console, comme idl (id du logement) absent de l'api, je laisse le state de Load à false pour laisser s'afficher l'Error
        console.log(err)
        setError(true)
        setLoad(false)
      })
  }, [])

  if (load) {
    return <div className="Loading">Chargement...</div>
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="FicheLogement">
      <Slider images={slides} />

      <div className="Flat">
        <div className="Localisation">
          <h1>{propertie.title}</h1>

          <p>{propertie.location}</p>

          <div className="TagsLocation">
            {propertie.tags.map((tag, id) => (
              <span key={id}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="HostRating">
          <div className="LocationHost">
            <span className="HostName">{propertie.host.name}</span>

            <img
              className="HostPict"
              src={propertie.host.picture}
              alt={propertie.host.name}
            />
          </div>
          <Rating rating={rating} />
        </div>
      </div>

      <div className="DescriptionLocation">
        <Collapse title="Description">
          <p>{propertie.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {propertie.equipments.map((tools, id) => (
              <li key={id}>{tools}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}
export default FicheLogement
