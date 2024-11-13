import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logementService } from'@/_services/logement.service.jsx'
import '@pages/Home.css'
import Banner from '@/assets/HomeBanner.png'

const Home = () => {
    
    let navigate = useNavigate()
    const [properties, setProperties] = useState([])
    const flag = useRef(false)
    
    useEffect(() => {

        if(flag.current === false){
            logementService.getAllLocations()
            .then(res => {

                
                setProperties(res.data)
            })
            .catch(err => console.log(err))
        }

        return () => flag.current = true
        
    }, [])


    return (
        <div className='Home'>
            <div>Home une grande image avec un texte dedans,  et plein de composants logements avec des liens qui amène à des pages de fiches logement,. Penser au onClick pour les logements pour que ce soit dynamique</div>
            <div className='Banner'>
                <img src={Banner}></img>
            </div>
            <div className='galleryLocations'>
                <div className="CardFlat">
                    {
                        properties.map(flats => (
                        <Link to={`/fiche-logement/${flats.id}`} key={flats.id} className='Flat'>
                            <div className='imgLocation'>
                                <img src={flats.cover} alt={flats.title}/>
                                <span>{flats.title}</span>
                            </div>
                             
                        </Link>

                       ))
                    }
                </div>
            </div>
           
            
        </div>
    )
}
export default Home