import React,  { createContext, useState } from 'react'

export const CardContext = createContext()

const CardProvider = (props) => {
    const [cards, setCards] = useState([])
    const [counter, setCounter] = useState(1)
  
    const createCard = (card) => {
      setCounter(counter + 1)
      setCards([...cards, {...card, id: counter}])
       
    }

    /* console.log(counter); */

    return (
      <CardContext.Provider value={{createCard, cards, counter}}>
          {props.children}
      </CardContext.Provider>
    )
}

export default CardProvider