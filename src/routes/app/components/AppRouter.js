import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

class AppRouter extends React.Component {
    render() {
        const { match } = this.props;

        return <Switch>
            <Route path={`${match.url}/resource/:category`} component={
                Loadable({
                    loader: () => import(/* webpackChunkName: "resource" */'../routes/resource'),
                    loading: () => null
                })
            } />
            <Route path={`${match.url}/alarm`} component={
                Loadable({
                    loader: () => import(/* webpackChunkName: "alarm" */'../routes/alarm'),
                    loading: () => null
                })
            } />
            <Route path={`${match.url}/monitor/:category/:key`} component={
                Loadable({
                    loader: () => import(/* webpackChunkName: "monitor" */'../routes/monitor'),
                    loading: () => null
                })
            } />
            <Redirect from="/" to={`${match.url}/resource/node`} />
        </Switch>;
    }
}

export default AppRouter;