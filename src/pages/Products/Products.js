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
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Products({ stock, isLoading }) {
  const [search, setSearch] = useState("");

  return (
    <>
      {!isLoading && (
        <>
          <Box sx={{ margin: 0, minWidth: 360, maxWidth: 420 }}>
            <Typography
              variant="h6"
              textAlign={"center"}
              sx={{
                fontWeight: 700,
                textDecoration: "underline #3A8871",
                textDecorationThickness: 3,
                marginTop: 1.5,
              }}
            >
              Product List
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              bgcolor: "background.paper",
              overflow: "hidden",
              fontWeight: 700,
              marginTop: 1.5,
              justifyContent: "space-around",
            }}
          >
            <SearchProducts search={search} setSearch={setSearch} />
          </Box>
          <Box sx={{ margin: 0, minWidth: 360, maxWidth: 420 }}>
            <Typography
              variant="caption text"
              textAlign={"center"}
              sx={{
                fontSize: 12,
                display: "flex",
                fontWeight: 700,
                paddingTop: 1,
                color: "red",
                marginLeft: 1.5,
              }}
            >
              *click on item to details
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              bgcolor: "background.paper",
              overflow: "hidden",
              fontWeight: 700,
              marginTop: 0,
              marginLeft: 1.5,
              marginRight: 1.5,
              marginBottom: 1.5,
              paddingLeft: 1,
              paddingRight: 1,
              paddingBottom: 5.5,
              justifyContent: "space-around",
            }}
          >
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
                  <TableRow sx={{ bgcolor: "#3A8871" }}>
                    <TableCell
                      align="center"
                      sx={{ color: "white", padding: 0.3, fontWeight: 700 }}
                    >
                      Part Number
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: "white",
                        padding: 0.3,
                        paddingLeft: 2,
                        fontWeight: 700,
                      }}
                    >
                      Item
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "white", padding: 0.3, fontWeight: 700 }}
                    >
                      Qntd
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stock
                    .filter(product => {
                      return product.name
                        .toLowerCase()
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
          </Box>
        </>
      )}
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: " center",
            alignItems: " center",
            height: " 82vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default Products;
