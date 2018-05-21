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

/**
 * 删除告警模板
 */
export function deleteById(id) {
    return async dispatch => {
        const result = await fetch(`${API.ALARM.SETTING.DELETE}/${id}`, {
            method: 'DELETE'
        });
        return result;
    };
}

/**
 * 修改告警规则状态（启用-enable/禁用-disable）
 */
export function updateStatus(id, status) {
    return async dispatch => {
        const result = await fetch(`${API.ALARM.SETTING.UPDATE_STATUS}/${id}`, {
            method: 'PUT',
            body: { action: { method: status } }
        });
        return result;
    };
}

/**
 * 根据服务类型获取默认告警模板
 */
export function getDefaultRule(service) {
    return async dispatch => {
        const result = await fetch(API.ALARM.SETTING.GET_DEDAULT_RULES.replace('${service}', service));
        return result;
    };
}

