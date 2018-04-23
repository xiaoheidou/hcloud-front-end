/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:31:38 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-23 18:37:59
 */
import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import AppSider from './AppSider';
import AppHeader from './AppHeader';

const Content = Layout.Content;

class App extends React.Component {

    state = {
        collapsed: false
    }

    componentDidMount() {
        this.props.getList();
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const { /* app, */ match } = this.props;

        return <div className="app">
            <Layout>
                <AppSider collapsed={this.state.collapsed} />
                <Layout>
                    <AppHeader collapsed={this.state.collapsed} toggle={this.toggle} />
                    <Content className="app-content">
                        Content
                        <Switch>
                            <Route path={`${match.url}/test`} component={
                                Loadable({
                                    loader: () => import(/* webpackChunkName: "app-test" */'../routes/test'),
                                    loading: () => null
                                })
                            } />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>

        </div>;
    }
}

export default App;