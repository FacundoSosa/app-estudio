import React,  { createContext, useState } from 'react'

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

    const deleteProject = (id) => {
      const filter = projects.filter((project) => project.id !== id)
      setProjects(filter)
    }

    return (
      <CardContext.Provider value={{createCard, cards, counter, deleteCard, createProject, projects, deleteProject}}>
          {props.children}
      </CardContext.Provider>
    )
}

export default CardProvider