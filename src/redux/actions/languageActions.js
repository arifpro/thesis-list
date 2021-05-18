import { languageConstants } from "../actionTypes";

export const changeLanguage = (language) => (dispatch) => {
  dispatch({
    type: languageConstants.CHANGE_LANGUAGE,
    payload: language,
  });
};
