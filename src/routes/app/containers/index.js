/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:32:15 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-23 18:33:43
 */
import React from 'react';
import { connect } from 'react-redux';

import { getList } from '../actions';
import App from '../components/App';

class AppContainer extends React.Component {
    render() {
        return <App {...this.props} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { app: state.app };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatch: dispatch,
        getList: () => dispatch(getList())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);