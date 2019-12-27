import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

// Redux
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

// Firebase
import { auth } from '../../firebase/firebase.util';

// Components
import CartIcon from '../cart-icon/Carticon'
import CartDropDown from '../Cart/Cart'

// Images
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Styles
import './styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    { hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);