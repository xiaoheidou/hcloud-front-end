import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { DatePicker } from 'antd';
import locale from '../config/datePickerLocale';

const RangePicker = DatePicker.RangePicker;

const ranges = {
    '近三小时': [moment().subtract(3, 'h'), moment()],
    '近六小时': [moment().subtract(6, 'h'), moment()],
    '近一天': [moment().subtract(1, 'd'), moment()],
    '近三天': [moment().subtract(3, 'd'), moment()],
    '近一周': [moment().subtract(7, 'd'), moment()],
    '近一个月': [moment().subtract(1, 'M'), moment()],
};

class RangeDatePicker extends Component {
    // 记录当前时间
    current = ranges['近三小时']

    // 获取当前时间
    getCurrent = () => {
        return [this.current[0].valueOf(), this.current[1].valueOf()];
    }

    onChange = (dates, dateStrings) => {
        this.current = dates;
    }

    onOk = (dates, dateStrings) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(this.getCurrent());
        }
    }

    componentDidMount() {
        const { onChange } = this.props;
        if (onChange) {
            onChange(this.getCurrent());
        }
    }

    render() {
        return <RangePicker
            locale={locale}
            defaultValue={this.current}
            ranges={ranges}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            onChange={this.onChange}
            onOk={this.onOk}
        />;
    }
}

export default RangeDatePicker;