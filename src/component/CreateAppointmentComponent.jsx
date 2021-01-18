import React, { Component } from "react";
import AppointmentService from "../Service/AppointmentService";
import {
  faAddressBook,
  faCode,
  faDumbbell,
  faEnvelope,
  faFemale,
  faFighterJet,
  faFlag,
  faGenderless,
  faIcicles,
  faIdCard,
  faInfoCircle,
  faKey,
  faMale,
  faMobile,
  faTasks,
  faUser,
  faVoicemail,
  faUserMd,
  faLocationArrow,
  faBox,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class CreateAppointmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment_id: "",
      user_id: "",
      trainer_id: "",
      trainer_Preference: "",
      phy_the: "",
      amount: "",
      location: "",
      date: "",
    };

    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changeTrainerIdHandler = this.changeTrainerIdHandler.bind(this);
    this.changePrefHandler = this.changePrefHandler.bind(this);
    this.changePhyHandler = this.changePhyHandler.bind(this);
    this.changeAmountHandler = this.changeAmountHandler.bind(this);
    this.changeLocationHandler = this.changeLocationHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this);
  }

  saveAppointment = (t) => {
    t.preventDefault();
    let appointment = {
      appointment_id: this.state.appointment_id,
      user_id: this.state.user_id,
      trainer_id: this.state.trainer_id,
      trainer_Preference: this.state.trainer_Preference,
      phy_the: this.state.phy_the,
      amount: this.state.amount,
      location: this.state.location,
      date: this.state.date,
    };
    console.log(JSON.stringify(appointment));
    AppointmentService.addAppointment(appointment).then((res) => {
      alert("Your Data  Successfully Submitted....!");
      window.open("/user-home");
    });
  };

  cancel() {}

  changeIdHandler = (event) => {
    this.setState({ appointment_id: event.target.value });
  };

  changeUserIdHandler = (event) => {
    this.setState({ user_id: event.target.value });
  };

  changeTrainerIdHandler = (event) => {
    this.setState({ trainer_id: event.target.value });
  };

  changePrefHandler = (event) => {
    this.setState({ trainer_Preference: event.target.value });
  };

  changePhyHandler = (event) => {
    this.setState({ phy_the: event.target.value });
  };

  changeAmountHandler = (event) => {
    this.setState({ amount: event.target.value });
  };

  changeLocationHandler = (event) => {
    this.setState({ location: event.target.value });
  };

  changeDateHandler = (event) => {
    this.setState({ date: event.target.value });
  };

  render() {
    return (
      <div className="description-bg-all">
        <div>
          <div className="container" data-test="AppointmentComponent">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Add Appointment</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group" data-test="id">
                      <label>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        &nbsp; AppointmentId
                      </label>
                      <input
                        placeholder="Enter Id"
                        name="id"
                        className="form-control"
                        value={this.state.appointment_id}
                        onChange={this.changeIdHandler}
                      />
                    </div>

                    <div className="form-group" data-test="userid">
                      <label>
                        <FontAwesomeIcon icon={faUser} />
                        &nbsp; UserId
                      </label>
                      <input
                        placeholder="Enter UserId"
                        name="userid"
                        className="form-control"
                        value={this.state.user_id}
                        onChange={this.changeUserIdHandler}
                      />
                    </div>

                    <div className="form-group" data-test="trainerid">
                      <label>
                        <FontAwesomeIcon icon={faDumbbell} />
                        &nbsp;TrainerId
                      </label>
                      <input
                        placeholder="Enter trainerId"
                        name="trainerid"
                        className="form-control"
                        value={this.state.trainer_id}
                        onChange={this.changeTrainerIdHandler}
                      />
                    </div>

                    <div className="form-group" data-test="trainer_preference">
                      <label>
                        <FontAwesomeIcon icon={faGenderless} />
                        &nbsp;Trainer Preference
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="male"
                        name="group1"
                        value="Male"
                        onChange={this.changePrefHandler}
                      />
                      <label for="trainer">
                        &nbsp;Male&nbsp;
                        <FontAwesomeIcon icon={faMale} />
                        &nbsp;
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="female"
                        name="group1"
                        value="female"
                        onChange={this.changePrefHandler}
                      />
                      <label for="user">
                        &nbsp;Female&nbsp;
                        <FontAwesomeIcon icon={faFemale} />
                      </label>
                      <br />
                    </div>
                    <div className="form-group" data-test="phy_the">
                      <label>
                        <FontAwesomeIcon icon={faUserMd} />
                        &nbsp;Physico Theriopist
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="yes"
                        name="group2"
                        value="Yes"
                        onChange={this.changePhyHandler}
                      />
                      <label for="yes">&nbsp;Yes</label>
                      <br />
                      <input
                        type="radio"
                        id="no"
                        name="group2"
                        value="No"
                        onChange={this.changePhyHandler}
                      />
                      <label for="no">&nbsp;No</label>
                      <br />
                    </div>

                    <div className="form-group" data-test="location">
                      <label>
                        <FontAwesomeIcon icon={faLocationArrow} />
                        &nbsp;Location
                      </label>
                      <input
                        placeholder="Enter location"
                        name="location"
                        className="form-control"
                        value={this.state.location}
                        onChange={this.changeLocationHandler}
                      />
                    </div>

                    <div className="form-group" data-test="amount">
                      <label>
                        <FontAwesomeIcon icon={faBox} />
                        &nbsp;Select Package
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="week"
                        name="group"
                        value="500"
                        onChange={this.changeAmountHandler}
                      />
                      <label for="trainer">
                        &nbsp;One time Assessment only(Rs 500 only)
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="month"
                        name="group"
                        value="2000"
                        onChange={this.changeAmountHandler}
                      />
                      <label for="user">
                        &nbsp;4 sessions per Week(Rs 2000)
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="year"
                        name="group"
                        value="8000"
                        onChange={this.changeAmountHandler}
                      />
                      <label for="admin">
                        &nbsp;5 sessions per Week(Rs 1500)
                      </label>
                      <br />
                    </div>

                    <div className="form-group" data-test="date">
                      <label>
                        <FontAwesomeIcon icon={faCalendar} />
                        &nbsp;Date
                      </label>
                      <input
                        type="date"
                        placeholder="Enter date"
                        name="date"
                        className="form-control"
                        value={this.state.date}
                        onChange={this.changeDateHandler}
                      />
                    </div>
                    <button
                      className="btn btn-success"
                      onClick={this.saveAppointment}
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
                  <div className="card-body text-center">
                    <a href="/admin-home" className="btn btn-secondary">
                      <h6>Back</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAppointmentComponent;
