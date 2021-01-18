import React, { Component } from "react";
import TrainerService from "../Service/TrainerService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import {
  faAddressBook,
  faCode,
  faEnvelope,
  faFlag,
  faIdCard,
  faKey,
  faMobile,
  faTasks,
  faUser,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class CreateTrainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainerId: "",
      trainerName: "",
      emailId: "",
      address: "",
      mobileNo: "",
      password: "",
      role: "",
    };

    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeRoleHandler = this.changeRoleHandler.bind(this);
  }

  saveTrainer = (t) => {
    t.preventDefault();
    let trainer = {
      trainerId: this.state.trainerId,
      trainerName: this.state.trainerName,
      emailId: this.state.emailId,
      address: this.state.address,
      mobileNo: this.state.mobileNo,
      password: this.state.password,
      role: this.state.role,
    };
    console.log(JSON.stringify(trainer));
    TrainerService.addTrainer(trainer).then((res) => {
      alert("Your Data  Successfully Submitted....!");
      window.open("/trainer");
    });
  };

  cancel() {}

  changeIdHandler = (event) => {
    this.setState({ trainerId: event.target.value });
  };

  changeNameHandler = (event) => {
    this.setState({ trainerName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  changeMobileNoHandler = (event) => {
    this.setState({ mobileNo: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeRoleHandler = (event) => {
    this.setState({ role: event.target.value });
  };

  render() {
    return (
      <div className="description-bg-all">
        <div>
          <div className="container" data-test="TrainerComponent">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center"> Sign-Up</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group" data-test="trainerId">
                      <label>
                        <FontAwesomeIcon icon={faIdCard} />
                        &nbsp; Id
                      </label>
                      <input
                        placeholder=" Enter Id"
                        name="id"
                        className="form-control"
                        value={this.state.trainerId}
                        onChange={this.changeIdHandler}
                      />
                    </div>
                    <div className="form-group" data-test="trainerName">
                      <label>
                        {" "}
                        <FontAwesomeIcon icon={faUser} />
                        &nbsp;Name
                      </label>
                      <input
                        placeholder="Enter Name"
                        name="name"
                        className="form-control"
                        value={this.state.trainerName}
                        onChange={this.changeNameHandler}
                      />
                    </div>
                    <div className="form-group" data-test="emailId">
                      <label>
                        <FontAwesomeIcon icon={faEnvelope} />
                        &nbsp; Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        className="form-control"
                        value={this.state.emailId}
                        onChange={this.changeEmailHandler}
                      />
                    </div>
                    <div className="form-group" data-test="address">
                      <label>
                        <FontAwesomeIcon icon={faAddressBook} />
                        &nbsp;Address
                      </label>
                      <input
                        placeholder="Enter Address"
                        name="address"
                        className="form-control"
                        value={this.state.address}
                        onChange={this.changeAddressHandler}
                      />
                    </div>
                    <div className="form-group" data-test="mobileNo">
                      <label>
                        <FontAwesomeIcon icon={faMobile} />
                        &nbsp;Mobile No
                      </label>
                      <input
                        placeholder="Enter Mobile no"
                        name="mobile no"
                        className="form-control"
                        value={this.state.mobileNo}
                        onChange={this.changeMobileNoHandler}
                      />
                    </div>
                    <div className="form-group" data-test="password">
                      <label>
                        <FontAwesomeIcon icon={faKey} />
                        &nbsp;Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.changePasswordHandler}
                      />
                    </div>

                    <div className="form-group" data-test="role">
                      <label>
                        <FontAwesomeIcon icon={faTasks} />
                        &nbsp;Select Role
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="trainer"
                        name="group"
                        value="TRAINER"
                        onChange={this.changeRoleHandler}
                      />
                      <label for="trainer">&nbsp;TRAINER</label>
                      <br />
                      <input
                        type="radio"
                        id="user"
                        name="group"
                        value="USER"
                        onChange={this.changeRoleHandler}
                      />
                      <label for="user">&nbsp;USER</label>
                      <br />
                      <input
                        type="radio"
                        id="admin"
                        name="group"
                        value="ADMIN"
                        onChange={this.changeRoleHandler}
                      />
                      <label for="admin">&nbsp;ADMIN</label>
                      <br />
                    </div>

                    <button
                      className="btn btn-success"
                      onClick={this.saveTrainer}
                    >
                      Save
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateTrainerComponent;
