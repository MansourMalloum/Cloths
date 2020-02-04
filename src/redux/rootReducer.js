import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "../redux/shop/shopReducer";
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  sections: directoryReducer,
  collections: shopReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
export default persistReducer(persistConfig, rootReducer);
