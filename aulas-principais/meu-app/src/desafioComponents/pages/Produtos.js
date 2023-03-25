import React from 'react'
import Header from '../global/header/Header';
import Main from '../global/Main';
import Produto from '../partials/Produto'
const Produtos = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];
  return (
    <Main>
        <Header />
        <section className="produtos">
            <ul>
                {produtos.map(({nome, propriedades}) => {
                    return(
                        <Produto nome={nome} propriedades={propriedades}/>
                    )

                })}
            </ul>
        </section>
    </Main>
  )
}

export default Produtos