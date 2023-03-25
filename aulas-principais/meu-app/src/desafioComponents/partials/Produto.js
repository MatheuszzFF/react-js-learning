import React from 'react';
import Titulo from './Titulo';


const Produto = ({nome, propriedades}) => {
  return (
    <div className="produtos__item">
        <Titulo>{nome}</Titulo>
        <ul>
          {propriedades.map((propriedade, i) => {
            <li key={propriedade + i}>
              {propriedade}
            </li>
          })}
        </ul>
    </div>
  )
}

export default Produto;