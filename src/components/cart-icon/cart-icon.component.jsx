import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = ({ cartDropdownHidden }) => {
  return (
    <div className='cart-icon' onClick={cartDropdownHidden}>
      <ShoppingIcon className='shopping-icon' />
      <div className='span item-count'>0</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  cartDropdownHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);