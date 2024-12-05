import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

 const Error = () => {
    return (
        <div className="Error">
            <p className='Error404'>404</p>
            <p className='Oups'>Oups! La page que<span className="Break"> </span> vous demandez n'existe pas</p>
            <p className='Retour'><Link to="/Home">Retourner à la page d'accueil</Link></p>
        </div>
    )
}

export default Error