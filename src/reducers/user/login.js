import {
    USER_LOGIN, USER_LOGIN_RESULT, USER_LOGIN_ERROR, USER_LOGIN_RETRY,
    USER_TOKEN_REFRESH_VERIFY, USER_TOKEN_REFRESH_VERIFY_RESULT,
    USER_TOKEN_REFRESH_VERIFY_ERROR, USER_TOKEN_REFRESH_VERIFY_RETRY,
    USER_LOGOUT,
} from '../../actions/user';


const initialState = {
    data: {
        access: localStorage.getItem('access'),
        refresh: localStorage.getItem('refresh'),
    },
    isFetching: false,
    error: false,
    retry: false,
    loggedIn: false,
    message: null,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN:
            return { ...state, isFetching: true, error: false, retry: false, loggedIn: false, message: null, };
        case USER_LOGIN_RESULT:
            return { ...state, loggedIn: true, isFetching: false, data: action.data };
        case USER_LOGIN_ERROR:
            return { ...state, error: true, isFetching: false, message: action.message };
        case USER_LOGIN_RETRY:
            return { ...state, retry: true, isFetching: false, message: action.message };

        case USER_TOKEN_REFRESH_VERIFY:
            return { ...state, isFetching: true, error: false, retry: false, loggedIn: false, message: null, data: { access: '', refresh: '' } };
        case USER_TOKEN_REFRESH_VERIFY_RESULT:
            return { ...state, loggedIn: true, isFetching: false, data: action.data };
        case USER_TOKEN_REFRESH_VERIFY_ERROR:
            return { ...state, error: true, isFetching: false, message: action.message };
        case USER_TOKEN_REFRESH_VERIFY_RETRY:
            return { ...state, retry: true, isFetching: false, message: action.message };
        case USER_LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return { ...initialState, data: { access: '', refresh: '' } };
        default:
            return state;
    }
};

export default reducer;
