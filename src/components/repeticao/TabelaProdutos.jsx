/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import produtos from './../../data/produtos'
import '../repeticao/TabelaProdutos.css'

export default props => {

    const productsList = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            Tabela de Produtos
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList}
                </tbody>
            </table>

        </div>

    )
}