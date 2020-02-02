import { cartActionType } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case cartActionType.ADD_ITEM:
      return {
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
       
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };  

    default:
      return state;
  }
}

export default cartReducer;