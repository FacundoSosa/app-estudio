import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'


function ProjectsContainer() {
  const [modalState, setModalState] = useState(false)

    const changeModalState = () => {
        setModalState(!modalState)
    }

  return (
    <div className="d-flex flex-column align-items-start">
        <div className='p-2 border d-flex align-items-start justify-content-between flex-wrap w-100'>
          <Link className='btn btn-secondary mb-3' to="/">Home</Link>
          <button className='btn btn-dark' onClick={() => changeModalState()}>Nuevo proyecto</button>
          {modalState === true ? <CreateProject modalState={modalState} changeModalState={changeModalState} /> : null}
        </div>

        <ProjectList/>
    </div>
    
  )
}

export default ProjectsContainer