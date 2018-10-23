export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_RESULT = 'USER_LOGIN_RESULT';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN_RETRY = 'USER_LOGIN_RETRY';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_RESULT = 'USER_SIGNUP_RESULT';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';
export const USER_SIGNUP_RETRY = 'USER_SIGNUP_RETRY';

export const USER_TOKEN_REFRESH_VERIFY = 'USER_TOKEN_REFRESH_VERIFY';
export const USER_TOKEN_REFRESH_VERIFY_RESULT = 'USER_TOKEN_REFRESH_VERIFY_RESULT';
export const USER_TOKEN_REFRESH_VERIFY_ERROR = 'USER_TOKEN_REFRESH_VERIFY_ERROR';
export const USER_TOKEN_REFRESH_VERIFY_RETRY = 'USER_TOKEN_REFRESH_VERIFY_RETRY';


export const userLogout = () => ({
    type: USER_LOGOUT,
});

export const userLogin = ({ phone_number, password }) => ({
    type: USER_LOGIN,
    phone_number,
    password,
});


export const userSignup = ({ name, email, phone_number, password }) => ({
    type: USER_SIGNUP,
    data: { name, email, phone_number, password },
});


export const userTokenRefreshVerify = ({ access = "fhfg", refresh = "fgdhjsa" }) => ({
    type: USER_TOKEN_REFRESH_VERIFY,
    access,
    refresh,
});
