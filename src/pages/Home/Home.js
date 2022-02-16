import React from 'react'
import ChangeStock from '../../Components/ChangeStock/ChangeStock'
import Resuply from '../../Components/Resuply/Resuply'

function Home({stock}) {
    return (
        <div>
            <ChangeStock />
            <Resuply stock={stock}/>
        </div>
    )
}

export default Home