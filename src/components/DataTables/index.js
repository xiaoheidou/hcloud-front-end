import React from 'react';

import 'datatables.net';
// import 'datatables.net-dt/css/jquery.datatables.css';
import 'datatables.net-buttons';
// import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';

import './assets/style.less';

class DataTables extends React.Component {
    init = () => {
        const { data = [], option = {} } = this.props;
        if (data) {
            const elem = $(this.element);

            const oTable = elem.find('table').DataTable($.extend(true, {
                'language': {
                    'sProcessing': '处理中...',
                    'sLengthMenu': '显示 _MENU_ 项结果',
                    'sZeroRecords': '没有匹配结果',
                    'sInfo': '显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项',
                    'sInfoEmpty': '显示第 0 至 0 项结果，共 0 项',
                    'sInfoFiltered': '(由 _MAX_ 项结果过滤)',
                    'sInfoPostFix': '',
                    'sSearch': '搜索:',
                    'sUrl': '',
                    'sEmptyTable': '表中数据为空',
                    'sLoadingRecords': '载入中...',
                    'sInfoThousands': ',',
                    'oPaginate': {
                        'sFirst': '首页',
                        'sPrevious': '上页',
                        'sNext': '下页',
                        'sLast': '末页'
                    },
                    'oAria': {
                        'sSortAscending': ': 以升序排列此列',
                        'sSortDescending': ': 以降序排列此列'
                    },
                    'print': '打印'
                },

                buttons: [
                    { extend: 'print', className: 'btn dark btn-outline', text: '打印' },
                    { extend: 'copy', className: 'btn red btn-outline', text: '复制' },
                    { extend: 'pdf', className: 'btn green btn-outline', text: '导出到pdf' },
                    { extend: 'excel', className: 'btn purple btn-outline', text: '导出到excel' },
                    { extend: 'csv', className: 'btn yellow btn-outline', text: '导出到csv' },
                    { extend: 'colvis', className: 'btn dark btn-outline', text: '列设置' }
                ]
            }, option));



            oTable.buttons().container().appendTo(elem.find('.datatables-button'));
        }
    }

    render() {
        const { data = [], heads = [] } = this.props;

        return <div className="datatables" ref={elem => { this.element = elem; }}>
            <div className="datatables-button"></div>
            <table className="table-bordered">
                <thead>
                    <tr>
                        {heads.map(h => {
                            return <th key={h.field}>{h.alias}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map(dt => {
                        return <tr key={dt.id}>
                            {heads.map((h) => {
                                const text = typeof h.render === 'function' ? h.render(dt[h.field], dt) : dt[h.field];
                                return <td key={'td_' + h.field}>{text}</td>;
                            })}
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>;
    }

    componentDidUpdate(prevProps, prevState) {
        this.init();
    }

    componentDidMount() {
        this.init();
    }
}

export default DataTables;