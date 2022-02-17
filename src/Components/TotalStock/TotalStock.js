import React from "react";

// Import Material UI
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Box from "@mui/material/Box";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Typography } from "@mui/material";

function TotalStock({ stock, isLoading }) {
  return (
    <>
      {!isLoading && (
        <>
          <Box>
            <Typography
              variant="h6"
              textAlign={"center"}
              sx={{
                fontWeight: 700,
                mt: 1.5,
                textDecoration: "underline #3A8871",
                textDecorationThickness: 3,
              }}
            >
              Warehouse Result
            </Typography>
          </Box>
          <Box
            sx={{
              boxShadow: 1,
              padding: 2,
              minWidth: 300,
              margin: 1.5,
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "text.secondary" }}>TotalStock Compra</Box>
            <Box
              sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}
            >
              R${" "}
              {stock.reduce(
                (acumulador, currentElement) =>
                  Number(acumulador) +
                  Number(currentElement.purchase_price) *
                    Number(currentElement.quantity),
                0
              )}
              ,00
            </Box>
            <Box
              component={TrendingDownIcon}
              sx={{ color: "error.dark", fontSize: 16, verticalAlign: "sub" }}
            />
            <Box
              sx={{
                color: "success.dark",
                display: "inline",
                fontWeight: "medium",
                mx: 0.5,
              }}
            >
              Entrada:{" "}
              {stock.reduce(
                (acumulador, currentElement) =>
                  Number(acumulador) + Number(currentElement.quantity),
                0
              )}{" "}
              und.
            </Box>
            <Box
              sx={{ color: "text.secondary", display: "inline", fontSize: 12 }}
            >
              Produtos em estoque
            </Box>
          </Box>

          <Box
            sx={{
              boxShadow: 1,
              padding: 2,
              minWidth: 300,
              margin: 1.5,
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "text.secondary" }}>TotalStock Venda</Box>
            <Box
              sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}
            >
              R${" "}
              {stock.reduce(
                (acumulador, currentElement) =>
                  Number(acumulador) +
                  Number(currentElement.sale_value) *
                    Number(currentElement.quantity),
                0
              )}
              ,00
            </Box>
            <Box
              component={TrendingUpIcon}
              sx={{ color: "success.dark", fontSize: 16, verticalAlign: "sub" }}
            />
            <Box
              sx={{
                color: "success.dark",
                display: "inline",
                fontWeight: "medium",
                mx: 0.5,
              }}
            >
              Saída:{" "}
              {stock.reduce(
                (acumulador, currentElement) =>
                  Number(acumulador) + Number(currentElement.quantity),
                0
              )}{" "}
              und.
            </Box>
            <Box
              sx={{ color: "text.secondary", display: "inline", fontSize: 12 }}
            >
              Produtos em estoque
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default TotalStock;
