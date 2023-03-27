import React from 'react'

const ProdutoApi = ({produto}) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        if(produto !== null) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto.toLowerCase()}`)
            .then(response => response.json())
            .then(json => setDados(json));
        }
    },[produto])

    if(!dados) return null;
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>Preço: R$ {dados.preco}</p>
            <img src={dados.fotos[0].src}/>

        </div>
    )
}

export default ProdutoApi