import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };

        axios.post('http://localhost:3000/register', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.message
                })
            }
        )
    };
    render() {
        let error = '';

        if(this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }
        return (
            <form onSubmit={this.handleSubmit} >
                {error}
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name"
                    onChange={e => this.firstName = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name"
                    onChange={e => this.lastName = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                    onChange={e => this.email = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    onChange={e => this.password = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confrim Password"
                    onChange={e => this.confirmPassword = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>
            </form>
        )
    }
}

export default Register;