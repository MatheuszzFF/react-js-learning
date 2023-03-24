import React from 'react'
import Header from '../global/header/Header';
import Main from '../global/Main';

const Produtos = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];
  return (
    <Main>
        <Header />
        <section className="produtos">
            {produtos.map(({nome, propriedades:[ram, hd]}, i) => {
                return(
                    <React.Fragment>
                        <h3>{nome}</h3>
                        <ul>
                            <li key={'key'+ i}>{ram}</li>
                            <li key={'key2'+ i}>{hd}</li>
                        </ul>
                    </React.Fragment>
                )

            })}
        </section>
    </Main>
  )
}

export default Produtos