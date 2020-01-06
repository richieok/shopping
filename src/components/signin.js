import React from "react";

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
    }
    handleChange(e){
        const id = e.target.id;
        this.setState({[id]: e.target.value});
    }
    render(){
        return <main>
            <form className="form-container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <button className="form-button">Submit</button>
                </div>
            </form>
        </main>;
    }
}