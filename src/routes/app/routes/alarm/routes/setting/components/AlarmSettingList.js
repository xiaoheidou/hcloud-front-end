import React from 'react';
import DataTables from 'SRC_PATH/components/DataTables';
import { Link } from 'react-router-dom';

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

    showDeleteConfirm = () => {
        confirm({
            title: '你确定要删除这则报警吗?',
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    showConfirm = () => {
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    render() {

        const { toggleForm } = this.props;

        const heads = [
            {
                'field': 'host_id',
                'alias': '主机地址',
                render: (text, data) => {
                    return <Link to={`/app/alarm/${data.host_key}`}>{text}</Link>;
                }
            },
            {
                'field': 'port',
                'alias': '实例端口'
            },
            {
                'field': 'service',
                'alias': '监控服务类型'
            },
            {
                'field': 'monitor_items',
                'alias': '监控项'
            },
            {
                'field': 'statistical_period',
                'alias': '统计周期'
            },
            {
                'field': 'compute_mode',
                'alias': '计算方式'
            },
            {
                'field': 'threshold_value',
                'alias': '阈值',
            }, {
                'field': '',
                'alias': '操作',
                render: (text, data) => {
                    return <div>
                        <Button onClick={this.showConfirm}>
                            Confirm
                        </Button>
                        <Button onClick={this.showDeleteConfirm} type="dashed">
                            Delete
                        </Button>
                    </div>;
                }
            }
        ];

        return <React.Fragment>
            <Button type="primary" onClick={toggleForm}>添加告警</Button>
            <DataTables data={this.state.list} heads={heads} />
        </React.Fragment>;
    }
}

export default AlarmSettingList;