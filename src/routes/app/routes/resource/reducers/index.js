import constants from '../constants';

const action_handles = {
    [constants.SET_LIST]: (state, action) => {
        const list = action.payload;
        return Object.assign({}, state, { list });
    }
};
const initialState = {
    list: []
};

export default function (state = initialState, action) {
    const handler = action_handles[action.type];
    return handler ? handler(state, action) : state;
}

