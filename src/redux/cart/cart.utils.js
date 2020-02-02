export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find(cartItem => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existing) {
    
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
   

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
