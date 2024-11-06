import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logementService } from'@/_services/logement.service.jsx'
import '@/App.css'

const Home = () => {
    
    let navigate = useNavigate()
    const [properties, setProperties] = useState([])
    
    useEffect(() => {
        logementService.getAllLocations()
            .then(res => {

                console.log(res.data)
                setProperties(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // const logementA = (id) => {
    //     console.log('click')
    //     navigate("./fiche-logement/"+id)
    // }

    return (
        <div className='Home'>
            Home une grande image avec un texte dedans,  et plein de composants logements avec des liens qui amène à des pages de fiches logement,. Penser au onClick pour les logements pour que ce soit dynamique
            <div className='galleryLocations'>
                <div className="CardFlat">
                    {
                        properties.map(flat => (
                        <Link to={`/fiche-logement/${flat.id}`} key={flat.id} className='Flat'>
                            <img src={flat.cover} alt={flat.title}/>
                            <p>{flat.title}</p>
                           
                             
                        </Link>

                       ))
                    }
                </div>
            </div>
           
            
        </div>
    )
}
export default Home