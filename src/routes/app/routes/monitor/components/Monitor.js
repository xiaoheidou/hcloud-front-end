import React from 'react';
import RangeDatePicker from 'SRC_PATH/components/RangeDatePicker';
import LineChart from './LineCard';

class Monitor extends React.Component {
    state = {}

    async componentDidMount() {
        const { getList } = this.props;
        const data = await getList();
        this.setState({
            data: data
        });
    }

    changeDate = (times) => {
        console.log(new Date(times[0]).toLocaleString(), new Date(times[1]).toLocaleString());
    }

    render() {
        const { match } = this.props;

        return <div className="monitor">
            <RangeDatePicker onChange={this.changeDate} />
            <h3 className="monitor-title"></h3>
            hostKey: {match.params.hostKey}

            <div style={{ width: 400, height: 300 }}>
                <LineChart data={this.state.data} />
            </div>
        </div>;
    }
}

export default Monitor;