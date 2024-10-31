import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '@/assets/LOGO.png'


const Header = () => {
    return (
        <header className='Header'>
           <img src={logo} />
    
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    
                    <li><Link to="/a-propos">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header