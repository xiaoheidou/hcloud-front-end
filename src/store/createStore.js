/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:24:27 
 * @Last Modified by:   harry.lang 
 * @Last Modified time: 2018-04-17 23:24:27 
 */
import { applyMiddleware, createStore, compose } from 'redux';
import { makeRootReducer } from './rootReducer';
import thunk from 'redux-thunk';

/**
 * 自定义中间件
 * @param store
 */
const customizeMiddleware = store => next => action => {
    //console.log('-----------自定义redux中间件[action]   -----------', action);
    let result = next(action);
    //console.log('-----------自定义redux中间件[nextState]-----------', store.getState());
    return result;
};

export default (initialState = {}) => {
    let composeEnhancers = compose;
    // https://github.com/zalmoxisus/redux-devtools-extension
    if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    const middleware = [customizeMiddleware, thunk];
    const store = createStore(
        makeRootReducer(),
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
    store.asyncReducers = {};

    return store;
};