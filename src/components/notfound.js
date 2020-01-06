import React from "react";
import {Redirect} from "react-router-dom";

export default class NotFound extends React.Component {
    render(){
        if (this.props.isLoggedIn){
            return <Redirect to="/dashboard" />;
        }
        return <Redirect to="/" />;
    }
}