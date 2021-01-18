import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div className="row" id="Body">
        <div className="mediun-12 columns">
          <h2 id="welcomeText">Welcome to fitness app</h2>
          <a href="/login" className="button">
            Logout
          </a>
          <a href="/changepassword" className="button">
            Change password
          </a>
        </div>
      </div>
    );
  }
}
