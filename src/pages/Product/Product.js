import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

function Product({stock}) {
    
    const params = useParams()

    return (
        <div>
            {stock
            .filter((product) => {
                return params._id === product._id
            })
            .map((product) => {
                return (
                    <div key={product.id}>
                        <p>Nome: {product.name}</p>
                        <p>ID: {product._id}</p>
                        <p>Valor de compra: {product.purchase_price}</p>
                        <p>Valor de venda: {product.sale_value}</p>
                        <p>Fornecedor: {product.supplier}</p>
                        <p>Categoria: {product.category}</p>
                        <img src={product.image} alt={product.name}></img>
                    </div>
                )
            }
            )}

            <Link to="/products">Voltar</Link>




            
        </div>
    )

}
export default Product