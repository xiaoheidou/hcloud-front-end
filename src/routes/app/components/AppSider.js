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
            <Menu theme="dark" mode="inline" defaultOpenKeys={['sub1']} defaultSelectedKeys={['11']}>
                {/* <Menu.Item key="1">
                    <Link to="/app">
                        <Icon type="profile" />
                        <span>资源管理</span>
                    </Link>
                </Menu.Item> */}
                <SubMenu key="sub0" title={<span><Icon type="profile" />个性看板</span>}>
                    <Menu.Item key="0">个性看板</Menu.Item>
                </SubMenu>
                <SubMenu key="sub1" title={<span><Icon type="profile" />资源管理</span>}>
                    <Menu.Item key="11">
                        主机资源
                    </Menu.Item>
                    <Menu.Item key="12">
                        nginx/apache
                    </Menu.Item>
                    <Menu.Item key="13">tomcat</Menu.Item>
                    <Menu.Item key="14">MySQL</Menu.Item>
                    <Menu.Item key="15">Redis/memcache</Menu.Item>
                    <Menu.Item key="16">Oracle</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="profile" />报警管理</span>}>
                    <Menu.Item key="21">报警设置</Menu.Item>
                    <Menu.Item key="22">历史报警</Menu.Item>
                    <Menu.Item key="23">报警分析</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="profile" />分析报告</span>}>
                    <Menu.Item key="31">成本分析</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="profile" />用户管理</span>}>
                    <Menu.Item key="31">用户管理</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>;
    }
}

export default AppSider;
