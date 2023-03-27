import React from 'react'
import Main from '../global/Main';
import Button from '../partials/Button';
import Modal from '../partials/Modal';
import Produto from '../partials/Produto'
import ProdutosApi from '../partials/ProdutosApi';


const Produtos = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];
    const [modal, setModal] = React.useState(false);
  return (
    <Main>
        <section className="produtos">
            <ul>
                {produtos.map(({nome, propriedades}) => {
                    return(
                        <Produto nome={nome} propriedades={propriedades}/>
                    )
                })}
            </ul>
        </section>

        <section className="modal" >
            <Modal modal={modal} setModal={setModal}/>
            <Button setModal={setModal} modal={modal}>{modal ?  "Fechar modal!" : 'Abrir modal!'}</Button>
        </section>
        <ProdutosApi/>
    </Main>
  )
}

export default Produtos