import React, { Component } from "react";
import AdminService from "../Service/AdminService";

class CreateAdminComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin_id: "",
      admin_name: "",
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
    this.saveAdmin = this.saveAdmin.bind(this);
  }

  saveAdmin = (t) => {
    t.preventDefault();
    let admin = {
      admin_id: this.state.admin_id,
      admin_name: this.state.admin_name,
      emailId: this.state.emailId,
      address: this.state.address,
      mobileNo: this.state.mobileNo,
      password: this.state.password,
      role: this.state.role,
    };
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
    console.log(JSON.stringify(admin));
    AdminService.addAdmin(admin).then((res) => {
      this.props.history.push("/admins");
    });
  };

  cancel() {
    this.props.history.push("/admins");
  }

  changeIdHandler = (event) => {
    this.setState({ admin_id: event.target.value });
  };

  changeNameHandler = (event) => {
    this.setState({ admin_name: event.target.value });
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
    const {
      admin_id,
      admin_name,
      emailId,
      address,
      mobileNo,
      password,
      role,
    } = this.props;

    if (!admin_name) {
      return null;
    }
    return (
      <div>
        <div className="container" data-test="AdminComponent">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Admin</h3>
              <div className="card-body">
                <form>
                  <div className="form-group" data-test="admin_id">
                    <label>Enter Id</label>
                    <input
                      placeholder=" Id"
                      name="id"
                      className="form-control"
                      value={this.state.admin_id}
                      onChange={this.changeIdHandler}
                    />
                  </div>
                  <div className="form-group" data-test="admin_name">
                    <label>Enter Name</label>
                    <input
                      placeholder=" Name"
                      name="name"
                      className="form-control"
                      value={this.state.admin_name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group" data-test="email">
                    <label>Enter Email</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group" data-test="address">
                    <label>Enter Address</label>
                    <input
                      placeholder=" Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <div className="form-group" data-test="mobileNo">
                    <label>Enter Mobile No</label>
                    <input
                      placeholder=" mobile no"
                      name="mobile no"
                      className="form-control"
                      value={this.state.mobileNo}
                      onChange={this.changeMobileNoHandler}
                    />
                  </div>
                  <div className="form-group" data-test="password">
                    <label>Enter Password</label>
                    <input
                      placeholder="Trainer password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className="form-group" data-test="role">
                    <label>Enter role</label>
                    <input
                      placeholder="Role"
                      name="role"
                      className="form-control"
                      value={this.state.role}
                      onChange={this.changeRoleHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveAdmin}>
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
    );
  }
}

export default CreateAdminComponent;
