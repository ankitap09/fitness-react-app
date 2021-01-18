import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <div className="description-role">
        <div className="card center" style={{ width: "28rem", top: "20%" }}>
          <div
            className="bg-image hover-overlay ripple text-center"
            data-mdb-ripple-color="light"
          >
            <img
              src="admin-logo.jpeg"
              className="img-fluid center"
              style={{ height: "30%" }}
            ></img>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-center">Welcome Admin</h5>
            <a href="/AdminLogin" class="btn btn-secondary">
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
