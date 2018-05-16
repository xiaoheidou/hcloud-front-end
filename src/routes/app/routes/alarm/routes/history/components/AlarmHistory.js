import React from 'react';
import DataTables from 'SRC_PATH/components/DataTables';

import { Button } from 'antd';


class AlarmHistory extends React.Component {
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


    render() {

        // const { toggleForm } = this.props;
        const { list } = this.state;

        const heads = [
            {
                'field': 'service',
                'alias': '监控服务类型'
            },
            {
                'field': 'host_id',
                'alias': '监控实例',
                // render: (text, data) => {
                //     return <React.Fragment>
                //         {text.map(t => <div key={t}>{t}</div>)}
                //     </React.Fragment>;
                // }
            },
            {
                'field': '',
                'alias': '操作',
                render: (text, data) => {
                    return <div className="alarm-list-handle">
                        <Button type="primary" size="small">编辑</Button>
                        <Button type="danger" size="small">删除</Button>
                    </div>;
                }
            }
        ];

        return <div className="alarm-history">
            <DataTables data={list} heads={heads} />
        </div>;
    }
}

export default AlarmHistory;