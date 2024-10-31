import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { logementService } from'@/_services/logement.service.jsx'

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

    const logement = (id) => {
        
        console.log('click')
        navigate("@/pages/fiche-logement/"+id, {replace:true})
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div className='Home'>
            Home une grande image avec un texte dedans,  et plein de composants logements avec des liens qui amène à des pages de fiches logement, et enfin le footer. Penser au onClick pour les logements pour que ce soit dynamique
            <div className='AllProperties'>
                
                    <div className="annonces">
                       

                        <table>
                        <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Created</th>
                    </tr>
                        </thead>
                            <tbody>
                            {
                                properties.map(logement => (
                                <tr key={logement.id}>

                                    {/* <td>{logement.cover}</td> */}
                                    <td>{logement.id}</td>
                                    <td>{logement.title}</td>
                                </tr>                          
                                ))
                            }
                            </tbody>
                        </table>
                        {/* </div> */}
                    </div>
                
            </div>
            
        </div>
    )
}
export default Home