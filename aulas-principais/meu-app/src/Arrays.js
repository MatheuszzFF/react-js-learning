import React from 'react';

const Arrays = () => {
    const empresas = [<li key="e1">Apple</li>, <li key="e2">Microsoft</li>, <li key="e3">Nissan</li>];
    const normalEmpresas = ['Apple', 'Microsoft', 'Positivo'];
    const livros = [
        { nome: 'A Game of Thrones', ano: 1996 },
        { nome: 'A Clash of Kings', ano: 1998 },
        { nome: 'A Storm of Swords', ano: 2000 },
      ];
      const produtos = [
        {
          id: 1,
          nome: 'Smartphone',
          preco: 'R$ 2000',
          cores: ['#29d8d5', '#252a34', '#fc3766'],
        },
        {
          id: 2,
          nome: 'Notebook',
          preco: 'R$ 3000',
          cores: ['#ffd045', '#d4394b', '#f37c59'],
        },
        {
          id: 3,
          nome: 'Tablet',
          preco: 'R$ 1500',
          cores: ['#365069', '#47c1c8', '#f95786'],
        },
      ];
      

    return (
        <React.Fragment>
            <ul>
                {empresas}
            </ul>


            <h2>Método normalmente utilizado:</h2>           
            <ul>
                {
                    normalEmpresas.map(empresa => {
                        return <li key={empresa} id={empresa}>{empresa}</li>
                    })
                }
            </ul>

            <h2>Array de livros:</h2>

            <ul>
                {livros.map(({nome, ano}) => (
                    <li key={nome}>{nome}, escrito em {ano}</li>
                ))}
            </ul>
            <section>
                <h2> Exercicio de Arrays</h2>
                {produtos
                .filter(({preco}) => {
                    let precoNumber = Number(preco.replace("R$", ''))
                    return precoNumber >= 2000
                })
                .map(({nome, preco, cores, id}) => (
                    <div key={id}>
                        <h4>{nome}</h4>
                        <p>Preço: {preco}</p>
                        <ul>
                            {cores.map(cor => (
                                <li key={cor} style={{backgroundColor: cor, marginBottom: '10px'}}>{cor}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

        </React.Fragment>
    )

}




export default Arrays;
