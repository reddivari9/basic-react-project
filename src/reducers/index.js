import { combineReducers } from 'redux';


import test from './test';
import user from './user';


const allReducers = combineReducers({
    test,
    user
});

export default allReducers;
