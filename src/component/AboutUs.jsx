import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="description-bg-all">
        <div className="row about">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src="about-us.jpg" class="img-fluid"></img>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 desc">
            <h3>Aims Fitness Center</h3>
            <p>
              Welcome to Aims Fitness Center, your number one source for getting
              fit under the guidence of our well known trainers. We're dedicated
              to giving you the very best of fitness training, with a focus on
              three characteristics, ie: dependability, customer service and
              uniqueness. Founded in 2021 by Team, Aims Fitness Center has come
              a long. When Team first started out, his passion for getting fit
              and healthy drove him to do intense research, quit his job, and
              gave him the impetus to turn hard work and inspiration into to a
              booming Fitness Training Center. We now serve customers all over
              places, and are thrilled to be a part of the fit scociety. We hope
              you enjoy our training programs as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </p>
            <p>
              Sincerely,
              <br />
              Fitness Team, Founder.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
