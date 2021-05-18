import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
    language: languageReducer,
    students: studentReducer,
});

export default rootReducer;
