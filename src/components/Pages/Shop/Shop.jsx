import React from 'react'
import { PRODUCTS } from "../../../Products"
import Product from "../Shop/product"
import "../Shop/shop.css"
function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Ian's Shopping Market</h1>
        </div>
        <div className='products'>
          {" "}
          {PRODUCTS.map((product) =>(
            <Product data={product}/>
           
          ))}
         
        </div>
    </div>
  )
}

export default Shop