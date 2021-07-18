import React, {Component} from 'react';
import axios from 'axios';

class Forgot extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email
        };

        axios.post('forgot', data).then(
            res => {
                console.log(res)
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
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                    onChange={e => this.email = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}

export default Forgot;