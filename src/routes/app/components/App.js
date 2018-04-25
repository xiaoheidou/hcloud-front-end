/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:31:38 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-25 14:16:25
 */
import React from 'react';
import { Layout } from 'antd';
import AppSider from './AppSider';
import AppHeader from './AppHeader';
import AppRouter from './AppRouter';

const Content = Layout.Content;

class App extends React.Component {

    state = {
        collapsed: false
    }

    componentDidMount() {
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return <div className="app">
            <Layout>
                <AppSider collapsed={this.state.collapsed} />
                <Layout>
                    <AppHeader collapsed={this.state.collapsed} toggle={this.toggle} />
                    <Content className="app-content">
                        <AppRouter {...this.props} />
                    </Content>
                </Layout>
            </Layout>

        </div>;
    }
}

export default App;