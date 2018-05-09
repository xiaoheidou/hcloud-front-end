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
        const { getList } = this.props;

        return <div className="alarm-setting" >
            {this.state.isShowForm
                ? <Form toggleForm={this.toggleForm} />
                : <List
                    getList={getList}
                    toggleForm={this.toggleForm}
                />
            }
        </div>;
    }
}

export default AlarmSetting;