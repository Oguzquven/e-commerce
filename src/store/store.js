// src/store/store.js
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

// Reducers
import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import addressReducer from "./reducers/addressReducer";
import cardReducer from "./reducers/cardReducer";
import orderReducer from "./reducers/orderReducer"; // ✅ YENİ

// Root Reducer
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  address: addressReducer,
  card: cardReducer,
  order: orderReducer, // ✅ YENİ
});

// Middleware ve Enhancer
const logger = createLogger();
const middleware = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
