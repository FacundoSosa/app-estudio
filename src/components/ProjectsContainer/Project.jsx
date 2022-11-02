import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CardsList from '../CardContainer/CardsList'
import { CardContext } from '../Context/Context'
import ProjectsContainer from './ProjectsContainer'

function Project() {
    const {projectId} = useParams()
    const {projects} = useContext(CardContext)
    const project = projects.find(project => project.id == projectId)

  return (
    <div>
      <ProjectsContainer/>
      <div className='d-flex flex-column align-items-center p-4'>
        <h6 className='fs-4'>{project.name}</h6>
        <CardsList/>
      </div>
    </div>
    
  )
}

export default Project