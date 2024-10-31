import React from 'react';
import { useNavigate } from 'react-router-dom'

 const Home = () => {
    let navigate = useNavigate()

    const logement = (userId) => {
        
        console.log('click')
        navigate("../fiche-logement/"+userId, {replace:true})
    }

    return (
        <div className='Home'>
            Home avec (le Layout) une grande image avec un texte dedans,  et plein de composants logements avec des liens qui amène à des pages de fiches logement, et enfin le footer. Penser au onClick pour les logements pour que ce soit dynamique
            <button onClick={() => logement(4)}>Logement4</button>
        </div>
    )
}
export default Home;