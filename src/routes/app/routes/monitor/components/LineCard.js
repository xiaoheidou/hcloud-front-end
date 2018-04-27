import React from 'react';
import { Line } from 'SRC_PATH/components/Echarts';
import { Card, Icon, Modal } from 'antd';

function Title(props) {
    return <div>{props.title}<small>{props.subtitle}</small></div>;
}

class LineCard extends React.Component {
    state = { visible: false }

    toggleModal = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            visible: !prevState.visible
        }), (a) => {
            // console.log(a);
            // console.log(this.chartInstance);
        });
    }

    onInstance = (instance) => {
        console.log(instance);
        this.chartInstance = instance;
    }

    render() {
        const { data } = this.props;

        return <React.Fragment>
            <Card
                className="chart-panel"
                title={<Title title={'CPU'} subtitle={'副标题'} />}
                extra={<Icon type="eye" onClick={this.toggleModal} />}
            >
                <Line data={data} />
            </Card>
            <Modal
                className="chart-preview-modal"
                width="100%"
                title={<Title title={'CPU'} subtitle={'副标题'} />}
                visible={this.state.visible}
                footer={null}
                onCancel={this.toggleModal}
            >
                <Line data={data} onInstance={this.onInstance} />
            </Modal>
        </React.Fragment>;
    }
}

export default LineCard;