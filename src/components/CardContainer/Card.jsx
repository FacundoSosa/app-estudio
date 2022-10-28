import React, { useState } from 'react'
import "./Card.css"

function Card({card}) {
    const [reverse, setReverse] = useState(`${card.question}`)

    const turnCard = () => {
        reverse == `${card.question}` ? setReverse(`${card.answer}`) 
                                      : setReverse(`${card.question}`)
    }

    return (
        <div className='border d-flex justify-content-center align-content-center wh-200px overflow-scroll m-5' onClick={() => turnCard()}>
            <p className='m-4'>{reverse}</p>
        </div>
    )
}

export default Card