import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './login';
import Signup from './signup';

class User extends Component {
    render() {
        return (
            <Switch>
                <Route path="/user/login" exact component={Login} />
                <Route path="/user/signup" exact component={Signup} />
            </Switch>
        );
    }
}

export default User;
