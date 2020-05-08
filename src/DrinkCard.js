import React from 'react'

export default function DrinkCard(props) {
    // console.log(props.drink, 'all')

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.drink.strDrinkThumb} /> 
                    <h3 className="drink-name">{props.drink.strDrink}</h3> 
                </div>   
                <div className="flip-card-back" >
                    <h4>Ingredients:</h4>
                        <p>{props.drink.strIngredient1}, {props.drink.strIngredient2}, {props.drink.strIngredient3}, {props.drink.strIngredient4}</p>
                    <h4>Recipe:</h4>
                    <p>{props.drink.strInstructions}</p>
                   
                </div>
            </div>
        </div>
    )
}