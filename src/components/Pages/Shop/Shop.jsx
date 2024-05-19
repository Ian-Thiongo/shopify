import React from 'react'
import { PRODUCTS } from "../../../Products"


function Shop() {
  return (
    <div className='shop'>
        <div>
            <h1>Ian's Shopping Market</h1>
        </div>
        <div className='producs'>
            {""}
            {PRODUCTS.map((product) => (
              <product data={product} />  
            ))}
        </div>
    </div>
  )
}

export default Shop