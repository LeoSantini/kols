import { Link } from "react-router-dom";
import { useEffect } from 'react'
// Import table Material UI
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Products({ stock }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 350 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#F1E0AC" }}>
              <TableCell align="center" sx={{ color: "#74959A", padding: 0.3 }}>
                Part Number
              </TableCell>
              <TableCell align="center" sx={{ color: "#74959A", padding: 0.3 }}>
                Item
              </TableCell>
              <TableCell align="center" sx={{ color: "#74959A", padding: 0.3 }}>
                Quantidade
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stock.map(product => (
              <TableRow
                key={product._id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell
                  align="center"
                  sx={{
                    color: "#495371",
                    borderBottom: 0.1,
                    borderBottomColor: "#495371",
                    paddingTop: 0.5,
                    paddingBottom: 0.5,
                  }}
                >
                  {product.part_number}
                </TableCell>
                <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <TableCell
                    align="center"
                    size="large"
                    sx={{
                      color: "#495371",
                      borderBottom: 0.1,
                      borderBottomColor: "#495371",
                      paddingTop: 0.5,
                      paddingBottom: 0.5,
                    }}
                  >
                    {product.name}
                  </TableCell>
                </Link>
                <TableCell
                  align="center"
                  sx={{
                    color: "#495371",
                    borderBottom: 0.1,
                    borderBottomColor: "#495371",
                    paddingTop: 0.5,
                    paddingBottom: 0.5,
                  }}
                >
                  {product.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Products;
