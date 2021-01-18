import React, { Component } from "react";
import CreateTrainerComponent from "./CreateTrainerComponent";
import TrainerLogin from "./TrainerLogin";
import TrainerService from "../Service/TrainerService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

class Trainer extends Component {
  render() {
    return (
      <Router>
        <div className="description-role">
          <div className="card center" style={{ width: "28rem", top: "20%" }}>
            <div
              className="bg-image hover-overlay ripple text-center"
              data-mdb-ripple-color="light"
            >
              <img src="trainer-logo.jpeg" class="img-fluid center"></img>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-center">Welcome Trainer</h5>
              <a href="/TrainerLogin" class="btn btn-secondary">
                Login
              </a>
              <div>
                <br />
                <a
                  href="/add-trainer"
                  onClick={this.addTrainer}
                  class="btn btn-secondary "
                >
                  Sign-Up
                </a>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/add-trainer">
            <CreateTrainerComponent />
          </Route>
          <Route path="/TrainerLogin">
            <TrainerLogin />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Trainer;
