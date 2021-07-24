import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const trProdutos = produtos.map((produto, i) => {
        return(
            <tr key={produto.id} className={i % 2 == 0 ? 'par' : 'impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>  
                <td>R$  {produto.preco}</td>      
            </tr>
        ) 
    })
    return (
        <div>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Preço</td>
                </tr>
                {trProdutos}
            </table>
        </div>
    )
}