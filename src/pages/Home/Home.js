import React from "react";
import Resupply from "../../Components/Resupply/Resupply";
import Profit from "../../Components/Profit/Profit"
import TotalStock from "../../Components/TotalStock/TotalStock"

function Home({ stock, isLoading }) {


    return (
        <>{!isLoading &&
            <>
                <Resupply stock={stock} isLoading={isLoading} />
                <Profit stock={stock} isLoading={isLoading} />
                <TotalStock stock={stock} isLoading={isLoading} />
            </>
        }
        </>
    );
}

export default Home;
