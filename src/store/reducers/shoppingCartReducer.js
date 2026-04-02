// src/store/reducers/shoppingCartReducer.js
import {
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [], // [{ count: 1, checked: true, product: { id, name, price, image } }]
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };

    case ADD_TO_CART: {
      const { product, count = 1 } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id,
      );

      // Aynı ürün varsa count'u artır (T17 görevi)
      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + count,
        };
        return { ...state, cart: updatedCart };
      }

      // Yeni ürün ekle
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            count: count,
            checked: true,
            product: product,
          },
        ],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case UPDATE_CART_ITEM: {
      const { productId, count } = action.payload;
      if (count <= 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.product.id !== productId),
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === productId ? { ...item, count } : item,
        ),
      };
    }

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};

export default shoppingCartReducer;
