// import constants from '../constants';
import fetch from 'SRC_PATH/utils/fetch';
import API from 'SRC_PATH/config/api';

export function getList() {
    return async dispatch => {
        const result = await fetch(API.MONITOR.LIST);
        return result;
    };
}
export function getTitle() {
    return async dispatch => {
        const result = await fetch(API.MONITOR.TITLE);
        return result;
    };
}
