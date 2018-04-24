import Container from './containers';
import reducer from './reducers';
import { injectReducer } from 'rootReducer';
import './assets/style.less';

injectReducer({ key: 'login', reducer: reducer });

export default Container;