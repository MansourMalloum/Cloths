import { cartActionType } from "./cart.types";
import { addItemToCart, removeItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.ADD_ITEM:
      return {
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case cartActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };

    case cartActionType.REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
