import React from 'react'
import DrinkCard from './DrinkCard'

export default function RandomDrink (props) {

    const renderRandom = props.random.map(random => {
        return <DrinkCard key={random.idDrink} drink={random} />
    })

    return (
        <div className="random-drink">
        {renderRandom} 
        </div>
    )
}