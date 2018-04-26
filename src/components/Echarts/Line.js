import React, { Component } from 'react';
import Echarts from './Echarts';

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
            dt.type = 'line';
            return dt;
        });
        defaultOption.series = series;

        return defaultOption;
    }

    render() {
        return <Echarts option={this.getOption()} />;
    }
}

export default Line;