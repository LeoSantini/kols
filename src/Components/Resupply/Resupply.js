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

function Resupply({ stock, isLoading }) {
  return (
    <>
      <Box sx={{ margin: 0, minWidth: 360, maxWidth: 420 }}>
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{
            fontWeight: 700,
            textDecoration: "underline #3A8871",
            textDecorationThickness: 3,
          }}
        >
          Resupply Point
        </Typography>
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
          *click on item to edit product
        </Typography>
      </Box>
      {!isLoading && (
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
                    Quantidade
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: "white", padding: 0.3, fontWeight: 700 }}
                  >
                    RP
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
        </Box>
      )}
    </>
  );
}

export default Resupply;
