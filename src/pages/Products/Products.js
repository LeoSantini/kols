import { Link } from "react-router-dom";
import { useEffect } from 'react'

function Products({ stock, setRerender }) {

  useEffect(() => {
    setRerender(true)
  })

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
}

export default Products;
