// import constants from '../constants';
import fetch from 'SRC_PATH/utils/fetch';
import API from 'SRC_PATH/config/api';

/**
 * 获取数据列表
 */
export function getList() {
    return async dispatch => {
        const result = await fetch(API.MONITOR.LIST);
        return result;
    };
}

/**
 * 获取指标数据
 */
export function getIndexData() {
    return async dispatch => {
        const result = await fetch(API.MONITOR.INDEX_DATA);
        return result;
    };
}
