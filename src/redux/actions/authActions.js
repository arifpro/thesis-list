import axios from "axios";
import { authConstants } from "../actionTypes";

const API_URL = "http://localhost:7000/api/judge";
// const API_URL = 'https://thesis-list.herokuapp.com/api/student'

// <===================> login <===================>
export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });

    const {jobId, password} = data;

    const res = await axios.post(`${API_URL}/login`, {jobId, password});

    if (res.status === 200) {
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: res.data.judge,
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILED,
        error: "login failed",
      });
    }
  } catch (e) {
    dispatch({
      type: authConstants.LOGIN_FAILED,
      error: e,
    });
  }
};

// <===================> changePassword <===================>
export const changePassword = (newPasswordData) => async (dispatch) => {
  try {
    dispatch({
      type: authConstants.CHANGE_PASSWORD_REQUEST,
    });

    const res = await axios.post(`${API_URL}/change-password`, newPasswordData);

    if (res.status === 200) {
      dispatch({
        type: authConstants.CHANGE_PASSWORD_SUCCESS,
        payload: newPasswordData.password,
      });
    } else {
      dispatch({
        type: authConstants.CHANGE_PASSWORD_FAILED,
        error: "unable to change password",
      });
    }
  } catch (e) {
    dispatch({
      type: authConstants.CHANGE_PASSWORD_FAILED,
      error: e,
    });
  }
};
