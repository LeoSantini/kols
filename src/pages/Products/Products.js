import './Products.css'

import {Link} from 'react-router-dom'

function Products({ stock }) {
    
    return (
        <div className='cards'>
            {stock.map((product) => {
                return (
                    <div className="card" key={product._id}>
                        <Link to={`/product/${product._id}`}>ver mais</Link>
                        <p>{product.name}</p>
                        <p>Valor: {product.sale_value}</p>
                        <p>Quantidade: {product.quantity}</p>
                        <p>Fornecedor: {product.supplier}</p>
                    </div>)
            })}
        </div>
    )
}

export default Products