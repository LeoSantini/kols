import React from 'react'
import uniqid from 'uniqid'

function Resuply({ stock, isLoading }) {
    return (
        <div>
            <p>Itens que estão no ponto de pedido:</p>
            {!isLoading &&
                stock
                .filter((product) => {
                    return product.quantity <= product.resupply_point
                })
                .map((product) => {
                    return (
                        <div key={uniqid()}>
                            <p>Produto: {product.name}</p>
                            <span>Qnt: {product.quantity} </span>
                            <span>Ponto de Pedido: {product.resupply_point} </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Resuply