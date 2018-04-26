import React, { Component } from 'react';
import extend from 'SRC_PATH/utils/extend';

// 默认设置
const defaultOption = {};
const defaultTheme = {}; //默认主题

class Echarts extends Component {
    // 初始化实例
    initInstance = () => {
        return import(/* webpackChunkName: 'echarts' */'echarts').then(echarts => {
            const { theme = {}, addition = {}/* 附加参数 */ } = this.props;
            // 初始化区域坐标
            const dom = this.element;

            this.chartInstance = echarts.init(dom, extend(true, {}, defaultTheme, theme), addition);

            return this.chartInstance;
        });
    }

    setOption() {
        const { option } = this.props;
        this.chartInstance.setOption(extend(true, {}, defaultOption, option));
    }

    componentDidUpdate() {
        if (!this.chartInstance) {
            this.initInstance().then((a) => {
                this.setOption();
            });
        } else {
            this.setOption();
        }
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