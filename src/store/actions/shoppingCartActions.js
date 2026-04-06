// src/store/actions/shoppingCartActions.js

// Action Types
export const SET_CART = "SET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

// YENİ SİPARİŞ ACTION TYPES
export const CREATE_ORDER_START = "CREATE_ORDER_START";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE";
export const CLEAR_CART = "CLEAR_CART";

// Action Creators

// Sepeti direkt set et (API'den çekince vs.)
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

// Ürün ekle - Aynı ürün varsa count artar
export const addToCart = (product, count = 1) => ({
  type: ADD_TO_CART,
  payload: { product, count },
});

// Ürün çıkar
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Ürün miktarını güncelle
export const updateCartItem = (productId, count) => ({
  type: UPDATE_CART_ITEM,
  payload: { productId, count },
});

// Ödeme bilgisi
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

// Adres bilgisi
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

// YENİ SİPARİŞ ACTION CREATORS
export const createOrderStart = () => ({
  type: CREATE_ORDER_START,
});

export const createOrderSuccess = (order) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: order,
});

export const createOrderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  payload: error,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

// THUNK - Sipariş oluşturma
export const createOrder = (orderData) => async (dispatch) => {
  dispatch(createOrderStart());
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://workintech-fe-ecommerce.onrender.com/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(orderData),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Sipariş oluşturulurken hata oluştu",
      );
    }

    const data = await response.json();
    dispatch(createOrderSuccess(data));
    dispatch(clearCart());
    return data;
  } catch (error) {
    dispatch(createOrderFailure(error.message));
    throw error;
  }
};
