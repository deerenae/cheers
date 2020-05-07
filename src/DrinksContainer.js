import React from 'react'
import DrinkCard from './DrinkCard'

export default function DrinksContainer(props){
    
    const renderMartinis = props.martinis.map(martini => {
        return <DrinkCard drink={martini} />
    })

    const renderMargaritas = props.margaritas.map(margarita => {
        return <DrinkCard drink={margarita} />
    })

    const renderSours = props.sours.map(sour => {
        return <DrinkCard drink={sour} />
    })
   
    return (
        
        <div className="drink-container">
            {renderMartinis}
            {renderMargaritas} 
            {renderSours} 
        </div>
    )
}