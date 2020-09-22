import { 
    SET_LOGIN
 } from '../actions/index';

const initialStore = {
    isLogin: false,
};

function reducer(state = initialStore, action) {
    const { type, payload } = action;

    if (type === SET_LOGIN) {
        return { ...state, post_event: payload };
    }

    return state;
}

export default reducer;