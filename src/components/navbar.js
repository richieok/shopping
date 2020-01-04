import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return (
            <div className="nav">
                <div id="logo">
                    <h3>Logo</h3>
                </div>
                <ul className="nav-list">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">dashboard</Link>
                    </li>
                    <li>
                        <Link to="#">login</Link>
                    </li>
                    <li>
                        <Link to="#">logout</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;