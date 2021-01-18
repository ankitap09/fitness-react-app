import React, { Component } from "react";
import AppointmentService from "../Service/AppointmentService";
class ListAppointmentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
    };

    this.editAppointment = this.editAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  componentDidMount() {
    AppointmentService.getAppointment().then((res) => {
      this.setState({ appointments: res.data });
    });
  }

  addAppointment() {
    this.props.history.push("/add-appointment");
  }

  editAppointment(id) {
    window.open("/update-appointment/:id");
  }

  deleteAppointment(id) {
    AppointmentService.deleteAppointment(id).then((res) => {
      this.setState({
        appointments: this.state.appointments.filter(
          (appointment) => appointment.appointment_id !== id
        ),
      });
    });
  }

  render() {
    return (
      <div>
        <br />
        <h2 className="text-center">Appointment List</h2>
        <br />
        <div className="row"></div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Appointment Id</th>
                <th>User Id</th>
                <th>Trainer Id</th>
                <th>Trainer Preference</th>
                <th>Phy_the</th>
                <th>Package</th>
                <th>Location</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.appointments.map((appointment) => (
                <tr key={appointment.appointment_id}>
                  <td>{appointment.appointment_id}</td>
                  <td>{appointment.user_id}</td>
                  <td>{appointment.trainer_id}</td>
                  <td>{appointment.trainer_Preference}</td>
                  <td>{appointment.phy_the}</td>
                  <td>{appointment.amount}</td>
                  <td>{appointment.location}</td>
                  <td>{appointment.date}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.editAppointment(appointment.appointment_id)
                      }
                      className="btn btn-info"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        this.deleteAppointment(appointment.appointment_id)
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="card-body text-center">
            <a href="/admin-home" className="btn btn-secondary">
              <h6>Back</h6>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ListAppointmentComponent;
