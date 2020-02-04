import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selecCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ cartDropdownHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={cartDropdownHidden}>
      <ShoppingIcon className='shopping-icon' />
      <div className='span item-count'>{itemCount}</div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  itemCount: selecCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  cartDropdownHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
