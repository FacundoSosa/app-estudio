import React, { useState } from 'react'
import { useContext } from 'react'
import { CardContext } from '../Context/Context'
import Modal from '../Modal/Modal'
import "../Modal/Modal.css"

function Inputs({changeModalState}) {
    const {counter, createCard} = useContext(CardContext)
    const [card, setCard] = useState({id: "", question: "", answer: ""})
    
    const handleInputChange = (event) => {
        setCard({...card, [event.target.name] : event.target.value, id : counter})
    }

    const onCreate = () => {
        createCard(card)
        changeModalState()
    }

    return (    
        <Modal>
            <div className="modal__container d-flex flex-column justify-content-center my-4  p-5 rounded-3">
                <h6 className='text-center fs-5 fw-bold'>Crea tus tarjetas para estudiar</h6>
                <span className='my-3 d-flex'>
                    <input name='question' onChange={handleInputChange} type="text" className="form-control" placeholder='Ingresa tu pregunta'/>
                </span> 
                <span className='my-3 d-flex'>
                    <textarea  name='answer' onChange={handleInputChange} type="text" className="form-control" rows="10" placeholder='Ingresa tu respuesta'/>  
                </span> 

                <span className='d-flex justify-content-end mt-4 align-items-center'>
                    <button onClick={() => changeModalState()} className='btn btn-secondary mx-2'>Cancelar</button>
                    <button onClick={() => onCreate()} className='btn btn-dark'>Añadir</button>
                </span>
            </div>
        </Modal>
    )
}

export default Inputs