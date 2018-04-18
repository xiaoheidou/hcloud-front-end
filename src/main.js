/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:27:42 
 * @Last Modified by:   harry.lang 
 * @Last Modified time: 2018-04-17 23:27:42 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';

import Loading from './components/Loading';
import store from './store';

// 公共样式部分
import 'normalize.css';
import './assets/index.less';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/app" component={
                    Loadable({
                        loader: () => import(/* webpackChunkName: "app" */'./routes/app'),
                        loading: Loading
                    })
                } />
                <Route path="/404" component={
                    Loadable({
                        loader: () => import(/* webpackChunkName: "404" */'./routes/404'),
                        loading: Loading
                    })
                } />

                <Redirect from="/" to="/404" />
                {/*<Route component={NoMatch}/>*/}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// 设置所有模块接受热更新
if (module.hot) {
    module.hot.accept();
}