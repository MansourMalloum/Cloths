import React from "react";

import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  removeItemsFromCart,
  removeItemFromCart,
  toggleCartHidden,
  addItem
} from "../../redux/cart/cart.action";

const CheckoutItem = ({
  cartItem,
  removeItemsFromCart,
  removeItemFromCart,
  addItem
}) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10094;
        </span>
        {quantity}
        <span style={{ cursor: "pointer" }} onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className='price'>{price} </span>
      <div
        className='remove-button'
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItemsFromCart: item => dispatch(removeItemsFromCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  addItem: item => {
    dispatch(addItem(item));
    dispatch(toggleCartHidden());
  }
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
