import Container from './containers';
import reducer from './logic/reducers';
import { injectReducer } from 'rootReducer';
import './assets/style.less';

injectReducer({ key: 'alarmHistory', reducer: reducer });

export default Container;