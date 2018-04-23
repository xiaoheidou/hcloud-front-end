/*
 * @Author: harry.lang 
 * @Date: 2018-04-23 17:58:07 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-23 18:31:18
 */
import React from 'react';
import { Layout, Menu, Icon, Tooltip, Dropdown, Avatar } from 'antd';

const Header = Layout.Header;

class AppHeader extends React.Component {
    render() {
        const { collapsed, toggle } = this.props;

        const menu = <Menu className="app-account-menu" selectedKeys={[]}>
            <Menu.Item>
                <Icon type="setting" />设置
            </Menu.Item>
            {/* <Menu.Divider /> */}
            <Menu.Item key="logout">
                <Icon type="logout" />退出登录
            </Menu.Item>
        </Menu>;

        return <Header className="app-header">
            <Icon
                className="app-trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
            />
            <div className="app-header-right">
                <Tooltip title="帮助文档">
                    <a
                        className="app-action"
                        href="javascript:void(0);"
                    >
                        <Icon type="question-circle-o" />
                    </a>
                </Tooltip>
                <Dropdown overlay={menu}>
                    <span className="app-action app-account">
                        <Avatar className="app-avatar" src="./user_avatars/jenny.png" />
                        <span className="app-name">jenny.pei</span>
                    </span>
                </Dropdown>
            </div>
        </Header>;
    }
}

export default AppHeader;
