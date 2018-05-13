import React from 'react';
import List from './AlarmSettingList';
import Form from './AlarmSettingForm';

class AlarmSetting extends React.Component {
    state = {
        isShowForm: false
    }

    toggleForm = () => {
        this.setState((prevState) => ({
            isShowForm: !prevState.isShowForm
        }));
    }

    render() {
        const props = {
            toggleForm: this.toggleForm,
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