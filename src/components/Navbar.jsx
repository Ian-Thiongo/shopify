import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Nav.css"


function Navbar() {
  return (
    <div className="nav">
        <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/cart">
               <FontAwesomeIcon icon={faShoppingCart} />
            </Link>

   


        </div>
    </div>
  )
}

export default Navbar