import React, { Component } from "react";
import axios from "axios";

class AdminForgotPassword extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobileNo: "",
      newPassword: "",
      rePassword: "",
      errors: {},
    };

    this.emailHandler = this.emailHandler.bind(this);
    this.mobileNoHandler = this.mobileNoHandler.bind(this);
    this.changeNewPasswordHandler = this.changeNewPasswordHandler.bind(this);
    this.changeRePasswordHandler = this.changeRePasswordHandler.bind(this);
    this.AdminForgotPassword = this.AdminForgotPassword.bind(this);
  }

  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  mobileNoHandler = (event) => {
    this.setState({ mobileNo: event.target.value });
  };

  changeNewPasswordHandler = (event) => {
    this.setState({ newPassword: event.target.value });
  };

  changeRePasswordHandler = (event) => {
    this.setState({ rePassword: event.target.value });
  };

  validateForm() {
    let errors = {};

    let formIsValid = true;

    if (this.state.newPassword !== this.state.rePassword) {
      formIsValid = false;
      errors["notEqual"] = "*Password do not match.";
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  }

  AdminForgotPassword(e) {
    e.preventDefault();

    if (this.validateForm()) {
      var apiBaseUrl =
        " http://localhost:8082/springfox/fitness/login/adminforgot/" +
        this.state.newPassword;

      var data = {
        email: this.state.email,

        mobileNo: this.state.mobileNo,
      };

      var headers = {
        "Content-Type": "application/json",
      };

      axios
        .post(apiBaseUrl, data, { headers: headers })
        .then(function (response) {
          alert("New Password set successfully");

          window.location = "/AdminLogin";
        })
        .catch(function (error) {
          window.open("/AdminLogin");
          alert("Email or MobileNo is incorrect.");
        });
    }
  }

  cancel() {
    window.open("/AdminLogin");
  }

  render() {
    return (
      <div className="description-bg-forgot">
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <br />
                <br />
                <h3 className="text-center">Forgot Password</h3>
                <div className="card-body">
                  <fieldset>
                    <form>
                      <div className="form-group">
                        <label>Enter email</label>
                        <input
                          placeholder="email"
                          type="email"
                          name="email"
                          className="form-control"
                          value={this.state.email}
                          onChange={this.emailHandler}
                          required
                        />
                      </div>
                      <div className="errorMsg">{this.state.errors.email}</div>

                      <div className="form-group">
                        <label>Enter Mobile No</label>
                        <input
                          placeholder="mobileNo"
                          type="text"
                          name="mobileNo"
                          className="form-control"
                          value={this.state.mobileNo}
                          onChange={this.mobileNoHandler}
                          required
                        />
                      </div>
                      <div className="errorMsg">
                        {this.state.errors.mobileNo}
                      </div>

                      <div className="form-group">
                        <label>Enter new password</label>
                        <input
                          placeholder="New password"
                          type="password"
                          name="password"
                          className="form-control"
                          value={this.state.newPassword}
                          onChange={this.changeNewPasswordHandler}
                          required
                        />
                      </div>
                      <div className="errorMsg">
                        {this.state.errors.newPassword}
                      </div>

                      <div className="form-group">
                        <label>Re-enter the password</label>
                        <input
                          placeholder="New password"
                          type="password"
                          name="password"
                          className="form-control"
                          value={this.state.rePassword}
                          onChange={this.changeRePasswordHandler}
                          required
                        />
                      </div>
                      <div className="errorMsg">
                        {this.state.errors.rePassword}
                      </div>
                      <div className="errorMsg">
                        {this.state.errors.notEqual}
                      </div>

                      <button
                        className="btn btn-success"
                        onClick={this.AdminForgotPassword}
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
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminForgotPassword;
