import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Signup extends Component {
    render() {
        return (
            <div className="App-header">
                Signup

                <Link to="/user/login" >Login</Link>
            </div>
        );
    }
}

export default Signup;
