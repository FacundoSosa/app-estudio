import React, { useState } from 'react'
import { useContext } from 'react'
import { CardContext } from '../Context/Context'
import CardCreate from '../CardContainer/CardCreate'

function Inputs() {
    const {counter} = useContext(CardContext)
    const [card, setCard] = useState({id: "", question: "", answer: ""})
    
    const handleInputChange = (event) => {
        setCard({...card, [event.target.name] : event.target.value, id : counter})
    }

    return (
        <div className="input-group d-flex flex-column justify-content-center align-content-center m-0">
            <span className='my-3 d-flex w-50'>
                <input name='question' onChange={handleInputChange} type="text" className="form-control" placeholder='Ingresa tu pregunta'/>
            </span> 
            <span className='my-3 d-flex w-50'>
                <textarea  name='answer' onChange={handleInputChange} type="text" className="form-control" rows="10" placeholder='Ingresa tu respuesta'/>  
            </span> 

            <CardCreate card={card}/>
        </div>  
    )
}

export default Inputs