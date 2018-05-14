import React from 'react';
import List from './AlarmSettingList';
import Form from './AlarmSettingForm';

class AlarmSetting extends React.Component {
    state = {
        isShowForm: false,
        currentAlert: {}
    }

    toggleForm = (data) => {
        this.setState((prevState) => ({
            isShowForm: !prevState.isShowForm,
            currentAlert: data || {
                // service: '',
                host_id: [],
                rules: [],
                contact_groups: [],
                notify_type: []
            }
        }));
    }

    render() {
        const props = {
            toggleForm: this.toggleForm,
            currentAlert: this.state.currentAlert,
            ...this.props
        };

        return <div className="alarm-setting" >
            {this.state.isShowForm
                ? <Form {...props} />
                : <List {...props} />
            }
        </div>;
    }
}

export default AlarmSetting;