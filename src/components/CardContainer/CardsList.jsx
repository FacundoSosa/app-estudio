import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../Context/Context.jsx'
import Card from "./Card.jsx"
import "./Card.css"
import Modal from './Modal.jsx'

function CardsList() {
    const {cards} = useContext(CardContext);

    return (
        <div className='cards-container d-flex justify-content-center align-content-center w-100'>
            <div className='d-flex justify-content-center flex-wrap my-3'>
                {cards.map(card => {
                    return (
                        cards.length > 0 ? <Card key={card.id} card={card}/> : null
                    )
                })}

                <Modal/>
            </div>
        </div>   
    )
}

export default CardsList