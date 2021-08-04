import React, { Component } from 'react';

class Home extends Component {

    render() {
        if(this.props.user){
            return (
                <h2>Hello {this.props.user.first_name} {this.props.user.last_name} </h2>
            )
        }
        return (
            <h2>Welcome to Diamond Training Systems!</h2>
        )
    }
}

export default Home;