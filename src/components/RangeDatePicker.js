import React, { Component } from 'react';
import 'moment/locale/zh-cn';
import { DatePicker } from 'antd';
import locale from '../config/datePickerLocale';

const RangePicker = DatePicker.RangePicker;

class RangeDatePicker extends Component {
    state = { value: [] }

    onChange = (dates, dateStrings) => {
        this.setState({
            value: dates
        });
        const { onChange } = this.props;
        if (onChange) {
            onChange(dates);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    }

    render() {
        return <RangePicker
            locale={locale}
            value={this.state.value}
            format="YYYY-MM-DD HH:mm:ss"
            onChange={this.onChange}
        />;
    }
}

export default RangeDatePicker;