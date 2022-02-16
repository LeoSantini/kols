import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

// Import funções Material UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Resuply({ stock, isLoading }) {
  return (
    <div>
      <Box>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ bgcolor: "rgba(211, 211, 211, 0.5)", marginTop: 0.5 }}
        >
          Resupply Point
        </Typography>
        <hr style={{ borderColor: "red", margin: 1 }}></hr>
      </Box>
      {!isLoading && (
        <TableContainer component={Paper} sx={{ maxWidth: 344 }}>
          <Table sx={{ maxWidth: 344 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ bgcolor: "#F1E0AC" }}>
                <TableCell
                  align="left"
                  sx={{ color: "gray", padding: 0.3, paddingLeft: 2 }}
                >
                  <strong>Item</strong>
                </TableCell>
                <TableCell align="center" sx={{ color: "gray", padding: 0.3 }}>
                  <strong>Quantidade</strong>
                </TableCell>
                <TableCell align="center" sx={{ color: "gray", padding: 0.3 }}>
                  <strong>Ponto Compra</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stock
                .filter(product => {
                  return product.quantity <= product.resupply_point;
                })
                .map(product => (
                  <TableRow
                    key={uniqid()}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                      borderBottom: 0.1,
                      borderBottomColor: "gray",
                      borderWidth: 1,
                    }}
                  >
                    <Link
                      to={`/editProduct/${product._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <TableCell
                        align="left"
                        sx={{
                          color: "black",
                          paddingTop: 0.5,
                          paddingBottom: 0.5,
                          border: "none",
                        }}
                      >
                        {product.name}
                      </TableCell>
                    </Link>
                    <TableCell
                      align="center"
                      size="medium"
                      sx={{
                        color: "black",
                        paddingTop: 0.5,
                        paddingBottom: 0.5,
                        border: "none",
                      }}
                    >
                      {product.quantity}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "black",
                        paddingTop: 0.5,
                        paddingBottom: 0.5,
                        border: "none",
                      }}
                    >
                      {product.resupply_point}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* stock
                .filter((product) => {
                    return product.quantity <= product.resupply_point
                })
                .map((product) => {
                    return (
                        <div key={uniqid()}>
                            <p>Produto: {product.name}</p>
                            <span>Qnt: {product.quantity} </span>
                            <span>Ponto de Pedido: {product.resupply_point} </span>
                        </div>

                        
                    )
                }) */}
    </div>
  );
}

export default Resuply;
