import React from 'react';
import { Line } from 'SRC_PATH/components/Echarts';
import { Card, Icon, Modal } from 'antd';

class LineCard extends React.Component {
    state = {
        visible: false,
        data: { axis: [], data: [] }
    }


    toggleModal = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    timeout = null

    componentDidMount() {
        const { getIndexData, title, times, category, categoryKey } = this.props;
        const interval = parseInt(title.interval);
        console.log(category, categoryKey);

        const get = () => {
            getIndexData(category, categoryKey, {
                start: times[0].valueOf(),
                end: times[1].valueOf(),
                name: title.name,
                query: title.query,
                interval: title.interval
            }).then((data) => {
                this.setState({
                    data: data
                });
                this.timeout = setTimeout(() => {
                    get();
                }, interval * 1000);
            });
        };
        get();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { title } = this.props;
        const { visible, data } = this.state;

        return <React.Fragment>
            <Card
                className="chart-panel"
                title={<LineCardTitle title={title.nick_name} />}
                extra={<Icon type="scan" onClick={this.toggleModal} />}
            >
                <Line data={data} />
            </Card>
            <Modal
                className="chart-preview-modal"
                width="100%"
                title={<LineCardTitle title={title.nick_name} />}
                visible={visible}
                footer={null}
                onCancel={this.toggleModal}
                destroyOnClose={true}
            >
                <Line data={data} />
            </Modal>
        </React.Fragment>;
    }
}

export default LineCard;

/**
 * 卡片标题
 * @param {*} props 
 */
function LineCardTitle(props) {
    return <div>{props.title}<small>{props.subtitle}</small></div>;
}

