import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.css';
import './App.css';
import Home from "./Components/HomeComponent";
import Nav from "./Components/NavComponent";
import Login from "./Components/LoginComponent";
import Register from "./Components/RegisterComponent";
import axios from 'axios';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reset from './Components/ResetComponent';
import Forgot from './Components/ForgotComponent';
import UserList from './Components/UserList';

class App extends Component {
  state = {};


  componentDidMount = () => {
        
    axios.get('user').then(
        res => {
            this.setUser(res.data);
            
        },
        err => {
            console.log(err)
        }
    )
};

setUser = user => {
    this.setState({
      user: user
  });

};

  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <Nav user={this.state.user} setUser={this.setUser}/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={() => <Home user={this.state.user}/>}/>
              <Route exact path="/login" component={() => <Login setUser={this.setUser}/>}/>
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgot" component={Forgot} />
              <Route exact path="/reset/:id" component={Reset} />
              <Route exact path="/users" component={UserList} />
            </Switch>
            
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }

  }
  

export default App;
