import React, { Component } from "react";
import CreateUserComponent from "./CreateUserComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

class User extends Component {
  render() {
    return (
      <Router>
        <div className="description-role">
          <div className="card center" style={{ width: "28rem", top: "20%" }}>
            <div
              className="bg-image hover-overlay ripple text-center"
              data-mdb-ripple-color="light"
            >
              <img src="user-logo1.jpg" class="img-fluid center"></img>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-center">Welcome User</h5>
              <a href="/UserLogin" class="btn btn-secondary">
                Login
              </a>
              <div>
                <br />
                <a
                  href="/add-user"
                  onClick={this.addUser}
                  className="btn btn-secondary "
                >
                  Sign-Up
                </a>
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
    );
  }
}

export default User;
