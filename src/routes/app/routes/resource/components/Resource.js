import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

class Resource extends React.Component {
    componentDidMount() {
        const { getList } = this.props;
        getList();
    }

    render() {
        const { resource } = this.props;
        const { list } = resource;
        const dataSource = list.map((item, i) => {
            item.key = i;
            return item;
        });

        const columns = [{
            title: '名称',
            width: '10%',
            dataIndex: 'name',
            render: (text, row, index) => <Link to={`/app/monitor/${row.host_key}`}>{text || '未定义'}</Link>
        }, {
            title: '描述',
            width: '10%',
            dataIndex: 'description',
        }, {
            title: '内网IP地址',
            width: '14%',
            dataIndex: 'privateip',
        }, {
            title: '操作系统',
            width: '10%',
            dataIndex: 'os_type',
        }, {
            title: '监控状态',
            width: '10%',
            dataIndex: 'monitor_status',
        }, {
            title: 'cpu物理核数',
            width: '10%',
            dataIndex: 'cpu_physical',
        }, {
            title: 'cpu核数',
            width: '10%',
            dataIndex: 'cpu_process',
        }, {
            title: '内存总数',
            width: '10%',
            dataIndex: 'memory_total',
        }, {
            title: '硬盘空间',
            width: '16%',
            dataIndex: 'disk_usage',
            render: (text) => text.split(',').map(disk => <div key={disk}>{disk}</div>)
        }/* , {
            title: '操作',
            width: '5%',
            dataIndex: 'action',
            render: () => <a href="#"><Icon type="edit" /></a>
        } */];

        return <div className="resource">
            <Table dataSource={dataSource} bordered columns={columns} pagination={false} />
        </div>;
    }
}

export default Resource;