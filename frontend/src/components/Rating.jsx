import React from 'react';
import "@components/Rating.css"
import FillStar from "@/assets/FillStar.svg"
import GreyStar from "@/assets/GreyStar.svg"


const Rating = ({ rating }) => {
  const totalStars = 5  // Le nombre d'étoiles total
  const stars = []

  // Utilisation d'une boucle for pour remplir le Array des étoiles fourni dans l'api
  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      stars.push('filled') 
    } else {
      stars.push('empty')
    }
  }

  return (
    <div className="Rating">
      {/* Comme il s'agit d'un Array, je map les résultats  comme pour un forEach*/}
      {stars.map((star, index) => (
                <span key={index}>
                  {star === 'filled' ? <img src={FillStar} className='AllStars'/> : <img src={GreyStar} className='AllStars'/>}
                </span>
              ))}
    </div>
  )
}

export default Rating