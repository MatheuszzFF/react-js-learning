import React from 'react'

const DesafioMario = () => {

    const mario = {
		name: "Mario",
		age: 31,
		situation: false,
		compras: [
			{ nome: 'Notebook', preco: "R$1500" },
			{ nome: 'Geladeira', preco: "R$11000"},
			{ nome: 'Tenis', preco: "R$1500"},
		]
	}

	const luana = {
		name: "Luana",
		age: 27,
		situation: true,
		compras: [
			{ nome: 'Notebook', preco: "R$500" },
			{ nome: 'Geladeira', preco: "R$1000"},
			{ nome: 'Tenis', preco: "R$500"},
		]
	}

	let dados = luana;
	let totalSpend =  dados.compras.map(item => {
		return Number(item.preco.replace("R$", ''))
	})
	totalSpend = totalSpend.reduce((a, b) => a + b);

	let styleSituation = dados.situation ? {color: "green"} : {color: 'red'};
	let textSituation = dados.situation ? 'Ativo' : 'Inativo';
  return (
    <React.Fragment>
        <p>Nome: {dados.name}</p>
        <p>Idade: {dados.age}</p>
        <p >Situação: <span style={styleSituation}>{textSituation}</span></p>
        <p>Total gasto: R${totalSpend}</p>
        {!dados.situation ? <p>Você está gastando muito!</p>: ''}
    </React.Fragment>
  )
}

export default DesafioMario