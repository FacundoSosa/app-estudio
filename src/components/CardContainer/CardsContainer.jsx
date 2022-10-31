import React from 'react'
import Modal from './Modal'
import CardsList from "./CardsList.jsx"
import "./Card.css"

function CardsContainer() {
  return (
    <div className='card-container'>
        <Modal />
        <CardsList/>
    </div>
  )
}

export default CardsContainer