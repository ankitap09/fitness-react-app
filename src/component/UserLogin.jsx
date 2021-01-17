import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
//import '../css/login.css';
//import Navbar from './Navbars/LoginNavbar';//write ur own import where u want to reredirect the pAGE AFTER login

export default class TrainerLogin extends Component {
    customerData;

    constructor(props) {

        super(props);

        this.state = {

            email: '',

            password: '',
           // role: '',

            errors: {}

        }


        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.handleChangePassword = this.handleChangePassword.bind(this);
        //this.handleChangeRole = this.handleChangeRole.bind(this);

        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    }

    handleChangeEmail(e) {

        this.setState({ email: e.target.value });

    }

    handleChangePassword(e) {

        this.setState({ password: e.target.value });

    }
   // handleChangeRole(e) {

//        this.setState({ role: e.target.value });

  //  }


    submituserRegistrationForm(e) {

        e.preventDefault();
        localStorage.setItem('staff', JSON.stringify(this.state));


        if (this.validateForm()) {

            console.log(this.state);

            var apiBaseUrl = "http://localhost:8082/springfox/fitness/login/userlogin/";

            var data = {

                "email": this.state.email,

                "password": this.state.password
               // "role": this.state.role

            }

            var headers = {

                'Content-Type': 'application/json',

            }

            console.log(data);

            axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {
                console.log(response);
               /*  if (data.role === "ADMIN") {
                    window.location = "/admin-dashboard";
                }
                else if (data.role === "OPERATION") {
                    window.location = "/ops-dashboard";
                } */
                if (response.data.success) {
                    console.log("Login successfully");
                    

                } else {

                    alert("Login successfully");
                    window.location = "/user-home";

                }

            }).catch(function (error) {
               alert("Invalid Password or email");
                console.log(error);

            });

        }

    }


    validateForm() {

        let errors = {};

        let formIsValid = true;

        if (!this.state.email) {

            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";

        }

        if (typeof this.state.email !== "undefined") {

            //regular expression for email validation

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(this.state.email)) {

                formIsValid = false;

                errors["email"] = "*Please enter valid email-ID.";

            }

        }

        if (!this.state.password) {

            formIsValid = false;

            errors["password"] = "*Please enter your password.";

        }

        if (typeof this.state.password !== "undefined") {

            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

                formIsValid = false;

                errors["password"] = "*Please enter secure and strong password.";

            }
            

        }

        this.setState({

            errors: errors

        });

        return formIsValid;

    }
    componentDidMount() {

        window.scrollTo(0, 0)
        this.customerData = JSON.parse(localStorage.getItem('staff'));
        if (localStorage.getItem('staff')) {
            this.setState({
                email: this.customerData.email,
                password: this.customerData.password

            })
        } else {
            this.setState({
                email: '',
                password: ''
            })

        }


    }

    render() {
        

        return (
            <div class="description-bg-all">
            <div>
            
               { /*<Navbar />*/}
                <div className="card center" style={{height:'28rem' ,width:'35rem'}}>

                    <div  className="row">

                        <div  className="col-md-8 center login-sec">
                            <br/>
                            <h2 className="card-title text-center"> <b>Login</b></h2><br/>

                            <Form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>

                                <FormGroup>

                                    <Label for="exampleEmail"><b>Email</b></Label>

                                    <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email Id" />

                                    <div className="errorMsg">{this.state.errors.email}</div>

                                </FormGroup>

                                <FormGroup>

                                    <Label for="examplePassword"><b>Password</b></Label>

                                    <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" />

                                    <div className="errorMsg">{this.state.errors.password}</div>

                                </FormGroup>
                               {/*  <FormGroup>
                                    <Label for="role">Role</Label>
                                    <select name="role" className="form-control" value={this.state.role} onChange={this.handleChangeRole}  >
                                        <option></option>
                                        <option >ADMIN</option>
                                        <option>OPERATION</option>
                                    </select>



                                </FormGroup> */}
                                <div className="d-flex justify-content-center mt-3 login_container">

                                    <Button type="submit" className="btn btn-login">Submit</Button>

                                </div>
                                <div className="mt-4">

                                    <div className="d-flex justify-content-center links">

                                        Don't have an account? <a href="/add-user"  className="linka">Register</a>

                                    </div>

                                <div className="d-flex justify-content-center links">

                                       Forgot Password <a href="" to="" className="linka">Forgot password</a>

                                </div> 

                                </div>

                            </Form>

                        </div>

                        <div className="col-md-8 banner-sec"></div>

                    </div>

                </div>

            </div>
            
        </div>
        )

    }

}

