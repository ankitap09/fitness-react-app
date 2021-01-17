import React, { Component } from 'react';

import { Link} from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Login extends Component {
    componentDidMount() {

        window.scrollTo(0, 0)

    }

    constructor(props) {

        super(props);

        this.state = {

            id: '',

            password: '',

            errors: {}

        }
        
          
        this.handleChangeId = this.handleChangeId.bind(this);

        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        

    }

    handleChangeId(e) {

        this.setState({ id: e.target.value });

    }

    handleChangePassword(e) {

        this.setState({ password: e.target.value });

    }

    submituserRegistrationForm(e) {

        e.preventDefault();

        if (this.validateForm()) {

            console.log(this.state);

            var apiBaseUrl = "http://localhost:8082/springfox/fitness/login/trainerlogin/";

            var data = {

                "id": this.state.id,

                "password": this.state.password

            }

            var headers = {

                'Content-Type': 'application/json',

            }

            console.log(data);

            axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {

                console.log(response);
                window.location = "/Dashboard"
                if (response.data.success) {
                    localStorage.setItem("u_code", encodeURIComponent(JSON.stringify(response.data.data)));

                    localStorage.setItem('is_done', true);

                   //window.location.href = "/dashboard"
                  
                    console.log("Login successfull");

                } else {
                   
                    alert(response.data.message);

                }

            }).catch(function (error) {

                console.log(error);

            });

        }

    }

    validateForm() {

        let errors = {};

        let formIsValid = true;

        if (!this.state.id) {

            formIsValid = false;

            errors["id"] = "*Please enter your userId.";

        }

        // if (typeof this.state.email !== "undefined") {

        //     //regular expression for email validation

        //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        //     if (!pattern.test(this.state.email)) {

        //         formIsValid = false;

        //         errors["email"] = "*Please enter valid email-ID.";

        //     }

        // }

        if (!this.state.password) {

            formIsValid = false;

            errors["password"] = "*Please enter your password.";

        }

        if (typeof this.state.password !== "undefined") {

            if (!this.state.password.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

                formIsValid = false;

                errors["password"] = "*Please enter atleast 6 digit password with atleast one uppercase, lowercase with atleast one digit and special character";

             }

    }

        this.setState({

            errors: errors

        });

        return formIsValid;

    }

    render() {

        return (

            <div>

                <div className="container">

                    <div className="row">

                        <div className="col-md-4 login-sec">

                            <h2 className="text-center">Fitness App Login</h2>

                            <Form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >

                                <FormGroup>

                                    <Label for="exampleid">UserId</Label>

                                    <Input type="id" name="id" id="exampleid" value={this.state.id} onChange={this.handleChangeId} placeholder="id" />

                                    <div className="errorMsg">{this.state.errors.id}</div>

                                </FormGroup>

                                <FormGroup>

                                    <Label for="examplePassword">Password</Label>

                                    <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" />

                                    <div className="errorMsg">{this.state.errors.password}</div>

                                </FormGroup>

                                <FormGroup check>

                                    <Label check>

                                        <Input type="checkbox" />{' '}Remember Me
                                    </Label>

                                </FormGroup>

                                <div className="d-flex justify-content-center mt-3 login_container">
                                    
                              
                                <Button type="login" className="btn btn-primary btn-block">Login</Button>

                                </div>

                               <div className="mt-4">

                                     <div className="d-flex justify-content-center links">

                                        Don't have an account? <Link href="/register" to="/register" className="linka">Register</Link>

                                    </div>

                                    <div className="d-flex justify-content-center links">

                                       
                                        Forgot Password <Link href="/forgotpassword" to="/forgotpassword" className="linka">Forgot password</Link>

                                    </div> 

                                </div> 
 
                            </Form>

                        </div>

                        <div className="col-md-8 banner-sec"></div>

                    </div>

                </div>

            </div>

        )

    }

}