import React from 'react'
import uniqid from 'uniqid'

function Profit({ stock, isLoading }) {
    return (
        <div>
            <h1>Margem de Lucro</h1>
            {!isLoading &&
                stock.map((product) => {
                    return (
                        <div key={uniqid()}>
                            <p>{product.name}</p>
                            <p>R${(product.sale_value) - (product.purchase_price)}</p>
                            <p>{((((product.sale_value) - (product.purchase_price)) * 100) / (product.sale_value)).toFixed(1)}% </p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Profit;