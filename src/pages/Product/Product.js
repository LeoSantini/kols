// import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// Import funções React
import * as React from "react";
// Import funções Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Product({ stock }) {
  const params = useParams();

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
                <Button size="small">Editar</Button>
                <Button size="small">Apagar</Button>
                <Link to="/products">
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
