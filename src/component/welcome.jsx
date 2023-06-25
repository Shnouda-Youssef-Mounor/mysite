import React, { Component } from 'react';
import './style.css'
class Welcome extends Component {
    state = {}
    render() {
        return ( 
            <div className="welcome">
            <font className="wel">Welcome in</font>
            <font className="myblog">My Blog</font>
        </div>
        );
    }
}

export default Welcome;