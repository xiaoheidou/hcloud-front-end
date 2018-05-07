/*
 * @Author: harry.lang 
 * @Date: 2018-04-23 17:58:07 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-27 22:21:24
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu

const Sider = Layout.Sider;

class AppSider extends React.Component {
    render() {
        const { collapsed } = this.props;

        return <Sider
            className="app-sider"
            collapsed={collapsed}
        >
            <div className="app-logo">{!collapsed ? 'HCLOUD' : 'H'}</div>
            <Menu theme="dark" mode="inline" defaultOpenKeys={['sub1']} defaultSelectedKeys={['1']}>
                {/* <Menu.Item key="1">
                    <Link to="/app">
                        <Icon type="profile" />
                        <span>资源管理</span>
                    </Link>
                </Menu.Item> */}
                <SubMenu key="sub1" title={<span><Icon type="profile" />资源管理</span>}>
                    <Menu.Item key="1">
                        <Icon type="profile" />
                        <span>资源列表</span>
                    </Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>;
    }
}

export default AppSider;
