const API = env.domain + '/api/v1';
export default {
    // 资源
    RESOURCE: {
        LIST: API + '/${category}/list'
    },
    // 监控
    MONITOR: {
        INDEX_DATA: './mock_data/monitor/line.json',
        LIST: API + '/monitor/data/${category}/${key}'
        // LIST: './mock_data/monitor/list.json'
    },
    // 告警
    ALARM: {
        SETTING: {
            LIST: './mock_data/alarm/setting/list.json',
            // LIST: API + '/alert_rules_list',
            DELETE: API + '/alert_rules',
            INSTANCE_LIST: './mock_data/alarm/setting/instanceList.json',
            UPDATE_STATUS: API + '/alert_rules',
            GET_DEDAULT_RULES: API + '/alert_rules_list/service/${service}'
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