import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div className="description-bg-all">
        <div className="row about">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src="contact-us.jpg" class="img-fluid"></img>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 desc">
            <h3>Contact-Us</h3>
            <br />
            <h6>
              Name:-Kshitija Bharat Patange
              <br />
              Address:-Pimpri Chinchwad Near YCM Hospital Pin-411018 <br />
              Email-Id:-kshitijabharatpatange@gmail.com <br />
              Mobile No:-9876543210
              <br />
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
