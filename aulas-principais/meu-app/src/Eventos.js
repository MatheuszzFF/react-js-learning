import React from 'react';

const Evento = () => {

    function handleClick(event) {
        console.log(event);
    }
    return (
        <section>
            <h2>Eventos</h2>
            <button onClick={handleClick}>Clique em mim!!</button>
            <p>Clique no botão e veja o console.</p>
        </section>
    )
}

export default Evento;