import React, {useState} from 'react'
import DeleteProjectAlert from './DeleteProjectAlert.jsx'

function DeleteProject({project}) {
    const [modalState, setModalState] = useState(false)

    const changeModalState = () => {
        setModalState(!modalState)
    }

  return (
    <div>
        <button className='btn btn-light'><i className='bi bi-trash' onClick={() => changeModalState()}></i></button>
        {modalState == true ? <DeleteProjectAlert changeModalState={changeModalState} modalState={modalState} project={project} /> : null}
    </div>
  )
}

export default DeleteProject