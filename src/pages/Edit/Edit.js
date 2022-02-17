import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Import form Material UI
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Edit({ setRerender }) {
  const params = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    quantity: 0,
    purchase_price: 0,
    sale_value: 0,
    part_number: "",
    supplier: "",
    resupply_point: 0,
    category: "",
    image: "",
  });

  function HandleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function HandleSubmit() {
    for (let key in form) {
      if (!form[key]) {
        window.alert(`Preencher o campo ${key}`);
        return;
      }
    }

    delete form._id;

    axios.put(`https://ironrest.herokuapp.com/kols/${params._id}`, form);
    console.log(form);
    navigate(`/products`);
    setRerender(true);
  }

  function HandleClear() {
    setForm({
      name: "",
      description: "",
      quantity: 0,
      purchase_price: 0,
      sale_value: 0,
      part_number: "",
      supplier: "",
      resupply_point: 0,
      category: "",
      image: "",
    });
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/kols/${params._id}`
        );
        setForm({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [params._id]);

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#495371",
        bg: "rgba(211,211,211,0.5)",
      },
    },
  });

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            minWidth: 360,
            maxWidth: 420,
            marginTop: 1.5,
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Nome do item"
          variant="outlined"
          onChange={HandleChange}
          name="name"
          value={form.name}
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Descrição"
          variant="outlined"
          onChange={HandleChange}
          name="description"
          value={form.description}
          multiline
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Quantidade"
          variant="outlined"
          onChange={HandleChange}
          name="quantity"
          value={form.quantity}
          type="number"
          fullWidth
          required
          InputProps={{ inputProps: { min: 0 } }}
        />
        <TextField
          id="outlined-basic"
          label="Preço de compra"
          onChange={HandleChange}
          name="purchase_price"
          value={form.purchase_price}
          type="number"
          fullWidth
          required
          InputProps={{ inputProps: { min: 0 } }}
        />
        <TextField
          id="outlined-basic"
          label="Valor de venda"
          onChange={HandleChange}
          name="sale_value"
          value={form.sale_value}
          type="number"
          fullWidth
          required
          InputProps={{ inputProps: { min: 0 } }}
        />
        <TextField
          id="outlined-basic"
          label="Part number"
          onChange={HandleChange}
          name="part_number"
          value={form.part_number}
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Fornecedor"
          onChange={HandleChange}
          name="supplier"
          value={form.supplier}
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Ponto de compra"
          onChange={HandleChange}
          name="resupply_point"
          value={form.resupply_point}
          type="number"
          fullWidth
          required
          InputProps={{ inputProps: { min: 0 } }}
        />
        <FormControl required>
          <FormLabel id="demo-radio-buttons-group-label">Categoria</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              value="celular"
              control={<Radio />}
              label="Celular"
              onChange={HandleChange}
              name="category"
            />
            <FormControlLabel
              value="acessório"
              control={<Radio />}
              label="Acessório"
              onChange={HandleChange}
              name="category"
            />
            <FormControlLabel
              value="roupas"
              control={<Radio />}
              label="Roupas"
              onChange={HandleChange}
              name="category"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Imagem"
          onChange={HandleChange}
          name="image"
          value={form.image}
          fullWidth
        />
      </Box>
      <Stack
        direction="row"
        justifyContent={"center"}
        spacing={4}
        sx={{ marginTop: 1, marginBottom: 8 }}
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
          startIcon={<BackspaceIcon />}
          color="error"
          size="small"
          onClick={HandleClear}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          onClick={HandleSubmit}
          color="success"
          size="small"
        >
          Send
        </Button>
      </Stack>
    </>
  );
}

export default Edit;
