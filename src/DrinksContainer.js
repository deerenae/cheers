import React from 'react'
import DrinkCard from './DrinkCard'

export default function DrinksContainer(props){
    
    const renderMartinis = props.martinis.map(martini => {
        return <DrinkCard key={martini.idDrink} drink={martini} />
    })

    const renderMargaritas = props.margaritas.map(margarita => {
        return <DrinkCard key={margarita.idDrink} drink={margarita} />
    })

    const renderSours = props.sours.map(sour => {
        return <DrinkCard key={sour.idDrink} drink={sour} />
    })

    const renderCocktails = props.cocktails.map(cocktail => {
        return <DrinkCard key={cocktail.idDrink} drink={cocktail} />
    })
   
    return (
        
        <div className="drink-container">
            {renderMartinis}
            {renderMargaritas} 
            {renderSours} 
            {renderCocktails}
        </div>
    )
}