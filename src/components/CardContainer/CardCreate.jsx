import React from 'react'
import { useContext } from 'react';
import { CardContext } from '../Context/Context';

const CardCreate = ({card}) => {
    const {createCard} = useContext(CardContext)

    const onCreate = () => {
        createCard(card)
    }

    return (
        <span className='d-flex justify-content-center align-items-center'>
            <button onClick={() => onCreate()} className='btn btn-dark w-50'>Crear Tarjeta</button>
        </span>
    )
}

export default CardCreate