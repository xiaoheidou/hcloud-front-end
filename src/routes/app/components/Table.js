/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:31:50 
 * @Last Modified by:   harry.lang 
 * @Last Modified time: 2018-04-17 23:31:50 
 */
import React from 'react';

class Table extends React.Component {
    render() {
        let list = [];
        this.props.list.forEach(function (item, index) {
            list.push(<tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
            </tr>);
        });

        return <table>
            <tbody>{list}</tbody>
        </table>;
    }
}

export default Table;