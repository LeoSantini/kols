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
                        <p>Fornecedor: {product.supplier}</p>
                        <p>Valor de compra: {product.purchase_price}</p>
                        <p>Valor de venda: {product.sale_value}</p>
                        <p>Categoria: {product.category}</p>
                        <p>Ponto de Pedido: {product.resupply_point}</p>
                        <p>Quantidade: {product.quantity}</p>
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