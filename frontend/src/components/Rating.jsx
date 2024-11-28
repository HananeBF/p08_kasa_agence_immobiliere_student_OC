import React, { useState } from 'react';
import '@components/Rating.css'

const Rating = ( { stars } ) => {
     const [star, setStar] = useState([])
     const totalRating = useState(5)
     
    const filledStars = () => {
        setStar()
    }

    
    

    return (
        <div className='Rating'>
            
        </div>
    );
};

export default Rating;