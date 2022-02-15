import { Link } from "react-router-dom";
import { useEffect } from 'react'

function Products({ stock, setRerender }) {

  useEffect(() => {
    setRerender(true)
  })

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
        <Table sx={{ maxWidth: 360 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Part Number</TableCell>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Quantidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stock.map(product => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {product.part_number}
                </TableCell>
                <Link to={`/product/${product._id}`}>
                  <TableCell align="center">{product.name}</TableCell>
                </Link>
                <TableCell align="center">{product.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Products;
