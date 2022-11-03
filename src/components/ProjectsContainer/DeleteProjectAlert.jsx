import React, {useContext} from 'react'
import Modal from '../Modal/Modal'
import { CardContext } from '../Context/Context'
import "../Modal/Modal.css"


function DeleteProjectAlert({project, changeModalState}) {
    const {deleteProject} = useContext(CardContext)

    const onDelete = () => {
        deleteProject(project.id)
        changeModalState()
    }

  return (
    <Modal>
        <div className="modal__container d-flex flex-column justify-content-between h-50 my-5 p-4 rounded-3">
            <h6 className='mt-5 fs-5'>¿Eliminar proyecto?</h6>
            <p className='mb-5'>¿Confirmas que quieres eliminar el proyecto <span className='fw-bold'>{project.name}</span>?</p>
            <span className='d-flex justify-content-end w-100'>
                <button className='btn btn-secondary mx-3' onClick={() => changeModalState()}>Cancelar</button>
                <button className='btn btn-dark' onClick={() => onDelete()}>Eliminar</button>
            </span>
        </div>
    </Modal>
  )
}

export default DeleteProjectAlert