import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../Context/Context.jsx'
import Card from "./Card.jsx"
import "./Card.css"

function CardsList() {
    const {cards} = useContext(CardContext);
    return (
        <div className='d-flex flex-wrap'>
            {cards.map(card => {
                return (
                    cards.length > 0 ? <Card key={card.id} card={card}/> : null
                )
            })}
        </div>
    )
}

export default CardsList