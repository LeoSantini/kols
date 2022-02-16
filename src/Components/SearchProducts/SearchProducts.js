import React from "react";
import { useState } from "react";

// Import funções Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function SearchProducts({ search, setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value);
    console.log(search);
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            maxWidth: 344,
            margin: 0,
            marginTop: 1,
            marginBottom: 1,
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          placeholder="Search / Busca"
          variant="outlined"
          onChange={handleChange}
          type="text"
          value={search}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="end" sx={{ color: "red" }}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
}

export default SearchProducts;
