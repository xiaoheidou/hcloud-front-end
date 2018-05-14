import React from 'react';
import DataTables from 'SRC_PATH/components/DataTables';

import { Modal, Button } from 'antd';
const confirm = Modal.confirm;


class AlarmSettingList extends React.Component {
    state = {
        list: []
    }

    async componentDidMount() {
        const { getList } = this.props;
        const result = await getList();
        this.setState({
            list: result
        });
    }

    // 删除
    delete = (id) => {
        const { deleteById } = this.props;

        confirm({
            title: '是否确定删除?',
            content: '',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                deleteById(id).then(result => {
                    console.log('删除', result);
                });
            }
        });
    }

    // 编辑
    edit = (data) => {
        const { toggleForm } = this.props;
        toggleForm(data);
    }

    render() {

        const { toggleForm } = this.props;
        const { list } = this.state;

        const heads = [
            {
                'field': 'service',
                'alias': '监控服务类型'
            },
            {
                'field': 'host_id',
                'alias': '监控实例',
                render: (text, data) => {
                    return <React.Fragment>
                        {text.map(t => <div key={t}>{t}</div>)}
                    </React.Fragment>;
                }
            },
            {
                'field': '',
                'alias': '操作',
                render: (text, data) => {
                    return <div className="alarm-list-handle">
                        <Button onClick={() => { this.edit(data); }} type="primary" size="small">编辑</Button>
                        <Button onClick={() => { this.delete(data.alert_rules_id); }} type="danger" size="small">删除</Button>
                    </div>;
                }
            }
        ];

        return <React.Fragment>
            <Button type="primary" onClick={() => { toggleForm(); }}>添加告警模板</Button>
            <DataTables data={list} heads={heads} />
        </React.Fragment>;
    }
}

export default AlarmSettingList;