import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <div className="App-header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/login">login</Link></li>
                    <li><Link to="/cities">Cities</Link></li>
                </ul>
            </div>
        );
    }
}

export default Main;
