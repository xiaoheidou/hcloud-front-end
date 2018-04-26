import React from 'react';
import { Line } from 'SRC_PATH/components/Echarts';

class Monitor extends React.Component {
    state = {}

    async componentDidMount() {
        const { getList } = this.props;
        const data = await getList();
        this.setState({
            data: data
        });
    }

    render() {
        const { match } = this.props;

        return <div className="monitor">
            <h3 className="monitor-title"></h3>
            hostKey: {match.params.hostKey}

            <div style={{ width: 400, height: 300 }}>
                <Line data={this.state.data} />
            </div>
        </div>;
    }
}

export default Monitor;