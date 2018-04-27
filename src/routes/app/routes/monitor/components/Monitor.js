import React from 'react';
import RangeDatePicker from 'SRC_PATH/components/RangeDatePicker';
import LineChart from './LineCard';
import { List } from 'antd';
import moment from 'moment';

const ranges = [{
    text: '近三小时',
    times: [moment().subtract(3, 'h'), moment()]
}, {
    text: '近六小时',
    times: [moment().subtract(6, 'h'), moment()]
}, {
    text: '近一天',
    times: [moment().subtract(1, 'd'), moment()]
}, {
    text: '近三天',
    times: [moment().subtract(3, 'd'), moment()]
}, {
    text: '近一周',
    times: [moment().subtract(7, 'd'), moment()]
}, {
    text: '近一个月',
    times: [moment().subtract(1, 'M'), moment()]
}];

class Monitor extends React.Component {
    state = {
        currentTime: ranges[0],
        data: { axis: [], data: [] }
    }

    async componentDidMount() {
        const { getList } = this.props;
        const data = await getList();
        this.setState({
            data: data
        });
    }

    changeDate = (times) => {
        this.setState({
            currentTime: {
                times: times
            }
        });
        console.log(new Date(times[0]).toLocaleString(), new Date(times[1]).toLocaleString());
    }

    changeRange = (e, range) => {
        e.preventDefault();
        this.setState({ currentTime: range });
    }

    render() {
        // const { match } = this.props;
        const data = [1, 2, 3, 4];

        return <div className="monitor">
            <h4 className="monitor-title">标题显示</h4>
            <div className="monitor-head">
                {ranges.map(range => <a
                    key={range.text}
                    className={`monitor-time ${this.state.currentTime.text === range.text ? 'monitor-active' : ''}`}
                    href="#"
                    onClick={(e) => { this.changeRange(e, range); }}
                >{range.text}</a>)}

                <RangeDatePicker value={this.state.currentTime.times} onChange={this.changeDate} />
            </div>

            {/* hostKey: {match.params.hostKey} */}
            <List
                grid={{ gutter: 24, column: 2 }}
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