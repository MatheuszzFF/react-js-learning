import React from 'react'

const ButtonUseState = () => {
    const [active, setActive] = React.useState(true)
  return (
    <button className={active ? "active" : false} onClick={() => {setActive(!active)}}>{active ? "Botão ativo" : "Botão inativo"}</button>
  )
}

export default ButtonUseState