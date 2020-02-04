import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown (2).svg';
import './header.component.scss';
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from "reselect";
import { selectCurrentuser } from '../../redux/user/user.selector';
import { selectCartHidden } from "../../redux/cart/cart.selector";

const Header = ({ currentUser, isCartHidden }) => {
  console.log(isCartHidden, 'isCartHidden');

  return (
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
            SIGNOUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartHidden ? '' : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  isCartHidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
