import React from 'react'
import ProdutoApi from './ProdutoApi';

const ProdutosApi = () => {

    const [produto, setProduto] = React.useState(null);

    React.useEffect(() => {
        if(produto !== null) window.localStorage.setItem('produto', produto);
    }, [produto])

    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem('produto');
        console.log(produtoLocal);
        if(produtoLocal !== null) setProduto(produtoLocal);
    },[])
    async function handleClick({target}) {
        setProduto(target.innerText);
    }

  return (
    <section style={{marginTop: '30px'}} className="produtosApi">
        <h2>Preferencias: {produto}</h2>
        <button style={{marginRight: '30px'}} onClick={handleClick}>Notebook</button>
        <button style={{marginRight: '30px'}} onClick={handleClick}>Smartphone</button>
        <button onClick={handleClick}>Tablet</button>
        <ProdutoApi produto={produto}/> 
    </section>
  )
}

export default ProdutosApi