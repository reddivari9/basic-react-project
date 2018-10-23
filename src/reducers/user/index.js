// External Imports
import { combineReducers } from 'redux';
// My Imports
import login from './login';
import signup from './signup';



export default combineReducers({
    login,
    signup,
})
