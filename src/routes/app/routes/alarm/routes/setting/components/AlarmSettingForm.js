import React from 'react';
import { Form, Select, Row, Col, Input, Button, Card, Icon } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

class AlarmSettingForm extends React.Component {
    state = {
        services: [],
        users: [],
        data: {
            // service: '',
            host_id: [],
            rules: [],
            contact_groups: [],
            notify_type: []
        },
        rules: []
    }

    componentWillMount() {
        if (this.props.currentAlert) {
            this.setState({
                data: this.props.currentAlert
            });
        }
    }

    // 切换服务类型
    changeService = (v) => {
        this.setState(prevState => {
            prevState.data.service = v;
            return prevState;
        });
    }

    // 获取指定类型下实例列表和告警项列表
    getInstancesAndItems = (service) => {
        const currentService = this.state.services.filter(dt => dt.service === service)[0] || {};
        return {
            instances: currentService.instances || [],
            items: currentService.items || []
        };
    }

    // 添加规则
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

    // 保存
    save = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            } else {
                console.log(err);
            }
        });
    }

    async componentDidMount() {
        const { getInstanceList, getUserList } = this.props;
        const services = await getInstanceList();
        const users = await getUserList();
        this.setState({
            services,
            users
        });
    }

    render() {
        const { toggleForm } = this.props;
        const { rules, users, services, data } = this.state;
        const { getFieldDecorator } = this.props.form;

        const CurrentInstancesAndItems = data.service ? this.getInstancesAndItems(data.service) : {
            instances: [],
            items: []
        };
        const { instances, items } = CurrentInstancesAndItems;

        return <div className="alarm-setting-form">
            <div className="alarm-setting-back">
                <a onClick={toggleForm}> <Icon type="double-left" />返回 </a>
            </div>
            <div className="alarm-setting-handle">
                <Button type="primary" onClick={this.save}>保存</Button>
            </div>
            <Form>
                <Card title="选择告警实例">
                    <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 10 }}
                        label="实例类型"
                    >
                        <Select
                            placeholder="服务类型"
                            onChange={this.changeService}
                            defaultValue={data.service}
                        >
                            {services.map(dt => <Option key={dt.service} >{dt.service}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 10 }}
                        label="实例"
                    >
                        <Select
                            placeholder="实例"
                            mode="multiple"
                        >
                            {instances.map(instance => <Option key={instance.id} >{instance.name}</Option>)}
                        </Select>
                    </FormItem>
                </Card>

                {/* 规则列表 */}
                <Card title="设置监控规则">
                    {rules.map((rule, index) => {
                        return <Row gutter={10} key={`rule${index}`}>
                            <Col span={4}>
                                <FormItem>
                                    {getFieldDecorator(`item-${index}`, {
                                        rules: [{
                                            required: true, message: '不能为空!'
                                        }]
                                    })(
                                        <Select
                                            placeholder="监控项"
                                        >
                                            {items.map(item => <Option key={item} >{item}</Option>)}
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={4}>
                                <Select
                                    placeholder="计算方式"
                                >
                                    {env.alarm.rule.computeModes.map(mode => <Option key={mode.value} >{mode.name}</Option>)}
                                </Select>
                            </Col>
                            <Col span={4}>
                                <Input placeholder="阈值" />
                            </Col>
                            <Col span={4}>
                                <Select
                                    placeholder="统计周期"
                                >
                                    {env.alarm.rule.periods.map(period => <Option key={period.value} >{period.name}</Option>)}
                                </Select>
                            </Col>
                            <Col span={4}>
                                <Icon type="close" />
                            </Col>
                        </Row>;
                    })}
                    <Button type="primary" onClick={this.addRule}>添加规则</Button>
                </Card>

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
                                {env.alarm.rule.notifyTypes.map(n => <Option key={n.value} >{n.name}</Option>)}
                            </Select>
                        </Col>
                    </Row>
                </Card>
            </Form>
        </div >;
    }
}

export default Form.create()(AlarmSettingForm);