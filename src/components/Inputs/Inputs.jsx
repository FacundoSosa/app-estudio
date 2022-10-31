import React, { useState } from 'react'
import { useContext } from 'react'
import { CardContext } from '../Context/Context'
import CardCreate from '../CardContainer/CardCreate'
import "./Inputs.css"

function Inputs({changeModalState}) {
    const {counter} = useContext(CardContext)
    const [card, setCard] = useState({id: "", question: "", answer: ""})
    
    const handleInputChange = (event) => {
        setCard({...card, [event.target.name] : event.target.value, id : counter})
    }

    return (
        <div className='modal__overlay d-flex justify-content-center p-5'>
            <div className="modal__container d-flex flex-column justify-content-center m-4 p-5 rounded-3">
                <h6 className='text-center fs-5 fw-bold'>Crea tus tarjetas para estudiar</h6>
                <span className='my-3 d-flex'>
                    <input name='question' onChange={handleInputChange} type="text" className="form-control" placeholder='Ingresa tu pregunta'/>
                </span> 
                <span className='my-3 d-flex'>
                    <textarea  name='answer' onChange={handleInputChange} type="text" className="form-control" rows="10" placeholder='Ingresa tu respuesta'/>  
                </span> 

                <span className='d-flex justify-content-end mt-4'>
                    <button onClick={() => changeModalState()} className='btn btn-secondary mx-2'>Cancelar</button>
                    <CardCreate card={card} changeModalState={changeModalState}/>
                </span>
                
            </div> 
        </div>
         
    )
}

export default Inputs