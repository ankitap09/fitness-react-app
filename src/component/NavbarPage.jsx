import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, NavDropdown } from 'react-bootstrap';
import { Form, FormControl,} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import User from './User';
import Admin from './Admin';
import Trainer from './Trainer';
import CreateTrainerComponent from './CreateTrainerComponent';
import CreateUserComponent from './CreateUserComponent';
import CreateAppointmentComponent from './CreateAppointmentComponent';
import TrainerLogin from './TrainerLogin';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
import TrainerHomePage from './TrainerHomePage';
import AdminHomePage from './AdminHomePage';
import UserHomePage from './UserHomePage';
import UpdateUserComponent from './UpdateUserComponent';
import ListAppointmentComponent from './ListAppointmentComponent';
import ListTrainerComponent from './ListTrainerComponent';
import ListUserComponent from './ListUserComponent';
import UpdateTrainerComponent from './UpdateTrainerComponent';
import UpdateAppointmentComponent from './UpdateAppointmentComponent';
import Logout from './Logout';
const NavbarPage = () => (
  <Router>
    <Navbar className="navbar" variant="light">
        <nav class="navbar navbar-expand-lg fixed-top ">  
 <a class="navbar-brand" href="#"><strong>Fitness Training App</strong></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse " id="navbarSupportedContent">     <ul class="navbar-nav mr-4">
 <li class="nav-item">
     <a class="nav-link" data-value="home" href="/home"><strong>Home</strong></a>        </li>  
     <strong><NavDropdown title="Role" id="basic-nav-dropdown">
                                      <NavDropdown.Item href="/admin"><b>Admin</b></NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="/user"><b>User</b></NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="/trainer"><b>Trainer</b></NavDropdown.Item>
                                  </NavDropdown></strong>
<li class="nav-item">
    <a class="nav-link " data-value="about-us"href="/about-us"><strong>About Us</strong></a>    
 </li>
 <li class="nav-item"> 
    <a class="nav-link " data-value="contact-us" href="/contact-us"><strong>Contact Us</strong></a>         </li>   
</ul> 
</div></nav> 
    </Navbar>   
    <Switch>
                              <Route exact path="/home">
                                  <Home />
                              </Route>
                              </Switch>
                              <Switch>
                              <Route path="/about-us">
                                  <AboutUs />
                              </Route>
                              </Switch>
                              <Switch>
                              <Route path="/contact-us">
                                  <ContactUs />
                              </Route>
                              </Switch>
                              <Switch>
                              <Route path="/admin">
                                  <Admin />
                              </Route>
                          </Switch>
                              <Switch>
                              <Route path="/user">
                                  <User />
                              </Route>
                          </Switch>
                          <Switch>
                              <Route path="/trainer">
                                  <Trainer />
                              </Route>
                        
                          
                              <Route path="/add-trainer">
                                  <CreateTrainerComponent />
                              </Route>
                              <Route path="/add-appointment">
                                  <CreateAppointmentComponent />
                              </Route>

                              <Route path="/add-user">
                                  <CreateUserComponent />
                              </Route>

                               <Route path="/appointments">
                                  <ListAppointmentComponent/>
                              </Route> 

                              <Route path="/trainers">
                                  <ListTrainerComponent/>
                              </Route> 

                              <Route path="/users">
                                  <ListUserComponent/>
                              </Route> 
                              <Route path="/UserLogin">
                                  <UserLogin/>
                              </Route>
                              <Route path="/AdminLogin">
                                  <AdminLogin/>
                              </Route>

                              <Route path="/TrainerLogin">
                                  <TrainerLogin/>
                              </Route>

                              <Route path="/Dashboard">
                                  <Dashboard/>
                              </Route>

                              <Route path="/trainer-home">
                                  <TrainerHomePage/>
                              </Route>
                              <Route path="/user-home">
                                  <UserHomePage/>
                              </Route>
                              <Route path="/admin-home">
                                  <AdminHomePage/>
                              </Route>
                              <Route path="/update-user">
                                  <UpdateUserComponent/>
                              </Route>
                              <Route path="/update-appointment/:id">
                                  <UpdateAppointmentComponent/>
                              </Route>

                              <Route path="/update-trainer">
                                  <UpdateTrainerComponent/>
                              </Route>

                              <Route path="/logout">
                                  <Logout/>
                              </Route>


                             {/*  <Route path="/update-appointment/:id">
                                  <UpdateAppointmentComponent/>
                              </Route> */}
                             
                          </Switch>
                      </Router>
);

export default NavbarPage;