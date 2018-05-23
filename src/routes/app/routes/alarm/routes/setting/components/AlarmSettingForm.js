import React from 'react';
import { Form, Select, Row, Col, Input, Button, Card, Icon } from 'antd';
import extend from 'SRC_PATH/utils/extend';
const Option = Select.Option;
const FormItem = Form.Item;

class AlarmSettingForm extends React.Component {
    state = {
        services: [],
        users: [],
        data: {
            // service: undefined,
            host_id: [],
            rules: [],
            contact_groups: [],
            notify_type: []
        }
    }

    componentWillMount() {
        if (this.props.currentAlert) {
            this.setState({
                data: this.props.currentAlert
            });
            this.currentAlert = extend(true, {}, this.props.currentAlert);
        }
    }

    // 切换服务类型
    changeService = async (v) => {
        const { getDefaultRule } = this.props;
        const rules = await getDefaultRule(v);
        console.log(rules);
    }

    // 获取监控规则中被修改的部分 0-修改 1-禁用 2-启用
    diffRules = (newRules, oldRules) => {
        let diffRules = [];
        newRules.forEach((newRule, i) => {
            const oldRule = oldRules[i];
            let rule = {
                ...newRule
            };
            if (newRule.compute_mode != oldRule.compute_mode || newRule.threshold_value != oldRule.threshold_value) {
                rule.silence = [0];
            }
            if (newRule.silence !== oldRule.silence) {
                rule.silence = rule.silence instanceof Array ? rule.silence : [];
                rule.silence.push(newRule.silence === false ? 1 : 2);
            }
            if (rule.silence instanceof Array) {
                diffRules.push(rule);
            }
        });
        return diffRules;
    }

    // 保存
    save = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                this.setState(prevState => {
                    let data = {
                        name: values.name,
                        service: values.service,
                        host_id: values.instances,
                        contact_groups: values.contactGroups,
                        notify_type: values.notifyType,
                        rules: []
                    };
                    const ruleLength = Object.keys(values).filter(v => {
                        return v.indexOf('item-') > -1;
                    }).length;
                    for (let i = 0; i < ruleLength; i++) {
                        data.rules.push({
                            monitor_items: values[`item-${i}`],
                            compute_mode: values[`compute-${i}`],
                            threshold_value: values[`threshold-${i}`] - 0,
                            silence: prevState.data.rules[i].silence
                        });
                    }
                    return {
                        data: {
                            ...prevState.data,
                            ...data
                        }
                    };
                }, () => {
                    console.log(this.state.data.rules);
                    console.log(this.currentAlert.rules);
                    console.log(this.diffRules(this.state.data.rules, this.currentAlert.rules));
                });

            } else {
                console.log(err);
            }
        });
    }

    // 获取指定类型下实例列表和告警项列表
    getInstances = (service) => {
        const currentService = this.state.services.filter(dt => dt.service === service)[0] || {};
        return currentService.instances || [];
    }

    changeStatus = (index, status) => {
        this.setState(prevState => {
            prevState.data.rules[index].silence = status;
            return prevState;
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
        const { users, services, data } = this.state;
        const { getFieldDecorator } = this.props.form;

        const instances = this.getInstances(data.service);

        return <div className="alarm-setting-form">
            <div className="alarm-setting-back">
                <a onClick={toggleForm}> <Icon type="double-left" />返回 </a>
            </div>
            <div className="alarm-setting-handle">
                <Button type="primary" onClick={this.save}>保存</Button>
            </div>
            <Form>
                <Card title="告警模板">
                    <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 10 }}
                        label="名称"
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '不能为空!'
                            }],
                            initialValue: data.name
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 10 }}
                        label="实例类型"
                    >
                        {getFieldDecorator('service', {
                            rules: [{
                                required: true, message: '不能为空!'
                            }],
                            initialValue: data.service
                        })(
                            <Select
                                placeholder="服务类型"
                                onChange={this.changeService}
                            >
                                {services.map(dt => <Option key={dt.service} >{dt.service}</Option>)}
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 10 }}
                        label="实例"
                    >
                        {getFieldDecorator('instances', {
                            rules: [{
                                required: true, message: '不能为空!'
                            }],
                            initialValue: data.host_id
                        })(
                            <Select
                                placeholder="实例"
                                mode="multiple"
                            >
                                {instances.map(instance => <Option key={instance.id} >{instance.name}</Option>)}
                            </Select>
                        )}
                    </FormItem>
                </Card>

                {/* 规则列表 */}
                <Card title="设置监控规则">
                    {data.rules.map((rule, index) => {
                        return <Row gutter={10} key={`rule${index}`} className="rules-item">
                            <Col span={4}>
                                {getFieldDecorator(`item-${index}`, {
                                    rules: [{
                                        required: true, message: '不能为空!'
                                    }],
                                    initialValue: rule.monitor_items
                                })(
                                    <Input disabled />
                                )}
                            </Col>
                            <Col span={4}>
                                {getFieldDecorator(`compute-${index}`, {
                                    rules: [{
                                        required: true, message: '不能为空!'
                                    }],
                                    initialValue: rule.compute_mode
                                })(
                                    <Select
                                        placeholder="计算方式"
                                    >
                                        {env.alarm.rule.computeModes.map(mode => <Option key={mode.value}>{mode.name}</Option>)}
                                    </Select>
                                )}
                            </Col>
                            <Col span={4}>
                                {getFieldDecorator(`threshold-${index}`, {
                                    rules: [{
                                        required: true, message: '不能为空!'
                                    }],
                                    initialValue: rule.threshold_value
                                })(
                                    <Input placeholder="阈值" />
                                )}
                            </Col>
                            <Col span={4}>
                                <a href="javascript:void(0);">
                                    {
                                        !rule.silence
                                            ? <Icon type="play-circle-o" onClick={() => { this.changeStatus(index, true); }} />
                                            : <Icon type="pause-circle-o" onClick={() => { this.changeStatus(index, false); }} />
                                    }
                                </a>
                            </Col>
                        </Row>;
                    })}
                </Card>

                <Card title="告警接收人">
                    <Row gutter={10} >
                        <Col span={6}>
                            {getFieldDecorator('contactGroups', {
                                rules: [{
                                    required: true, message: '不能为空!'
                                }],
                                initialValue: data.contact_groups
                            })(
                                <Select
                                    mode="multiple"
                                    placeholder="接收人"
                                >
                                    {users.map(user => <Option key={user.email} >{user.name}</Option>)}
                                </Select>
                            )}
                        </Col>
                        <Col span={6}>
                            {getFieldDecorator('notifyType', {
                                rules: [{
                                    required: true, message: '不能为空!'
                                }],
                                initialValue: data.notify_type
                                // initialValue: env.alarm.rule.notifyTypes.reduce((arr, notifyType) => {
                                //     if (data.notify_type.indexOf(notifyType.value) > -1) {
                                //         arr.push(notifyType.name);
                                //     }
                                //     return arr;
                                // }, [])
                            })(
                                <Select
                                    mode="multiple"
                                    placeholder="告警类型"
                                >
                                    {env.alarm.rule.notifyTypes.map(n => <Option key={n.value} >{n.name}</Option>)}
                                </Select>
                            )}
                        </Col>
                    </Row>
                </Card>
            </Form>
        </div >;
    }
}

export default Form.create({})(AlarmSettingForm);