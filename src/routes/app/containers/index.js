/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:32:15 
 * @Last Modified by:   harry.lang 
 * @Last Modified time: 2018-04-17 23:32:15 
 */
import React from 'react';
import { connect } from 'react-redux';

import { updateTitle, getList } from '../actions';
import App from '../components/App';

class AppContainer extends React.Component {
    render() {
        return <App {...this.props} />;
    }
}

function mapStateToProps(state, ownProps) {
    return state.appReducer ? { app: state.appReducer } : {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatch: dispatch,
        updateTitle: (params) => dispatch(updateTitle(params)),
        getList: () => dispatch(getList())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);