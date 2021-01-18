import React, { Component } from "react";
import CreateAppointmentComponent from "./CreateAppointmentComponent";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import UpdateUserComponent from "./UpdateUserComponent";
import Logout from "./Logout";

class UserHomePage extends Component {
  render() {
    return (
      <Router>
        <div className="description-admin-home">
          <div className="text-left" style={{ width: "18rem" }}>
            <h4 className="button" style={{ color: "white" }}>
              Welcome User
            </h4>
            <div className="center" style={{ width: "78rem" }}>
              <div
                className="bg-image hover-overlay ripple text-center"
                data-mdb-ripple-color="light"
              ></div>

              <div className="card-body text-center">
                <div>
                  <br />
                  <a
                    href="/add-appointment"
                    onClick={this.addAppointment}
                    className="btn btn-secondary"
                  >
                    <h6>Submit Appointment</h6>
                  </a>
                </div>
                <div>
                  <br />
                </div>
                <div>
                  <br />
                  <a
                    href="/update-user"
                    onClick={this.updateUser}
                    className="btn btn-secondary"
                  >
                    <h6>Update Your Details</h6>
                  </a>
                </div>
                <div
                  className="text-right"
                  style={{ position: "absolute", bottom: "0pt", right: "0pt" }}
                >
                  <a
                    href="/logout"
                    className="button"
                    style={{ color: "white" }}
                  >
                    <h5>Logout</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/add-appointment">
            <CreateAppointmentComponent />
          </Route>
          <Route path="/update-user">
            <UpdateUserComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default UserHomePage;
