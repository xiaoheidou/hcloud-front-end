/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:25:05 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-25 13:54:48
 */
const path = require('path');

var basePath = process.cwd();
const iconUrl = path.resolve(basePath, 'src/assets/fonts/antd/font_148784_r2qo40wrmaolayvi');
// antd icon-url 调用入口
const antStyleUrl = path.resolve(basePath, 'node_modules/antd/es/style/core');

module.exports = () => {
    return {
        'icon-url': '"' + path.relative(antStyleUrl, iconUrl) + '"'
    };
};
