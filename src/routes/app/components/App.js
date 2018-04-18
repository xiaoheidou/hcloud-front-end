/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:31:38 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-17 23:33:54
 */
import React from 'react';

import Title from './Title';
import Table from './Table';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

    changeTitle = () => {
        this.props.updateTitle('app-' + (+new Date));
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const { app, match } = this.props;

        return <div className="app">
            <Switch>
                <Route path={`${match.url}/test`} component={
                    Loadable({
                        loader: () => import(/* webpackChunkName: "app-test" */'../routes/test'),
                        loading: () => null
                    })
                } />
            </Switch>

            <Title>{app.title}</Title>
            <div className="img" onClick={this.changeTitle}></div>
            <Table list={app.list}></Table>
        </div>;
    }
}

export default App;