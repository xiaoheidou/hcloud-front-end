import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

class AppRouter extends React.Component {
    render() {
        const { match } = this.props;

        return <Switch>
            <Route path={`${match.url}/resource/:type`} component={
                Loadable({
                    loader: () => import(/* webpackChunkName: "resource" */'../routes/resource'),
                    loading: () => null
                })
            } />
            <Route path={`${match.url}/monitor/:hostKey`} component={
                Loadable({
                    loader: () => import(/* webpackChunkName: "monitor" */'../routes/monitor'),
                    loading: () => null
                })
            } />
            <Redirect from="/" to={`${match.url}/resource/host`} />
        </Switch>;
    }
}

export default AppRouter;