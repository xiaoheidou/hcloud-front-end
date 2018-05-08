/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:23:37 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-05-08 23:09:12
 */
const API = env.domain + '/api/v1';
export default {
    RESOURCE: {
        LIST: API + '/hostlist'
    },
    MONITOR: {
        LIST: './mock_data/line.json'
    },
    ALARM: {
        SETTING: {
            LIST: API + '/alert_rules_list'
        }
    }
};