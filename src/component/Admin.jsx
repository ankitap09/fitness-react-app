import React, { Component } from "react";
 
class Admin extends Component {
  render() {
    
    return (<div class="description-bg-all">
      <div class="card center" style={{width:'48rem'}}>
  <div class="bg-image hover-overlay ripple text-center" data-mdb-ripple-color="light">
  <img src="admin-logo.jpeg" class="img-fluid center" style={{height:'30%'}}></img>
  </div>
  <div class="card-body text-center">
    <h5 class="card-title text-center">Welcome Admin</h5>
    <a href="/AdminLogin"  class="btn btn-secondary">Login</a>
    </div>
  </div>
  </div>
    );
  }
}
 
export default Admin;