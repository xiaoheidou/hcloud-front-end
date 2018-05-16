import React from 'react';
import { Line } from 'SRC_PATH/components/Echarts';
import { Card, Icon, Modal,List } from 'antd';

class LineCard extends React.Component {
    state = { visible: false }

  
    toggleModal = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }

    render() {
        const { data } = this.props;
        const { title } = this.props;
        return <React.Fragment>
            <List
                grid={{ gutter: 24, column: 2 }}
                dataSource={title}
                renderItem={item => (
                    <List.Item>
                        <Card
                            className="chart-panel"
                            title={<LineCardTitle title={item.nick_name} subtitle={""} />}
                            extra={<Icon type="scan" onClick={this.toggleModal} />}
                        >
                            <Line data={data} />
                        </Card>
                        <Modal
                            className="chart-preview-modal"
                            width="100%"
                            title={<LineCardTitle title={item.nick_name} subtitle={"hehe"} />}
                            visible={this.state.visible}
                            footer={null}
                            onCancel={this.toggleModal}
                            destroyOnClose={true}
                        >
                            <Line data={data} />
                        </Modal>

                    </List.Item>
                )}
            />

            
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

