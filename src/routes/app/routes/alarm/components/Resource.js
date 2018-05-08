import React from 'react';
import DataTables from 'SRC_PATH/components/DataTables';
import { Link } from 'react-router-dom';

import { Modal, Button } from 'antd';
const confirm = Modal.confirm;


class Resource extends React.Component {
   
    render() {

        function showConfirm() {
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
          
          function showDeleteConfirm() {
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


        let testData = [
            {
                'status': '0',
                'statistical_period': '5s',
                'monitor_items': 'memory_usage', 
                'update_time': '2018-04-09 14:38:44',
                'service': 'node', 
                'alert_rules_id': 'a68df93c-3bc0-11e8-a9e5-fa163ea5419d', 
                'contact_groups': '', 
                'compute_mode': '>', 
                'port': '3306', 
                'statistical_approach': 'max',
                'create_time': '2018-04-09 14:38:44',
                'silence_time': '0',
                'host_id': '114.67.76.75', 
                'notify_type': '0', 
                'threshold_value': '1'
            }, 
            {
                'status': '0',
                'statistical_period': '5s',
                'monitor_items': 'memory_usage', 
                'update_time': '2018-04-09 14:38:44',
                'service': 'node', 
                'alert_rules_id': 'a68df93c-3bc0-11e8-a9e5-fa163ea5419d', 
                'contact_groups': '', 
                'compute_mode': '>', 
                'port': '3306', 
                'statistical_approach': 'max',
                'create_time': '2018-04-09 14:38:44',
                'silence_time': '0',
                'host_id': '114.67.76.75', 
                'notify_type': '0', 
                'threshold_value': '1'
            }
        ];
        for (let i = 0; i < 5; i++) {
            testData = testData.concat(testData);
        }

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
            },{
                'field':'',
                'alias':'操作',
                render: (text, data) => {
                    return <div>
                    <Button onClick={showConfirm}>
                      Confirm
                    </Button>
                    <Button onClick={showDeleteConfirm} type="dashed">
                      Delete
                    </Button>
                  </div>;
                }
            }
        ];


        return <div className="resource">
            <DataTables data={testData} heads={heads} />
        </div>;
    }
}

export default Resource;