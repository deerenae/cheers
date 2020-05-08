import React from 'react'
import DrinkCard from './DrinkCard'

export default function RandomDrink (props) {

    return (
        <DrinkCard drink={props.random} />
    )
}