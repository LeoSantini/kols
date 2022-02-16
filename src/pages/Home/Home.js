import React from 'react'
import ChangeStock from '../../Components/ChangeStock/ChangeStock'
import Resuply from '../../Components/Resuply/Resuply'

function Home({stock, isLoading}) {
    return (
        <div>
            <ChangeStock />
            <Resuply stock={stock} isLoading={isLoading}/>
        </div>
    )
}

export default Home