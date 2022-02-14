// Import funções React
import * as React from "react";
// Import funções Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Card(product) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="caption text" component="div">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fabricante/Fornecedor: {product.supplier}
          Part number: {product.part_number}
          Ponto de Compra: {product.resupply_point}
          Quantidade: {product.quantity}
          Preço de compra: {product.purchase_price}
          Valor de venda: {product.sale_value}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adicionar</Button>
        <Button size="small">Editar</Button>
        <Button size="small">Apagar</Button>
      </CardActions>
    </Card>
  );
}
