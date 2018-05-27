// import constants from '../constants';
import fetch from 'SRC_PATH/utils/fetch';
import API from 'SRC_PATH/config/api';

/**
 * 获取数据列表
 */
export function getList(category, key) {
    return async dispatch => {
        const url = API.MONITOR.LIST.replace('${category}', category).replace('${key}', key);
        const result = await fetch(url);
        return result;
    };
}

/**
 * 获取指标数据
 */
export function getIndexData(category, key, params) {
    return async dispatch => {
        const url = API.MONITOR.INDEX_DATA.replace('${category}', category).replace('${key}', key);
        const result = await fetch(url, {
            params: params
        });
        return result;
    };
}
