import React from 'react';
import { connect } from 'react-redux';

import AlarmSetting from '../components/AlarmSetting';

import {
    getList,
    getInstanceList,
    getUserList
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
        getUserList: () => dispatch(getUserList())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AlarmSettingContainer);