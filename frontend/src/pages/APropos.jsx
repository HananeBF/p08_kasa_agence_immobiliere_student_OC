import React from "react";
import Picture from "@/assets/PictureAPropos.png";
import "@pages/APropos.css";

const APropos = () => {
//   const coll = document.querySelector("ArgButton");
//   let i;

//   for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       var content = this.nextElementSibling;
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   }
  return (
    <div className="APropos">
      <div className="Picture">
        <img src={Picture} />
      </div>
      <div className="Arguments">
        <button type="button" className="ArgButton">Fiabilité</button>
        <div className="Content">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>

        <button type="button" className="ArgButton">Respect</button>
        <div className="Content">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>

        <button type="button" className="ArgButton">Service</button>
        <div className="Content">
          <p>
            La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </div>

        <button type="button" className="ArgButton">Sécurité</button>

        <div className="Content">
          <p>
            La sécurité est la priorité de Lasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspon aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet de vérifier que les standards
            sont bien respectés. Nous organisons également des ateliers sur la
            sécurité domestique poour nos hôtes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default APropos;
