import { authConstants } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
  authData: {},
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    // <===================> login <===================>
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "success",
        error: "",
        authData: action.payload,
      };
    case authConstants.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: "login failed",
        success: ""
      };

      // <===================> changePassword <===================>
    case authConstants.CHANGE_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case authConstants.CHANGE_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          success: "success",
          authData: {...state.authData, password: action.payload},
        };
      case authConstants.CHANGE_PASSWORD_FAILED:
        return {
          ...state,
          loading: false,
          error: "unable to change password",
        };

    default:
      return state;
  }
};

export default authReducer;
