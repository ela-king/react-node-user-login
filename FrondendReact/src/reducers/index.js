import { combineReducers } from 'redux';

import userReducer from './userReducer';

const reducers = combineReducers({
//form: userReducer
userReducer:userReducer
});

export default reducers;
