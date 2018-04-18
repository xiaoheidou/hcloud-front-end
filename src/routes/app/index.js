/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:32:46 
 * @Last Modified by:   harry.lang 
 * @Last Modified time: 2018-04-17 23:32:46 
 */
import Container from './containers';
import reducer from './reducers';
import { injectReducer } from 'rootReducer';
import './assets/style.less';

injectReducer({ key: 'appReducer', reducer: reducer });

export default Container;
