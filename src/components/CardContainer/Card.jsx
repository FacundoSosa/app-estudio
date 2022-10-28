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
            <div className='border rounded d-flex flex-column justify-content-between wh-200px overflow-auto p-4 m-4' onClick={() => turnCard()}>
                <p className='mx-4'>{reverse}</p>
            </div>

            <span className='d-flex justify-content-center'>
                <button onClick={() => deleteCard(card.id)} className='btn btn-light'>Eliminar tarjeta</button>
            </span>
            
        </div>
        
    )
}

export default Card