/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:32:24 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-23 16:44:43
 */
import constants from '../constants';

const action_handles = {
    [constants.UPDATE_LIST]: (state, action) => {
        const list = action.payload;
        return Object.assign({}, state, { list: list });
    }
};
const initialState = {
    list: []
};

export default function (state = initialState, action) {
    const handler = action_handles[action.type];
    return handler ? handler(state, action) : state;
}

