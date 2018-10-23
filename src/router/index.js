import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import {
    User,
    Main
} from '../screens'


class Router extends Component {
    state = {
        loggedIn: true
    }
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact render={(props) => {
                        return this.state.loggedIn ? (<Main {...props} />) : (<Redirect to="/user/login" />)
                    }} />
                    <Route path="/user" render={(props) => {
                        return !this.state.loggedIn ? (<User {...props} />) : (<Redirect to="/" />)
                    }} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Router;
