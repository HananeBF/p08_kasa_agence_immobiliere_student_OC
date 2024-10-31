import React from 'react';
import { useParams } from 'react-router-dom';

const FicheLogement = () => {
    
    let {uid} = useParams()
    console.log(uid)

    return (
        <div className='FicheLogement'>
            fiche Logement avec (le Layout) une grande case, le titre du logement, en dessous sa ville, le nom du commercial, trois tag en dessous, une description cachée par défaut avec chevron, Equipements aussi, et enfin, un footer. 
        </div>
    )
}
export default FicheLogement;