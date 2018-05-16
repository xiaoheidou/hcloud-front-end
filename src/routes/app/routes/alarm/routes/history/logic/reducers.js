// import constants from './constants';

const action_handles = {};
const initialState = {};

export default function (state = initialState, action) {
    const handler = action_handles[action.type];
    return handler ? handler(state, action) : state;
}

