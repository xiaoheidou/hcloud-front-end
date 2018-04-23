/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:25:26 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-24 00:36:55
 * fetch参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 */
import 'whatwg-fetch';

export default function _fetch(url, options) {
    options = {
        //跨域请求参数
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    };

    if (options.body && typeof options.body == 'object') {
        options.body = JSON.stringify(options.body);
    }

    return fetch(url, options)
        .then(response => {
            let status = response.status;

            if (status == '200') {
                if (options.headers['Content-Type'] == 'application/json') {
                    return response.json();
                }
                return response;
            }
        }, error => {
            if (process.env.NODE_ENV !== 'production') {
                //console.log(error);
            }
        }).catch(error => {
            console.error('error:', error);
        }).then(result => {
            if (result && result.status === 'success') {
                return result.data;
            } else {
                console.warn(result.message);
            }
        });
}
