import { languageConstants } from "../actionTypes";

const initialState = {
  languages: ["CN", "EN"],
  selectedLanguage: "CN",
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case languageConstants.CHANGE_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };

    default:
      return state;
  }
};

export default languageReducer;
