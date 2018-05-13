// import constants from './constants';
import fetch from 'SRC_PATH/utils/fetch';
import API from 'SRC_PATH/config/api';

/**
 * 获取列表
 */
export function getList() {
    return async dispatch => {
        const result = await fetch(API.ALARM.SETTING.LIST);
        return result;
    };
}

/**
 * 获取实例列表
 */
export function getInstanceList() {
    return async dispatch => {
        const result = await fetch(API.ALARM.SETTING.INSTANCE_LIST);
        return result;
    };
}

/**
 * 获取用户列表
 */
export function getUserList() {
    return async dispatch => {
        const result = await fetch(API.USER.LIST);
        return result;
    };
}