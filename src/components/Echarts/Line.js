import React, { Component } from 'react';
import Echarts from './Echarts';
import extend from 'SRC_PATH/utils/extend';

class Line extends Component {
    getOption = () => {
        const { data = { axis: [], data: [] } } = this.props;

        // 默认设置
        let defaultOption = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: []
        };

        defaultOption.xAxis.data = data.axis;
        const series = data.data.map(dt => {
            return extend(true, {
                type: 'line',
                smooth: true
            }, dt);
        });
        defaultOption.series = series;

        return defaultOption;
    }

    render() {
        const { onInstance } = this.props;

        return <Echarts option={this.getOption()} onInstance={onInstance} />;
    }
}

export default Line;