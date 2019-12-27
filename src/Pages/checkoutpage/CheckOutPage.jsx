import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// Redux
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selectors'

// Components
import CheckOutItem from '../../Components/checkout-item/CheckOutItem'

import './styles.scss'  

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-blocks">
        <span> Product </span>
      </div>
      <div className="header-blocks">
        <span> Description </span>
      </div>
      <div className="header-blocks">
        <span> Quantity </span>
      </div>
      <div className="header-blocks">
        <span> Price </span>
      </div>
      <div className="header-blocks">
        <span> Remove </span>
      </div>
    </div>
    {
      cartItems.map( cartItem => 
        <CheckOutItem key={cartItem.id} cartItem={cartItem}/> )
    }
    <div className="total">
  <span>TOTAL: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage)
