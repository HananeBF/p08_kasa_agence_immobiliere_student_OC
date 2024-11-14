import React from "react";
import "@components/Collapse.css";

const Collapse = () => {
  const coll = document.querySelectorAll(".CollapseElement");

    coll.addEventListener("click", (e) => {
      e.preventDefault()
      
      document.querySelector(".Content").style.display = "flex"
      document.querySelector(".Button").classList.add("active")
     
    })
  

  return (
    <div className="Collapse">
      <div className="CollapseElement">
        <button type="button" className={"Button"}>
          Fiabilité
        </button>
        
          <p className="Content"> 
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        
      </div>
    </div>
  );
};

export default Collapse;
