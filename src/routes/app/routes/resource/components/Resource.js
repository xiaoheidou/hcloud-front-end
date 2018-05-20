import React from 'react';
import DataTables from 'SRC_PATH/components/DataTables';
import { Link } from 'react-router-dom';

class Resource extends React.Component {
    componentDidMount() {
        const { getList } = this.props;
        const { category } = this.props.match.params;
        getList(category);
    }

    render() {
        const { resource } = this.props;
        const { list } = resource;
        const { category } = this.props.match.params;

        const heads = [
            {
                'field': 'name',
                'alias': '名称',
                render: (text, data) => {
                    return <Link to={`/app/monitor/${category}/${data.key}`}>{text}</Link>;
                }
            },
            {
                'field': 'description',
                'alias': '描述'
            },
            {
                'field': 'privateip',
                'alias': '内网IP地址'
            },
            {
                'field': 'os_type',
                'alias': '操作系统'
            },
            {
                'field': 'monitor_status',
                'alias': '监控状态'
            },
            {
                'field': 'cpu_physical',
                'alias': 'cpu物理核数'
            },
            {
                'field': 'cpu_process',
                'alias': 'cpu核数'
            },
            {
                'field': 'memory_total',
                'alias': '内存总数'
            },
            {
                'field': 'disk_usage',
                'alias': '硬盘空间',
                render: (text, data) => {
                    return text.split(',').map(disk => <div key={disk}>{disk}</div>);
                }
            }
        ];

        // const option = {
        //     columnDefs: [{
        //         targets: 0,
        //         render: function (field, type, row, meta) {
        //             console.log(row, meta);
        //             return '<a href="/app/monitor/' + testData + '">aaa</a>';
        //         }
        //     }]
        // };

        return <div className="resource">
            <DataTables data={list} heads={heads} />
        </div>;
    }
}

export default Resource;