/*
 * @Author: harry.lang 
 * @Date: 2018-04-23 17:58:07 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-05-13 22:34:12
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const Sider = Layout.Sider;

const siders = [{
    title: '个性看板',
    icon: 'desktop',
    route: '/app/board'
}, {
    title: '资源管理',
    icon: 'profile',
    children: [{
        title: '主机资源',
        route: '/app/resource/host'
    }, {
        title: 'nginx',
        route: '/app/resource/nginx'
    }, {
        title: 'apache',
        route: '/app/resource/apache'
    }, {
        title: 'tomcat',
        route: '/app/resource/tomcat'
    }, {
        title: 'MySQL',
        route: '/app/resource/mysql'
    }, {
        title: 'Redis',
        route: '/app/resource/redis'
    }, {
        title: 'Oracle',
        route: '/app/resource/oracle'
    }]
}, {
    title: '报警管理',
    icon: 'bell',
    children: [{
        title: '报警模板',
        route: '/app/alarm/setting'
    }, {
        title: '历史报警',
        route: '/app/alarm/history'
    }, {
        title: '报警分析',
        route: '/app/alarm/analysis'
    }]
}, {
    title: '分析报告',
    icon: 'file-text',
    children: [{
        title: '成本分析',
        route: '/app/report/cost'
    }]
}, {
    title: '用户管理',
    icon: 'user',
    route: '/app/user'
}];


class AppSider extends React.Component {
    state = {
        openKeys: [],
    }

    onOpenChange = (openKeys) => {
        this.setState({
            openKeys: openKeys.slice(-1),
        });
    }

    render() {
        const { collapsed } = this.props;

        return <Sider
            className="app-sider"
            collapsed={collapsed}
        >
            <div className="app-logo">{!collapsed ? 'HCLOUD' : 'H'}</div>
            <Menu
                theme="dark"
                mode="inline"
                openKeys={this.state.openKeys}
                defaultSelectedKeys={['11']}
                onOpenChange={this.onOpenChange}
                onClick={(e) => { this.onOpenChange(e.keyPath.slice(-1)); }}
            >
                {siders.map(sider => {
                    if (!sider.children) {
                        return <Menu.Item key={sider.title}>
                            <Link to={sider.route}>
                                <Icon type={sider.icon} />
                                <span>{sider.title}</span>
                            </Link>
                        </Menu.Item>;
                    } else {
                        return <SubMenu key={sider.title} title={<React.Fragment><Icon type={sider.icon} /><span>{sider.title}</span></React.Fragment>}>
                            {sider.children.map(sub => <Menu.Item key={sub.title}>
                                <Link to={sub.route} key={sub.route}>{sub.title}</Link>
                            </Menu.Item>)}
                        </SubMenu>;
                    }
                })}
            </Menu>
        </Sider>;
    }
}

export default AppSider;
