import React from 'react'
import '@/components/Footer.css'
import logo from '@/assets/FLOGO.png'

const Footer = () => {
    return (
        <footer className='Footer'>
            
            <img src={logo} className='FooterLogo' />
            <p className='FooterText'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer