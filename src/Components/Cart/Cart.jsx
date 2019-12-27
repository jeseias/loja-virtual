import React from 'react'
import { withRouter } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItem } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

// Components
import CustomButton from '../CustomButton/CustumButton'
import CartItem from '../cart-item/Cart-Item'

// Styles
import './styles.scss'

const Cart = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items"> 
      { 
        cartItems.length ? (
          cartItems.map( cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          )) 
        )
        :
        ( <span className="empty-message">Your cart is empty</span> )
      }
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>
        GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem 
});

export default withRouter( connect(mapStateToProps)(Cart)   )