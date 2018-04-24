import constants from '../constants';
import fetch from 'SRC_PATH/utils/fetch';
import API from 'SRC_PATH/config/api';

/**
 * 获取资源列表
 */
export function getList() {
    return async dispatch => {
        const result = await fetch(API.RESOURCE.LIST);
        dispatch(setList(result));
    };
}

/**
 *  设置资源列表
 * @param {Array} data 
 */
export const setList = (data) => {
    return {
        type: constants.SET_LIST,
        payload: data
    };
};