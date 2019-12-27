import React from 'react'

// Styles
import './styles.scss'

const CartItem = ({ item: { imageUrl, price, name , quantity} }) => <div className="cart-item"> 
  <img src={imageUrl} alt='Product'/>
  <div className="item-details">
    <div className="name">{name}</div>
    <div className="price">{quantity} x {price}</div>
  </div>
</div>

export default CartItem