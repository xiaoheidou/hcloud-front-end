import React from 'react';
import { connect } from 'react-redux';

import { } from '../actions';
import Login from '../components/Login';

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { login: state.login };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatch: dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);