import React from 'react';
import RangeDatePicker from 'SRC_PATH/components/RangeDatePicker';
import LineChart from './LineCard';
import { List } from 'antd';

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
        // const { match } = this.props;

        const data = [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
        ];

        return <div className="monitor">
            <RangeDatePicker onChange={this.changeDate} />
            <h3 className="monitor-title"></h3>
            {/* hostKey: {match.params.hostKey} */}
            <List
                grid={{ gutter: 8, column: 2 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <LineChart data={this.state.data} />
                    </List.Item>
                )}
            />
        </div>;
    }
}

export default Monitor;