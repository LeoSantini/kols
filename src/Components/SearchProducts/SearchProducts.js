import React from 'react'
import {useState} from 'react'

function SearchProducts({search, setSearch}) {

    function handleChange(event){
        setSearch(event.target.value)
        console.log(search)
    }

    return ( 
        <div>
            <input 
                type='text'
                placeholder='Procure pelo nome do Produto'
                onChange={handleChange}
                value={search}
            />
        </div>
     );
}

export default SearchProducts;