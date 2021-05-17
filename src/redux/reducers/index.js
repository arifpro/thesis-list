import { combineReducers } from 'redux';
import studentReducers from './studentReducers';

const rootReducer = combineReducers({
    students: studentReducers,
});

export default rootReducer;
