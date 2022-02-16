import React from 'react'

function TotalStock({ stock, setStock }) {

    const sumStock = (stock).reduce((previousValue, currentValue) => previousValue + currentValue)

    return (
        <div>

        </div>
    );
}

export default TotalStock;