// src/store/actions/addressActions.js
import axios from "axios";

export const SET_ADDRESSES = "SET_ADDRESSES";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const SET_ADDRESS_LOADING = "SET_ADDRESS_LOADING";
export const SET_ADDRESS_ERROR = "SET_ADDRESS_ERROR";

// ✅ BOŞLUK YOK
const API_URL = "https://workintech-fe-ecommerce.onrender.com";

export const fetchAddresses = () => async (dispatch, getState) => {
  dispatch({ type: SET_ADDRESS_LOADING, payload: true });
  try {
    const token = getState().client.user.token;
    const response = await axios.get(`${API_URL}/user/address`, {
      headers: { Authorization: token },
    });
    dispatch({ type: SET_ADDRESSES, payload: response.data });
  } catch (error) {
    console.error("Fetch error:", error.response?.status, error.response?.data);
    dispatch({ type: SET_ADDRESS_ERROR, payload: error.message });
  } finally {
    dispatch({ type: SET_ADDRESS_LOADING, payload: false });
  }
};

export const createAddress = (addressData) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    const response = await axios.post(`${API_URL}/user/address`, addressData, {
      headers: { Authorization: token },
    });
    dispatch({ type: ADD_ADDRESS, payload: response.data });
    dispatch(fetchAddresses());
    return true;
  } catch (error) {
    console.error(
      "Create error:",
      error.response?.status,
      error.response?.data,
    );
    dispatch({ type: SET_ADDRESS_ERROR, payload: error.message });
    return false;
  }
};

// ✅ ID BODY'DE GÖNDER (404 hatası için)
export const editAddress = (id, addressData) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    const response = await axios.put(
      `${API_URL}/user/address`, // ✅ ID YOK - /${id} kaldırıldı
      { ...addressData, id }, // ✅ ID body'de
      { headers: { Authorization: token } },
    );
    console.log("Update response:", response.data);
    dispatch({ type: UPDATE_ADDRESS, payload: response.data });
    dispatch(fetchAddresses());
    return true;
  } catch (error) {
    console.error(
      "Update error:",
      error.response?.status,
      error.response?.data,
    );
    alert(
      "Güncelleme hatası: " + (error.response?.data?.message || error.message),
    );
    return false;
  }
};

export const removeAddress = (id) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    await axios.delete(`${API_URL}/user/address/${id}`, {
      headers: { Authorization: token },
    });
    dispatch({ type: DELETE_ADDRESS, payload: id });
    dispatch(fetchAddresses());
    return true;
  } catch (error) {
    dispatch({ type: SET_ADDRESS_ERROR, payload: error.message });
    return false;
  }
};
