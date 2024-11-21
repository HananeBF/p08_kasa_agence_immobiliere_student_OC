import React from "react";
import "@components/Collapse.css";

const Collapse = () => {
  

  
  

  return (
    <div className="CollapseComponent">
      <div className="CollapseElement" id="CollapseElement">
        <button type="button" className="Button" id="Button">
          Fiabilité
        </button>
        
          <p className="Content" id="Content"> 
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        
      </div>
    </div>
  );
};

export default Collapse;
