import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="App-header">
                Login

                <Link to="/user/signup" >sign up</Link>
            </div>
        );
    }
}

export default Login;
