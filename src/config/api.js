/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:23:37 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-26 17:18:38
 */
const API = env.domain + '/api/v1';
export default {
    RESOURCE: {
        LIST: API + '/hostlist'
    },
    MONITOR: {
        LIST: './mock_data/line.json'
    }
};