import React from 'react';
import { connect } from 'react-redux';

import { getList } from '../logic/actions';
import AlarmSetting from '../components/AlarmSetting';

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
        getList: () => dispatch(getList())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AlarmSettingContainer);