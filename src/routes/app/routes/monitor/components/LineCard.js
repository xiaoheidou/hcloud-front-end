import React from 'react';
import { Line } from 'SRC_PATH/components/Echarts';
import { Card, Icon } from 'antd';

function Title(props) {
    return <div>{props.title}<small>{props.subtitle}</small></div>;
}

class LineCard extends React.Component {
    render() {
        const { data } = this.props;
        return <Card
            title={<Title title={'CPU'} subtitle={'副标题'} />}
            extra={<a href="#"><Icon type="eye" /></a>}
        >
            <div style={{ height: 300 }} >
                <Line data={data} />
            </div>
        </Card>;
    }
}

export default LineCard;