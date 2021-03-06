import React from 'react';
import { connect } from 'react-redux';

import { getList, getIndexData } from '../logic/actions';
import Monitor from '../components/Monitor';

class MonitorContainer extends React.Component {
    render() {
        return <Monitor {...this.props} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { monitor: state.monitor };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatch: dispatch,
        getList: (...args) => dispatch(getList(...args)),
        getIndexData: (...args) => dispatch(getIndexData(...args))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MonitorContainer);