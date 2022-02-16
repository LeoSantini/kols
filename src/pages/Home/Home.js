import React from "react";
import Resuply from "../../Components/Resuply/Resuply";

function Home({ stock, isLoading }) {
  return (
    <div>
      <Resuply stock={stock} isLoading={isLoading} />
    </div>
  );
}

export default Home;
