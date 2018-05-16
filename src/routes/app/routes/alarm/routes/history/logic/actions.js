// import constants from './constants';
import fetch from 'SRC_PATH/utils/fetch';
import API from 'SRC_PATH/config/api';

/**
 * 获取列表
 */
export function getList() {
    return async dispatch => {
        const result = await fetch(API.ALARM.HISTORY.LIST);
        return result;
    };
}

