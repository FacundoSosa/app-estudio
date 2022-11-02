import React, {useState, useContext} from 'react'
import Modal from '../Modal/Modal'
import { CardContext } from '../Context/Context'
import "../Modal/Modal.css"

function CreateProject({changeModalState}) {
    const {createProject, counter} = useContext(CardContext)
    const [project, setProject] = useState({id: "", name: ""})

    const handleInputChange = (event) => {
        setProject({...project, [event.target.name] : event.target.value, id : counter})
    }

    const onAddProject = () => {
        createProject(project)
        changeModalState()
    }

    return (
        <Modal>
            <div className='modal__container p-5 rounded d-flex flex-column justify-content-between h-50'>
                <div>
                    <h6 className='fs-5'>Empieza a crear tu nuevo proyecto</h6>
                    <span>
                        <input className="form-control mt-4" type="text" name="name" placeholder='Nombre del proyecto' onChange={handleInputChange}/>
                    </span>
                </div>
                
                <span className='d-flex justify-content-end align-items-center'>
                    <button className='btn btn-secondary mx-1' onClick={() => changeModalState()}>Cancelar</button>
                    <button className='btn btn-dark mx-1' onClick={() => onAddProject()}>Añadir</button>
                </span>
            </div>
        </Modal>
    )
}

export default CreateProject