/*
 * @Author: harry.lang 
 * @Date: 2018-04-23 17:58:07 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-25 14:21:57
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Sider = Layout.Sider;

class AppSider extends React.Component {
    render() {
        const { collapsed } = this.props;

        return <Sider
            className="app-sider"
            collapsed={collapsed}
        >
            <div className="app-logo">{!collapsed ? 'HCLOUD' : 'H'}</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/app">
                        <Icon type="profile" />
                        <span>资源管理</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>;
    }
}

export default AppSider;
