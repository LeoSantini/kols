import { Link } from "react-router-dom";

<<<<<<< HEAD
function Products({ stock }) {
  return (
    <div className="cards">
      {stock.map(product => {
        return (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>ver mais</Link>
            <p>Nome: {product.name}</p>
            <p>Valor de venda: {product.sale_value}</p>
            <p>Fornecedor: {product.supplier}</p>
            <img src={product.image} alt={product.name}></img>
          </div>
        );
      })}
    </div>
  );
=======
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
>>>>>>> f22947311c0276c6d357ad202ba65a6970ffc82f
}

export default Products;
