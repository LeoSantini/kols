import React from 'react'
import Resuply from '../../Components/Resuply/Resuply'
import Profit from '../../Components/Profit/Profit'
import TotalStock from '../../Components/TotalStock/TotalStock'

function Home({stock, isLoading}) {

    return (
        <div>
            <Resuply stock={stock} isLoading={isLoading}/>
            <Profit stock={stock} isLoading={isLoading}/>
            <TotalStock stock={stock} isLoading={isLoading}/>
        </div>
    )
}

export default Home