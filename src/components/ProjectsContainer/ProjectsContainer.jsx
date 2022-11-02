import React, {useState} from 'react'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'


function ProjectsContainer() {
  const [modalState, setModalState] = useState(false)

    const changeModalState = () => {
        setModalState(!modalState)
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center pt-5'>
        <button className='btn btn-dark' onClick={() => changeModalState()}>Nuevo proyecto</button>
        {modalState == true ? <CreateProject modalState={modalState} changeModalState={changeModalState} /> : null}

        <ProjectList/>
    </div>
  )
}

export default ProjectsContainer