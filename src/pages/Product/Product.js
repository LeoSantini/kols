// import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// Import funções React
import * as React from "react";
import axios from "axios"
// Import funções Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Product({ stock, setRerender }) {
  const params = useParams();
  const navigate = useNavigate()

  async function handleDelete(){
    try {
      await axios.delete(`https://ironrest.herokuapp.com/kols/${params._id}`)
      navigate('/products')
    } catch (error) {
      console.log(error)
    }
    setRerender(true)
  }

  async function handleEdit() {
    try {

      navigate(`/product/${params._id}`)

    } catch (error) {
      console.log(error)
    }
    setRerender(true)
  }


  return (
    <div>
      {stock
        .filter(product => {
          return params._id === product._id;
        })
        .map(product => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="345"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="caption text" component="div">
                  Categoria: {product.category}
                </Typography>
                <Typography gutterBottom variant="body 2" component="div">
                  Descrição: {product.description}
                </Typography>
                <Typography gutterBottom variant="body 2" component="div">
                  Fabricante: {product.supplier}
                </Typography>
                <Typography gutterBottom variant="body 2" component="div">
                  Part number: {product.part_number}
                </Typography>
                <Typography gutterBottom variant="body 2" component="div">
                  Ponto de Compra: {product.resupply_point}
                </Typography>
                <Typography gutterBottom variant="body 2" component="div">
                  Quantidade: {product.quantity}
                </Typography>
                <Typography gutterBottom variant="body 2" component="div">
                  Preço de compra: R$ {product.purchase_price},00
                </Typography>
                <Typography gutterBottom variant="body 2" component="div">
                  Valor de venda: R$ {product.sale_value},00
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={handleEdit}size="small">Editar</Button>
                <Button onCLick={handleDelete} size="small">Apagar</Button>
                <Link to={`/editProduct/${params._id}`}>
                  <Button size="small">Voltar</Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
}
export default Product;
