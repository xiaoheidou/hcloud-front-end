/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:23:37 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-05-14 23:18:45
 */
const API = env.domain + '/api/v1';
export default {
    // 资源
    RESOURCE: {
        LIST: API + '/hostlist'
    },
    // 监控
    MONITOR: {
        LIST: './mock_data/line.json',
        TITLE:'./mock_data/title.json'
    },
    // 告警
    ALARM: {
        SETTING: {
            LIST: './mock_data/alarm/setting/list.json',
            // LIST: API + '/alert_rules_list',
            DELETE: API + '/alert_rules',
            INSTANCE_LIST: './mock_data/alarm/setting/instanceList.json'
        },
        HISTORY: {
            LIST: './mock_data/alarm/history/list.json',
            
        }
    },
    // 用户
    USER: {
        LIST: './mock_data/alarm/setting/users.json'
    }
};