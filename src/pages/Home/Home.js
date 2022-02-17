import React from "react";
import Resupply from "../../Components/Resupply/Resupply";
import Profit from "../../Components/Profit/Profit";
import TotalStock from "../../Components/TotalStock/TotalStock";
// Import fucoes Material UI
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Home({ stock, isLoading }) {
  return (
    <>
      {!isLoading && (
        <>
          <TotalStock stock={stock} isLoading={isLoading} />
          <Profit stock={stock} isLoading={isLoading} />
          <Resupply stock={stock} isLoading={isLoading} />
        </>
      )}
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 420,
            minWidth: 360,
            height: "82vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default Home;
