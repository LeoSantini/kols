import React from 'react'

function TotalStock({ stock, isLoading }) {
    return (
        <>
            {!isLoading &&
                <div>
                    <p>Valor total em estoque (valor de compra): </p>
                    R${stock.reduce((acumulador, currentElement) =>
                        Number(acumulador) + Number(currentElement.purchase_price) * Number(currentElement.quantity), 0)},00
                    <p>Valor total em estoque (valor de venda): </p>
                    R${stock.reduce((acumulador, currentElement) =>
                        Number(acumulador) + Number(currentElement.sale_value) * Number(currentElement.quantity), 0)},00
                    <p>Quantidade de Produtos em estoque:</p>
                    {stock.reduce((acumulador, currentElement) =>
                        Number(acumulador) + Number(currentElement.quantity), 0)} und.
                </div>
            }
        </>
    );
}

export default TotalStock;