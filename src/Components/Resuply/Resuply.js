import React from 'react'


function Resuply({stock}) {

    console.log(stock)


    return (
        <div>
            <p>Itens que estão no ponto de pedido:</p>
            {/* {stock
            .filter((product) => {
                return product.resupply_point <= product.quantity
            })
            .map((product) => {
                return (
                    <p>{product.name}</p>
                )
            })
            } */}
        </div>
    )
}

export default Resuply