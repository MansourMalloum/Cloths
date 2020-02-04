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

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCart = cartItems.find(cartItem => {
    return cartItemToRemove.id === cartItem.id;
  });

  if (existingCart.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
