import React, { Component } from "react";
//import { Router } from "react-router-dom";
import CreateTrainerComponent from './CreateTrainerComponent';
import TrainerLogin from './TrainerLogin';
import TrainerService from '../Service/TrainerService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
 
class Trainer extends Component {
 /*  constructor(props){
    super(props)

    this.state = {
        trainers: []
    }
    this.addTrainer = this.addTrainer.bind(this);
    
} */

/* componentDidMount(){
    TrainerService.getTrainer()
    .then((res) => {
        this.setState({trainers: res.data});
    }); 
}*/

/* addTrainer(){
    this.props.history.push('/add-trainer');
} */
 
  render() {
    return (<div class="description-bg-all">
    <Router>
      <div class="card center" style={{width:'48rem'}}>
  <div class="bg-image hover-overlay ripple text-center" data-mdb-ripple-color="light">
  <img src="trainer-logo.jpeg" class="img-fluid center"></img>
  </div>
  <div class="card-body text-center">
    <h5 class="card-title text-center">Welcome Trainer</h5>
    <a href="/TrainerLogin"  class="btn btn-secondary">Login</a>
    <div>
      <br/>
    <a href="/add-trainer" onClick={this.addTrainer} class="btn btn-secondary ">Sign-Up</a>
    </div>
    </div>
  </div>
  <Switch>
  <Route path="/add-trainer">
      <CreateTrainerComponent />
  </Route>
  <Route path="/TrainerLogin">
      <TrainerLogin />
  </Route>
  </Switch>
  </Router>
  </div>
    );
  }
}
 
export default Trainer;