/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:23:26 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-05-20 11:51:15
 */
var env = (function () {
    return {
        domain: 'http://114.67.76.75:5000',
        // 告警配置
        alarm: {
            rule: {
                computeModes: [
                    {
                        value: '==',
                        name: '等于'
                    }, {
                        value: '!=',
                        name: '不等于'
                    }, {
                        value: '>',
                        name: '大于'
                    }, {
                        value: '<',
                        name: '小于'
                    }, {
                        value: '>=',
                        name: '大于等于'
                    }, {
                        value: '<=',
                        name: '小于等于'
                    }
                ],
                periods: [{
                    value: '10m',
                    name: '10分钟'
                }, {
                    value: '30m',
                    name: '30分钟'
                }, {
                    value: '1h',
                    name: '1小时'
                }, {
                    value: '3h',
                    name: '3小时'
                }, {
                    value: '1d',
                    name: '一天'
                }],
                notifyTypes: [{
                    value: 0,
                    name: 'Email'
                }, {
                    value: 1,
                    name: '短信'
                }]
            }
        }
    };
})();