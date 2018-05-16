import React from 'react';
import { connect } from 'react-redux';

import AlarmHistory from '../components/AlarmHistory';

import {
    getList
    
} from '../logic/actions';

class AlarmHistoryContainer extends React.Component {
    render() {
        return <AlarmHistory {...this.props} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { alarmHistory: state.alarmHistory };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatch: dispatch,
        getList: () => dispatch(getList())
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AlarmHistoryContainer);