import React, { Component } from "react";
import AppointmentService from "../Service/AppointmentService";

class UpdateAppointmentComponent extends Component {
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
    this.updateAppointment = this.updateAppointment.bind(this);
  }

  componentDidMount() {
    AppointmentService.getAppointmentById(this.state.appointment_id).then(
      (res) => {
        let appointment = res.data;
        this.setState({
          appointment_id: appointment.appointment_id,
          user_id: appointment.user_id,
          trainer_id: appointment.trainer_id,
          trainer_Preference: appointment.trainer_Preference,
          phy_the: appointment.phy_the,
          amount: appointment.amount,
          location: appointment.location,
          date: appointment.date,
        });
      }
    );
  }

  updateAppointment = (e) => {
    e.preventDefault();
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
    AppointmentService.updateAppointment(
      appointment,
      this.state.appointment_id
    ).then((res) => {
      alert("Your Data  Successfully Submitted....!");
      window.open("/appointments");
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
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Edit Appointment</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Enter AppointmentId</label>
                    <input
                      placeholder=" Id"
                      name="id"
                      className="form-control"
                      value={this.state.appointment_id}
                      onChange={this.changeIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter UserId</label>
                    <input
                      placeholder=" UserId"
                      name="userid"
                      className="form-control"
                      value={this.state.user_id}
                      onChange={this.changeUserIdHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Enter TrainerId</label>
                    <input
                      placeholder=" trainerId"
                      name="trainerid"
                      className="form-control"
                      value={this.state.trainer_id}
                      onChange={this.changeTrainerIdHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Enter Trainer Preference</label>
                    <input
                      placeholder="pre"
                      name="pre"
                      className="form-control"
                      value={this.state.trainer_Preference}
                      onChange={this.changePrefHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Physico Theriopist</label>
                    <input
                      placeholder="phy_the"
                      name="phy_the"
                      className="form-control"
                      value={this.state.phy_the}
                      onChange={this.changePhyHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Amount</label>
                    <input
                      placeholder=" Amount"
                      name="amount"
                      className="form-control"
                      value={this.state.amount}
                      onChange={this.changeAmountHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Location</label>
                    <input
                      placeholder="location"
                      name="location"
                      className="form-control"
                      value={this.state.location}
                      onChange={this.changeLocationHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Date</label>
                    <input
                      placeholder="date"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.changeDateHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateAppointment}
                  >
                    Update
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
    );
  }
}

export default UpdateAppointmentComponent;
