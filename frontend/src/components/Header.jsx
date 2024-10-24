import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className='Header'>
            <img src='@/assets/LOGO.png'/>
            Header ajouter le logo et la navigation
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/fiche-logement">Fiche Logement</Link></li>
                    <li><Link to="/a-propos">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;