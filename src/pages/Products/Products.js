import { Link } from "react-router-dom";
import { useState } from "react";
import uniqid from "uniqid";
import SearchProducts from "../../Components/SearchProducts/SearchProducts";
// Import table Material UI
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Products({ stock, isLoading }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      {!isLoading && (
        <div>
          <SearchProducts search={search} setSearch={setSearch} />

          <TableContainer
            component={Paper}
            sx={{ minWidth: 360, maxWidth: 420 }}
          >
            <Table
              sx={{ width: "100%" }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow sx={{ bgcolor: "#F1E0AC" }}>
                  <TableCell
                    align="center"
                    sx={{ color: "gray", padding: 0.3 }}
                  >
                    <strong>Part Number</strong>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "gray", padding: 0.3, paddingLeft: 2 }}
                  >
                    <strong>Item</strong>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "gray", padding: 0.3 }}
                  >
                    <strong>Quantidade</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stock
                  .filter(product => {
                    return product.name.toLowerCase()
                      .includes(search.toLowerCase());
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
                      <TableCell
                        align="center"
                        sx={{
                          color: "black",
                          paddingTop: 0.5,
                          paddingBottom: 0.5,
                          border: "none",
                        }}
                      >
                        {product.part_number}
                      </TableCell>
                      <Link
                        to={`/product/${product._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <TableCell
                          align="left"
                          size="medium"
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
                        sx={{
                          color: "black",
                          paddingTop: 0.5,
                          paddingBottom: 0.5,
                          border: "none",
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
      )}
      {isLoading && <p>Carregando...</p>}
    </div>
  );
}

export default Products;
