import {
    TEST, TEST_ERROR, TEST_RESULT, TEST_RETRY
} from '../actions/test';


const initialState = {
    data: {},
    isFetching: false,
    error: false,
    retry: false,
    message: null,
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case TEST:
            return {...state, isFetching: true, error: false, retry: false, message: null,};
        case TEST_RESULT:
            return {...state, isFetching: false, data: action.data};
        case TEST_ERROR:
            return {...state, isFetching: false, error: true, message: action.message,};
        case TEST_RETRY:
            return {...state, isFetching: false, retry: true, };
    }
    return state;
};

export default reducer;
