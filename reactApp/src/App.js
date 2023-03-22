import ReactDOM from 'react-dom'
import React from 'react';
import './App.css'

const Button = () => {
    const [counter, setCounter] = React.useState(0);
    function comprar() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={comprar}>Comprar</button>
            <p>Quantidade: {counter}</p>
            <p>Preço:  R$ {counter * 250}</p>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <a href="#">Clique aqui!!!</a>
            <Button />
        </div>
    )
}

export default App;