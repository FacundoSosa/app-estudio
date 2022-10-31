import React, {useState} from 'react'
import Inputs from '../Inputs/Inputs'
import "./Card.css"

function Modal() {
    const [modalState, setModalState] = useState(false)

    const changeModalState = () => {
        setModalState(!modalState)
    }

  return (
    <div>
        <div className='wh-200px border rounded d-flex justify-content-center align-items-center p-4 m-4'>
          <button className='btn btn-light p-2' onClick={() => changeModalState()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
        </div>
        
        {modalState == true ? <Inputs changeModalState={changeModalState}/> : null}
    </div>
  )
}

export default Modal