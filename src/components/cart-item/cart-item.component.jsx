import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { price, name, quantity, imageUrl } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='imageUrl' />
      <div className='item-detaile'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;