// src/store/actions/orderActions.js
import axios from "axios";
import { clearCart } from "./shoppingCartActions";

// Action Types
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_ERROR = "CREATE_ORDER_ERROR";
export const SET_ORDERS = "SET_ORDERS";
export const SET_ORDER_LOADING = "SET_ORDER_LOADING";
export const SET_ORDER_ERROR = "SET_ORDER_ERROR";

// ✅ Boşluk kaldırıldı
const API_URL = "https://workintech-fe-ecommerce.onrender.com";

// POST - Sipariş oluştur
export const createOrder = (orderData) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    const response = await axios.post(`${API_URL}/order`, orderData, {
      headers: { Authorization: token },
    });

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
    dispatch(clearCart());

    return { success: true, data: response.data };
  } catch (error) {
    dispatch({ type: CREATE_ORDER_ERROR, payload: error.message });
    return { success: false, error: error.message };
  }
};

// ✅ YENİ: GET - Kullanıcının siparişlerini getir
export const fetchOrders = () => async (dispatch, getState) => {
  dispatch({ type: SET_ORDER_LOADING, payload: true });

  try {
    const token = getState().client.user.token;
    const response = await axios.get(`${API_URL}/order`, {
      headers: { Authorization: token },
    });

    console.log("Orders fetched:", response.data);
    dispatch({ type: SET_ORDERS, payload: response.data });
  } catch (error) {
    console.error(
      "Fetch orders error:",
      error.response?.status,
      error.response?.data,
    );
    dispatch({ type: SET_ORDER_ERROR, payload: error.message });
  } finally {
    dispatch({ type: SET_ORDER_LOADING, payload: false });
  }
};
