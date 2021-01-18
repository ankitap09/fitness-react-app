import React, { Component } from "react";
import TrainerService from "../Service/TrainerService";
class ListTrainerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: [],
    };
    this.addTrainer = this.addTrainer.bind(this);
    this.editTrainer = this.editTrainer.bind(this);
    this.deleteTrainer = this.deleteTrainer.bind(this);
    this.viewTrainer = this.viewTrainer.bind(this);
  }

  componentDidMount() {
    TrainerService.getTrainer().then((res) => {
      this.setState({ trainers: res.data });
    });
  }

  addTrainer() {
    this.props.history.push("/add-trainer");
  }

  editTrainer(id) {
    this.props.history.push(`/update-trainer/${id}`);
  }

  deleteTrainer(id) {
    TrainerService.deleteTrainer(id).then((res) => {
      this.setState({
        trainers: this.state.trainers.filter(
          (trainer) => trainer.trainerId !== id
        ),
      });
    });
  }

  viewTrainer(id) {
    this.props.history.push(`/view-trainer/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Trainer List</h2>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Trainer Id</th>
                <th>Trainer Name</th>
                <th>Trainer Email</th>
                <th>Trainer Address</th>
                <th>Trainer Mobile no</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.trainers.map((trainer) => (
                <tr key={trainer.trainerId}>
                  <td>{trainer.trainerId}</td>
                  <td>{trainer.trainerName}</td>
                  <td>{trainer.emailId}</td>
                  <td>{trainer.address}</td>
                  <td>{trainer.mobileNo}</td>

                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteTrainer(trainer.trainerId)}
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

export default ListTrainerComponent;
