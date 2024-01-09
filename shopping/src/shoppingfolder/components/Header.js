import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header-container'>
     <h3 className='heading'>LifeStyle</h3>
     <div className='items-container'>
        <p>Women</p>
        <p>Men</p>
        <p>Kids</p>
        <p>Shoes & Bags</p>
        <p>Beauty</p>
     </div>
     <div className='input-container'>
        <input type='search' id='search-input'placeholder='search here......'/>

     </div>
     <div className='account'>
        <p>Signup / Signin</p>
     </div>
     <div className='cart-container'>
     <FaShoppingCart />
     </div>
    </div>
  )
}

export default Header
