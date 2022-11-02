import React,  { createContext, useState } from 'react'
import Project from '../ProjectsContainer/Project'

export const CardContext = createContext()

const CardProvider = (props) => {
    const [cards, setCards] = useState([])
    const [projects, setProjects] = useState([])
    const [counter, setCounter] = useState(1)
  
    const createCard = (card) => {
      setCounter(counter + 1)
      setCards([...cards, {...card, id: counter}])
    }

    const deleteCard = (id) => {
        const filter = cards.filter((card) => card.id !== id)
        setCards(filter)
    }

    const createProject = (project) => {
      setCounter(counter + 1)
      setProjects([...projects, {...project, id: counter}])
    }

    return (
      <CardContext.Provider value={{createCard, cards, counter, deleteCard, createProject, projects}}>
          {props.children}
      </CardContext.Provider>
    )
}

export default CardProvider