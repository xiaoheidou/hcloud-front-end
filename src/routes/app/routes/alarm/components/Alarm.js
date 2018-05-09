import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

class Alarm extends React.Component {

    render() {
        const { match } = this.props;

        return <div className="alarm">
            <Switch>
                <Route path={`${match.url}/setting`} component={
                    Loadable({
                        loader: () => import(/* webpackChunkName: "alarm-setting" */'../routes/setting'),
                        loading: () => null
                    })
                } />
                <Route path={`${match.url}/history`} component={
                    Loadable({
                        loader: () => import(/* webpackChunkName: "alarm-history" */'../routes/history'),
                        loading: () => null
                    })
                } />

                <Redirect from="/" to={`${match.url}/setting`} />
            </Switch>
        </div>;
    }
}

export default Alarm;