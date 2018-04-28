import React from 'react';
import DataTables from 'SRC_PATH/components/DataTables';
import { Link } from 'react-router-dom';

class Resource extends React.Component {
    componentDidMount() {
        // const { getList } = this.props;
        // getList();
    }

    render() {
        // const { resource } = this.props;
        // const { list } = resource;

        let testData = [
            {
                'cpu_physical': '1',
                'cpu_process': '2',
                'create_time': '2018-04-22 22:00:37',
                'description': 'unlabeled',
                'disk_usage': 'vda1:8202641408',
                'host_key': '257aa4a4-4632-11e8-abe3-fa163ea5419d',
                'memory_total': '8202641408',
                'monitor_status': 'running',
                'name': 'title',
                'os_type': 'linux',
                'privateip': '192.168.0.32',
                'project_id': '0',
                'remark': '',
                'state': 'online',
                'update_time': '2018-04-22 22:00:37',
                'user_id': '1'
            },
            {
                'cpu_physical': '2',
                'cpu_process': '4',
                'create_time': '2018-04-22 22:02:20',
                'description': 'unlabeled',
                'disk_usage': 'vda1:32200720384,vdb:105554829312',
                'host_key': '847aa4a4-4632-11e8-abe3-fa163ea5419d',
                'memory_total': '16658059264',
                'monitor_status': 'running',
                'name': 'title',
                'os_type': 'linux',
                'privateip': '192.168.0.92',
                'project_id': '0',
                'remark': 'title',
                'state': 'online',
                'update_time': '2018-04-22 22:02:20',
                'user_id': '1'
            }
        ];
        for (let i = 0; i < 5; i++) {
            testData = testData.concat(testData);
        }

        const heads = [
            {
                'field': 'name',
                'alias': '名称',
                render: (text, data) => {
                    return <Link to={`/app/monitor/${data.host_key}`}>{text}</Link>;
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
            <DataTables data={testData} heads={heads} />
        </div>;
    }
}

export default Resource;