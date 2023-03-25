import React from 'react';
import Main from '../global/Main';
import Header from '../global/header/Header';
import Titulo from '../partials/Titulo';
import DesafioMario from '../../DesafioMario';
import Arrays from '../../Arrays';
import Eventos from '../../Eventos';
import Form from '../../form/Form';
import Children from '../../Children';
import ButtonUseState from '../partials/ButtonUseState';
const Home = () => {
  return (
    <React.Fragment>
        <Header/>
        <Main>
            <Titulo>Essa é a HomePage</Titulo>
            <ButtonUseState/>
            <DesafioMario/>
            <Arrays />
            <Eventos />
            <section className="form">
                <Form />
            </section>
            <Children texto="Teste">
                Teste de children
            </Children>
        </Main>
    </React.Fragment>
  )
}

export default Home