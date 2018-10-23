import {
    USER_SIGNUP, USER_SIGNUP_ERROR, USER_SIGNUP_RESULT, USER_SIGNUP_RETRY,
} from '../../actions/user';


const initialState = {
    data: {},
    isFetching: false,
    error: false,
    retry: false,
    signedUp: false,
    message: null,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_SIGNUP:
            return {...state, isFetching: true, error: false, retry: false, signedUp: false, message: null,};
        case USER_SIGNUP_RESULT:
            return {...state, signedUp: true, isFetching: false, data: action.data};
        case USER_SIGNUP_ERROR:
            return {...state, error: true, isFetching: false, message: action.message};
        case USER_SIGNUP_RETRY:
            return {...state, retry: true, isFetching: false, message: action.message};
        default:
            return state;
    }
};

export default reducer;
