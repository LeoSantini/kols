import React from "react";
import Profit from "../../Components/Profit/Profit";
import Resupply from "../../Components/Resupply/Resupply";

function Home({ stock, isLoading }) {
  return (
    <div>
      <Resupply stock={stock} isLoading={isLoading} />
      <Profit stock={stock} isLoading={isLoading} />
    </div>
  );
}

export default Home;
