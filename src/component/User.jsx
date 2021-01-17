import React, { Component } from "react";
import CreateUserComponent from './CreateUserComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
 
class User extends Component {
  render() {
    return (
      <div class="description-bg-all">
      <Router>
    <div class="description-bg-all">
      <div class="card center" style={{width:'58rem'}}>
  <div class="bg-image hover-overlay ripple text-center" data-mdb-ripple-color="light">
  <img src="user-logo1.jpg" class="img-fluid center"></img>
  </div>
  <div class="card-body text-center">
    <h5 class="card-title text-center">Welcome User</h5>
    <a href="/UserLogin" class="btn btn-secondary">Login</a>
    <div>
      <br/>
    <a href="/add-user" onClick={this.addUser} class="btn btn-secondary ">Sign-Up</a>
    </div>
    </div>
  </div>
  </div>
  <Switch>
  <Route path="/add-user">
      <CreateUserComponent />
  </Route>
  </Switch>
  </Router>
  </div>
    );
  }
}
 
export default User;