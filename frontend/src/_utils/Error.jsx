import React from 'react';
import { Link } from 'react-router-dom';

 const Error = () => {
    return (
        <div className="Error">
            Erreur 404
            <p className='Oups'>Oups! La page que vous recherchez n'existe pas</p>
            <p><Link to="/Home">Retourner à la page d'accueil</Link></p>
        </div>
    );
};

export default Error;