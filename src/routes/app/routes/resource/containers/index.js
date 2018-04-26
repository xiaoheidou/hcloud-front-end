import React from 'react';
import { connect } from 'react-redux';

import { getList } from '../logic/actions';
import Resource from '../components/Resource';

class ResourceContainer extends React.Component {
    render() {
        return <Resource {...this.props} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { resource: state.resource };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatch: dispatch,
        getList: () => dispatch(getList())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ResourceContainer);