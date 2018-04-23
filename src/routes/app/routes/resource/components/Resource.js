import React from 'react';
import { Table, Tag, Icon } from 'antd';

class Resource extends React.Component {
    componentDidMount() {
        const { getList } = this.props;
        getList();
    }

    render() {
        const { list } = this.props.resource;
        const dataSource = list.map((item, i) => {
            item.key = i;
            return item;
        });

        const columns = [{
            title: '名称',
            dataIndex: 'name',
            render: text => text || '未定义'
        }, {
            title: '描述',
            dataIndex: 'description',
        }, {
            title: '内网IP地址',
            dataIndex: 'privateip',
        }, {
            title: '操作系统',
            dataIndex: 'os_type',
        }, {
            title: '监控状态',
            dataIndex: 'monitor_status',
        }, {
            title: 'cpu物理核数',
            dataIndex: 'cpu_physical',
        }, {
            title: 'cpu核数',
            dataIndex: 'cpu_process',
        }, {
            title: '内存总数',
            dataIndex: 'memory_total',
        }, {
            title: '硬盘空间',
            dataIndex: 'disk_usage',
            render: (text) => text.split(',').map(disk => <Tag key={disk}>{disk}</Tag>)
        }, {
            title: '操作',
            dataIndex: 'action',
            render: () => <Icon type="edit" />
        }];

        return <div className="resource">
            <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>;
    }
}

export default Resource;