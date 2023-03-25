import React from 'react'

const Button = ({setModal, modal,  children}) => {
  return (
    <button onClick={() => setModal(!modal)}>{children}</button>
  )
}

export default Button