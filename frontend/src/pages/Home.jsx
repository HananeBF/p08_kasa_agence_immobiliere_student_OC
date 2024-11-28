import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logementService } from "@/_services/logement.service.jsx";
import "@pages/Home.css";
import Banner from "@/assets/HomeBanner.png";

const Home = () => {
  let navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    logementService
      .getAllLocations()
      .then((res) => {
        setProperties(res.data);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (load) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home">
      <div className="Banner">
        <img src={Banner} />

        <h1>
          Chez vous, <span className="Decoupe">partout et ailleurs</span>
        </h1>
      </div>
      <div className="galleryLocations">
        <div className="CardFlat">
          {properties.map((flats) => (
            <Link
              to={`/fiche-logement/${flats.id}`}
              key={flats.id}
              className="Flat"
            >
              <div className="imgLocation">
                <img src={flats.cover} alt={flats.title} />
                <span>{flats.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
