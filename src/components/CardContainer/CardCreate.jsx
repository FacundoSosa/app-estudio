import React from 'react'
import { useContext } from 'react';
import { CardContext } from '../Context/Context';

const CardCreate = ({card, changeModalState}) => {
    const {createCard} = useContext(CardContext)

    const onCreate = () => {
        createCard(card)
        changeModalState()
    }

    return (
        <button onClick={() => onCreate()} className='btn btn-dark'>Crear Tarjeta</button>
    )
}

export default CardCreate