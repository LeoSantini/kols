import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

function Form() {
  const Navigate = useNavigate();

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
    console.log(form);
  }

    function HandleSubmit(event) {
    for (let key in form) {
    if (!form[key]) {
        window.alert(`Preencher o campo ${key}`);
        return;
    }
    }
    event.preventDefault();

    try {
      const result = axios.post("https://ironrest.herokuapp.com/kols", form);
      Navigate("/products");
    } catch (error) {
      console.log(error);
    }
    }
  

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { maxWidth: 360, marginTop: 1 },
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
          >
            <FormControlLabel
              value="celular"
              control={<Radio />}
              label="Celular"
              onChange={HandleChange}
              name="category"
            />
            <FormControlLabel
              value="livros"
              control={<Radio />}
              label="Livros"
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
          fullWidth
          required
        />
      </Box>
      <Stack
        direction="row"
        justifyContent={"center"}
        spacing={6}
        sx={{ marginTop: 1 }}
      >
        <Button
          variant="outlined"
          startIcon={<BackspaceIcon />}
          color="error"
          size="large"
          disabled
        >
          Clear
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          onClick={HandleSubmit}
          color="success"
          size="large"
        >
          Send
        </Button>
      </Stack>
    </div>
  );
}

export default Form;
