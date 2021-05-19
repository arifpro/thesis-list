import { combineReducers } from 'redux';
import authReducer from './authReducer';
import languageReducer from './languageReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    language: languageReducer,
    students: studentReducer,
});

export default rootReducer;
