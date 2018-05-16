import React from 'react';
import { connect } from 'react-redux';

import AlarmSetting from '../components/AlarmSetting';

import {
    getList,
    getInstanceList,
    getUserList,
    deleteById,
    updateStatus
} from '../logic/actions';

class AlarmSettingContainer extends React.Component {
    render() {
        return <AlarmSetting {...this.props} />;
    }
}

function mapStateToProps(state, ownProps) {
    return { alarmSetting: state.alarmSetting };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatch: dispatch,
        getList: () => dispatch(getList()),
        getInstanceList: () => dispatch(getInstanceList()),
        getUserList: () => dispatch(getUserList()),
        deleteById: (...args) => dispatch(deleteById(...args)),
        updateStatus: (...args) => dispatch(updateStatus(...args)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AlarmSettingContainer);