import { useParams, Link, useNavigate } from "react-router-dom";
// Import funções React
import * as React from "react";
import axios from "axios";
import uniqid from "uniqid";
// Import funções Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Product({ stock, setRerender }) {
  const params = useParams();
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/kols/${params._id}`);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
    setRerender(true);
  }

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#495371",
        bg: "rgba(211,211,211,0.3)",
      },
    },
  });

  return (
    <div>
      {stock
        .filter(product => {
          return params._id === product._id;
        })
        .map(product => {
          return (
            <Card sx={{ minWidth: 360, maxWidth: 420 }} key={uniqid()}>
              <CardMedia
                component="img"
                height="345"
                image={product.image}
                alt={product.name}
              />
              <ThemeProvider theme={theme}>
                <CardContent
                  sx={{
                    bgcolor: "neutral.bg",
                    minWidth: 360,
                    maxWidth: 420,
                    padding: 1,
                    fontFamily: "Roboto Helvetica Arial sans-serif",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {product.name}
                    <hr style={{ borderColor: "red" }}></hr>
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    <strong>Categoria:</strong> {product.category}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    <strong>Descrição:</strong> {product.description}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    <strong>Fabricante:</strong> {product.supplier}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    <strong>Part number:</strong> {product.part_number}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    <strong>Ponto de Compra:</strong> {product.resupply_point}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    <strong>Quantidade:</strong> {product.quantity}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    <strong>Preço de compra:</strong> R${" "}
                    {product.purchase_price},00
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    <strong>Valor de venda:</strong> R$ {product.sale_value},00
                  </Typography>
                </CardContent>
              </ThemeProvider>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  bgcolor: "rgba(211,211,211,0.3)",
                  alignItems: "flex-start",
                  paddingBottom: 8,
                }}
              >
                <Link
                  to={`/products`}
                  style={{
                    textDecoration: "none",
                    backgroundColor: "white",
                    borderRadius: 5,
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="outlined"
                      startIcon={<ArrowBackIcon />}
                      color="neutral"
                      size="small"
                      sx={{ bgcolor: "white" }}
                    >
                      Back
                    </Button>
                  </ThemeProvider>
                </Link>
                <Button
                  variant="outlined"
                  startIcon={<DeleteForeverIcon />}
                  color="error"
                  size="small"
                  onClick={handleDelete}
                  sx={{ bgcolor: "white" }}
                >
                  Delete
                </Button>
                <Link
                  to={`/editProduct/${params._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    color="success"
                    size="small"
                    sx={{ bgcolor: "white" }}
                  >
                    Edit
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
}
export default Product;
