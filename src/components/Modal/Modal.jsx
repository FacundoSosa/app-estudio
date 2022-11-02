import React from 'react'
import "../CardContainer/Card.css"


function Modal({children}) {    
  return (
    <div>
        <div className='modal__overlay d-flex justify-content-center py-5 px-2'>
            {children}
        </div>
    </div>
  )
}

export default Modal