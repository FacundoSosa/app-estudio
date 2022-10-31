import React, { useState } from 'react'
import { useContext } from 'react'
import { CardContext } from '../Context/Context'
import "./Card.css"

function Card({card}) {
    const {deleteCard} = useContext(CardContext)
    const [reverse, setReverse] = useState(`${card.question}`)

    const turnCard = () => {
        reverse == `${card.question}` ? setReverse(`${card.answer}`) 
                                      : setReverse(`${card.question}`)
    }

    return (
        <div>
            <div className='card-item border rounded d-flex flex-column justify-content-between wh-200px overflow-auto p-4 m-4' onClick={() => turnCard()}>
                <p>{reverse}</p>
            <span className='d-flex justify-content-center'>
                <button className='btn btn-light' onClick={() => deleteCard(card.id)} >Eliminar tarjeta</button>
            </span> 
            </div>
        </div>
        
    )
}

export default Card