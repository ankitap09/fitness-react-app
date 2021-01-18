import React, { Component } from "react";
//import { Router } from "react-router-dom";
import ListAppointmentComponent from "./ListAppointmentComponent";
import ListTrainerComponent from "./ListTrainerComponent";
import ListUserComponent from "./ListUserComponent";
import UpdateAppointmentComponent from "./UpdateAppointmentComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
class AdminHomePage extends Component {
  render() {
    return (
      <Router>
        <div className="description-admin-home">
          <div className="text-left" style={{ width: "18rem" }}>
            <h4 className="button" style={{ color: "white" }}>
              Welcome Admin
            </h4>
            <div className="center" style={{ width: "78rem" }}>
              <div
                className="bg-image hover-overlay ripple text-center"
                data-mdb-ripple-color="light"
              ></div>
              <div className="card-body text-center">
                <a href="/appointments" className="btn btn-secondary">
                  <h6>View All Appointments</h6>
                </a>
                <div>
                  <br />
                  <a href="/trainers" className="btn btn-secondary">
                    <h6>View All Trainers</h6>
                  </a>
                </div>
                <div>
                  <br />
                  <a href="/users" className="btn btn-secondary">
                    <h6>View All Users</h6>
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
          <Route path="/appointments">
            <ListAppointmentComponent />
          </Route>
          <Route path="/trainers">
            <ListTrainerComponent />
          </Route>
          <Route path="/users">
            <ListUserComponent />
          </Route>
          <Route path="/update-appointment/:id">
            <UpdateAppointmentComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default AdminHomePage;
