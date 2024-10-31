import React from 'react'
import './Footer.css'
import logo from '@/assets/FLOGO.png'

const Footer = () => {
    return (
        <footer className='Footer'>
            
            <img src={logo} className='logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer