import React from 'react'
import Button from './Button'
const Modal = ({modal, setModal}) => {
    return (
      <React.Fragment>
        <h2>{modal ? "Modal abriu!" : "Modal fechado!"}</h2>
      </React.Fragment>
    )
}

export default Modal