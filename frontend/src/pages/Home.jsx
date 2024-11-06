import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logementService } from'@/_services/logement.service.jsx'
import '@/App.css'

const Home = () => {
    
    let navigate = useNavigate()
    const [properties, setProperties] = useState([])
    const flag = useRef(false)
    
    useEffect(() => {

        if(flag.current === false){
            logementService.getAllLocations()
            .then(res => {

                console.log(res.data)
                setProperties(res.data)
            })
            .catch(err => console.log(err))
        }

        return () => flag.current = true
        
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
                        properties.map(flats => (
                        <Link to={`/fiche-logement/${flats.id}`} key={flats.id} className='Flat'>
                            <img src={flats.cover} alt={flats.title}/>
                            <p>{flats.title}</p>
                           
                             
                        </Link>

                       ))
                    }
                </div>
            </div>
           
            
        </div>
    )
}
export default Home