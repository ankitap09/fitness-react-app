import React, { Component } from "react";
import UpdateTrainerComponent from "./UpdateTrainerComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
class TrainerHomePage extends Component {
  render() {
    return (
      <Router>
        <div className="description-admin-home">
          <div className="text-left" style={{ width: "18rem" }}>
            <h4 className="button" style={{ color: "white" }}>
              Welcome Trainer
            </h4>
            <div className="center" style={{ width: "78rem" }}>
              <div
                className="bg-image hover-overlay ripple text-center"
                data-mdb-ripple-color="light"
              ></div>

              <div>
                <br />
                <a
                  href="/update-trainer"
                  onClick={this.updateTrainer}
                  className="btn btn-secondary"
                >
                  <h6>Update Your Details</h6>
                </a>
              </div>
              <div
                className="text-right"
                style={{ position: "absolute", bottom: "0pt", right: "0pt" }}
              >
                <a href="/logout" className="button" style={{ color: "white" }}>
                  <h5>Logout</h5>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/update-trainer">
            <UpdateTrainerComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default TrainerHomePage;
