/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:32:24 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-17 23:33:02
 */
import constants from '../constants';

const action_handles = {
    [constants.UPDATE_TITLE]: (state, action) => {
        const title = action.payload;
        return Object.assign({}, state, { title: title });
    },
    [constants.UPDATE_LIST]: (state, action) => {
        const list = action.payload;
        return Object.assign({}, state, { list: list });
    }
};
const initialState = {
    title: 'App',
    list: []
};

export default function (state = initialState, action) {
    const handler = action_handles[action.type];
    return handler ? handler(state, action) : state;
}

