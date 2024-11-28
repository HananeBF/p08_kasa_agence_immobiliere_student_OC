import React from 'react';
import '@components/Rating.css'

const Rating = ( { stars } ) => {
        const totalStars = 5
        const filledStar = '⭐'
        const emptyStar = '☆' 
      
        const renderStars = (rating) => {
          const fullStars = Math.floor(rating)
          const emptyStars = totalStars - fullStars
      
          return (
            <>
              {'★'.repeat(fullStars)}
              {'☆'.repeat(emptyStars)}
            </>
          )
        }
      
        return (
          <div className="Rating">
            {renderStars(stars)}
          </div>
        );
      };

export default Rating;