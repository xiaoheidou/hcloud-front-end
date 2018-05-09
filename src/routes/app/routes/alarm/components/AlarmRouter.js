import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

class AlarmRouter extends React.Component {
    render() {
        const { match } = this.props;

        return <Switch>
            
            <Route path={`${match.url}/setting`} component={
                Loadable({
                    loader: () => import(/* webpackChunkName: "alarm-setting" */'../routes/setting'),
                    loading: () => null
                })
            } />
           
           
            <Redirect from="/" to={`${match.url}/setting`} />
        </Switch>;
    }
}

export default AlarmRouter;