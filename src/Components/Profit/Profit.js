import React from "react";
import uniqid from "uniqid";

// Import funções Material UI
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Typography } from "@mui/material";

function Profit({ stock, isLoading }) {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{
            fontWeight: 700,
            textDecoration: "underline #3A8871",
            textDecorationThickness: 3,
          }}
        >
          Profit Margin
        </Typography>
      </Box>
      {!isLoading &&
        stock.map(product => {
          return (
            <Box
              key={uniqid()}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                bgcolor: "background.paper",
                overflow: "hidden",
                boxShadow: 1,
                fontWeight: 700,
                margin: 1.5,
                padding: 1,
                justifyContent: "space-around",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 70,
                  width: 100,
                }}
                alt={product.name}
                src={product.image}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  minWidth: { md: 350 },
                }}
              >
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontSize: 22 }}
                >
                  R$ {product.sale_value - product.purchase_price}
                </Box>
                <Box
                  sx={{
                    p: 0.5,
                    backgroundColor: theme =>
                      alpha(theme.palette.primary.main, 0.1),
                    borderRadius: "5px",
                    color: "primary.main",
                    fontWeight: "medium",
                    display: "flex",
                    fontSize: 12,
                    alignItems: "center",
                    "& svg": {
                      fontSize: 21,
                      mr: 0.5,
                    },
                  }}
                >
                  <ErrorOutlineIcon />
                  {(
                    ((product.sale_value - product.purchase_price) * 100) /
                    product.sale_value
                  ).toFixed(1)}
                  %
                </Box>
              </Box>
            </Box>
          );
        })}
    </>
  );
}

export default Profit;
