import React, { Component } from 'react';
import extend from 'SRC_PATH/utils/extend';

// 默认设置
const defaultOption = {
    grid: {
        letf: 20,
        right: 20,
        top: 20,
        bottom: 30,
        // containLabel: true
    }
};

//默认主题
const commonAxis = {
    splitLine: {
        lineStyle: {
            type: 'dashed',
            color: '#eeeeee'
        }
    },
    axisLabel: {
        textStyle: {
            color: '#9eacb4'
        }
    },
};
const defaultTheme = {
    color: ['#fec588', '#b6cffc', '#1890FF', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864'],
    // color: ['#FACC14', '#2FC25B', '#1890FF', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864'],
    valueAxis: extend({}, commonAxis, {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }),
    categoryAxis: extend({}, commonAxis, {
        axisLine: {
            lineStyle: {
                color: '#cccccc'
            }
        },
        axisTick: {
            color: '#5d5d5d'
        },
    })
};

class Echarts extends Component {
    // 初始化实例
    initInstance = () => {
        return import(/* webpackChunkName: 'echarts' */'echarts').then(echarts => {
            const { theme = {}, addition = {}/* 附加参数 */, onInstance } = this.props;
            // 初始化区域坐标
            const dom = this.element;

            this.chartInstance = echarts.init(dom, extend(true, {}, defaultTheme, theme), addition);

            if (typeof onInstance === 'function') {
                onInstance(this.chartInstance);
            }
            return this.chartInstance;
        });
    }

    setOption() {
        const { option } = this.props;
        this.chartInstance.setOption(extend(true, {}, defaultOption, option));
        setTimeout(() => {
            this.chartInstance.resize();
        }, 0);
    }

    draw = () => {
        if (!this.chartInstance) {
            this.initInstance().then((a) => {
                this.setOption();
            });
        } else {
            this.setOption();
        }
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate(prevProps, prevState) {
        this.draw();
    }

    componentWillUnmount() {
        // 组件卸载后销毁实例
        if (this.chartInstance) {
            this.chartInstance.dispose();
        }
    }

    render() {
        return <div
            ref={(elem) => { this.element = elem; }}
            style={{
                width: '100%',
                height: '100%'
            }}>
        </div>;
    }
}

export default Echarts;