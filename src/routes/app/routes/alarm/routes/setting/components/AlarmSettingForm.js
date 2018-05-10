import React from 'react';
import { Form, Select, Row, Col, Input, Button,Card,Icon } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const data = [{
    service: 'node',
    instance: [{
        id: '127.0.0.1',
        name: '127.0.0.1',
        items: ['memory_usage', 'cpu']
    }]
}];

const computeModes = [
    {
        value: '==',
        name: '等于'
    }, {
        value: '!=',
        name: '不等于'
    }, {
        value: '>',
        name: '大于'
    }, {
        value: '<',
        name: '小于'
    }, {
        value: '>=',
        name: '大于等于'
    }, {
        value: '<=',
        name: '小于等于'
    }
];

const periods = ['10m', '30m', '1h', '3h', '1d'];

const users = [{
    name: 'zhang',
    email: 'zhang@163.com'
}, {
    name: 'ma',
    email: 'ma@163.com'
}];

const notifyTypes = [{
    value: 0,
    name: 'Email'
}, {
    value: 1,
    name: '短信'
}];

class AlarmSettingForm extends React.Component {
    state = {
        instanceList: [],
        rules: [],
        items: []
    }

    // 切换服务类型
    changeService = (v) => {
        const currentService = data.filter(dt => dt.service === v)[0];
        this.setState({
            instanceList: currentService.instance
        });
    }

    // 改变实例
    changeInstance = (v) => {
        const currentInstance = this.state.instanceList.filter(instance => instance.id === v)[0];
        this.setState({
            items: currentInstance.items
        });
    }

    // 添加实例
    addRule = () => {
        this.setState(prevState => {
            prevState.rules.push({
                monitor_items: '',
                compute_mode: '',
                threshold_value: '',
                statistical_period: ''
            });
            return prevState;
        });
    }

    render() {
        const { toggleForm } = this.props;
        const { instanceList, rules, items } = this.state;

        return <div className="alarm-setting-form">
            <div className="alarm-setting-back">
                <a onClick={toggleForm}> <Icon type="double-left" />返回 </a>
            </div>
            <div className="alarm-setting-handle">
                <Button type="primary">保存</Button>
            </div>
            <Form>
                <FormItem>
                    <Card title="选择告警实例">
                        <Row gutter={10} >
                            <Col span={4}>
                                <Select
                                    placeholder="服务类型"
                                    onChange={this.changeService}
                                >
                                    {data.map(dt => <Option key={dt.service} >{dt.service}</Option>)}
                                </Select>
                            </Col>
                            <Col span={8}>
                                <Select
                                    placeholder="实例"
                                    onChange={this.changeInstance}
                                >
                                    {instanceList.map(instance => <Option key={instance.id} >{instance.name}</Option>)}
                                </Select>
                            </Col>
                        </Row>
                    </Card>
                </FormItem>
                {/* 规则列表 */}
                <FormItem>
                <Card title="设置监控规则">
                    {rules.map((rule, index) => {
                        return <FormItem><Row key={index} gutter={10} >
                            <Col span={4}>
                                <Select
                                    placeholder="监控项"
                                >
                                    {items.map(item => <Option key={item} >{item}</Option>)}
                                </Select>
                            </Col>
                            <Col span={4}>
                                <Select
                                    placeholder="计算方式"
                                >
                                    {computeModes.map(mode => <Option key={mode.value} >{mode.name}</Option>)}
                                </Select>
                            </Col>
                            <Col span={4}>
                                <Input placeholder="阈值" />
                            </Col>
                            <Col span={4}>
                                <Select
                                    placeholder="统计周期"
                                >
                                    {periods.map(period => <Option key={period} >{period}</Option>)}
                                </Select>
                            </Col>
                        </Row></FormItem>;
                    })}
                    <Button type="primary" onClick={this.addRule}>添加规则</Button>
                </Card>
                </FormItem>
                <FormItem>
                <Card title="告警接收人">
                        <Row gutter={10} >
                            <Col span={6}>
                                <Select
                                    mode="multiple"
                                    placeholder="接收人"
                                >
                                    {users.map(user => <Option key={user.email} >{user.name}</Option>)}
                                </Select>
                            </Col>
                            <Col span={6}>
                                <Select
                                    mode="multiple"
                                    placeholder="告警类型"
                                >
                                    {notifyTypes.map(n => <Option key={n.value} >{n.name}</Option>)}
                                </Select>
                            </Col>
                        </Row>
                    </Card>
                    </FormItem>
            </Form>
        </div>;
    }
}

export default AlarmSettingForm;