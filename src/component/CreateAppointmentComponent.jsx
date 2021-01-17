import React, { Component } from 'react';
import AppointmentService from '../Service/AppointmentService';

class CreateAppointmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointment_id:'',
            user_id:'',
            trainer_id:'',
            trainer_Preference:'',
            phy_the:'',
            amount:'',
            location:'',
            date:'',
           
        }

        this.changeIdHandler=this.changeIdHandler.bind(this);
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changeTrainerIdHandler=this.changeTrainerIdHandler.bind(this);
        this.changePrefHandler=this.changePrefHandler.bind(this);
        this.changePhyHandler=this.changePhyHandler.bind(this);
        this.changeAmountHandler=this.changeAmountHandler.bind(this);
        this.changeLocationHandler=this.changeLocationHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        
    }     

    saveAppointment = (t)=>{
        t.preventDefault();
        let appointment ={ appointment_id: this.state.appointment_id, 
            user_id: this.state.user_id,
            trainer_id: this.state.trainer_id,
            trainer_Preference: this.state.trainer_Preference,
             phy_the: this.state.phy_the,
            amount:this.state.amount,
            location:this.state.location , 
            date:this.state.date ,
            
        };
        console.log(JSON.stringify(appointment));
        AppointmentService.addAppointment(appointment).then(res =>{
            this.props.history.push('/appointments');
            alert("Your Data  Successfully Submitted....!");
            window.open("/user-home")
        })
    }  
    
    cancel(){
       // this.props.history.push('/appointments');
    }

    changeIdHandler = (event) =>{
        this.setState({appointment_id: event.target.value});
    }

    changeUserIdHandler = (event) =>{
        this.setState({user_id: event.target.value});
    }

    changeTrainerIdHandler = (event) =>{
        this.setState({trainer_id: event.target.value});
    }

    changePrefHandler = (event) =>{
        this.setState({trainer_Preference: event.target.value});
    }

    changePhyHandler = (event) =>{
        this.setState({phy_the: event.target.value});
    }

    changeAmountHandler = (event) =>{
        this.setState({amount: event.target.value});
    }

    changeLocationHandler = (event) =>{
        this.setState({location: event.target.value});
    }

    changeDateHandler = (event) =>{
        this.setState({date: event.target.value});
    }

    
    

   

    render() {
        
        const {appointment_id, user_id,trainer_id,trainer_Preference, phy_the,
        amount,location, date} = this.props;
            if(!location){
                return null;
            }
        return (<div class="description-bg-all">
            <div>               
                <div className="container" data-test="AppointmentComponent">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Appointment</h3>
                            <div className = "card-body">
                                <form>
                                <div className="form-group" data-test="id" > 
                                        <label>Enter AppointmentId</label>
                                        <input placeholder=" Id" name="id"
                                            className="form-control" value = {this.state.appointment_id} 
                                            onChange = {this.changeIdHandler}/>
                                    </div>

                                    <div className="form-group" data-test="userid"> 
                                        <label>Enter UserId</label>
                                        <input placeholder=" UserId" name="userid"
                                            className="form-control" value = {this.state.user_id} 
                                            onChange = {this.changeUserIdHandler}/>
                                    </div>

                                    <div className="form-group" data-test="trainerid"> 
                                        <label>Enter TrainerId</label>
                                        <input placeholder=" trainerId" name="trainerid"
                                            className="form-control" value = {this.state.trainer_id} 
                                            onChange = {this.changeTrainerIdHandler}/>
                                    </div>
                                
                                
                                    {/* <div className="form-group"> 
                                        <label>Enter Trainer Preference</label>
                                        <input placeholder="pre" name="pre"
                                            className="form-control" value = {this.state.trainer_Preference} 
                                            onChange = {this.changePrefHandler}/>
                                    </div> */}

                                     <div className="form-group" data-test="trainer_preference">
                                        <label>Trainer Preference</label><br/>
                                        <input type="radio" id="male" name="group1" value="Male" onChange = {this.changePrefHandler}/>
                                        <label for="trainer">&nbsp;Male</label><br/>
                                        <input type="radio" id="female" name="group1" value="female"  onChange = {this.changePrefHandler}/>
                                        <label for="user">&nbsp;Female</label><br/>
                                    </div>


                                   {/*  <div className="form-group"> 
                                        <label>Enter Physico Theriopist</label>
                                        <input placeholder="phy_the" name="phy_the"
                                            className="form-control" value = {this.state.phy_the} 
                                            onChange = {this.changePhyHandler}/>
                                    </div> */}
                                        <div className="form-group" data-test="phy_the">
                                        <label>Physico Theriopist</label><br/>
                                        <input type="radio" id="yes" name="group2" value="Yes" onChange = {this.changePhyHandler}/>
                                        <label for="yes">&nbsp;Yes</label><br/>
                                        <input type="radio" id="no" name="group2" value="No"  onChange = {this.changePhyHandler}/>
                                        <label for="no">&nbsp;No</label><br/>
                                        </div>



                                   {/*  <div className="form-group"> 
                                        <label>Enter Amount</label>
                                        <input placeholder=" Amount" name="amount"
                                            className="form-control" value = {this.state.amount} 
                                            onChange = {this.changeAmountHandler}/>
                                    </div> */}

                                    <div className="form-group" data-test="location"> 
                                        <label>Enter Location</label>
                                        <input placeholder="location" name="location"
                                            className="form-control" value = {this.state.location} 
                                            onChange = {this.changeLocationHandler}/>
                                    </div>
                                    
                                    <div className="form-group" data-test="amount">
                                        <label>Select Package</label><br/>
                                        <input type="radio" id="week" name="group" value="500" onChange = {this.changeAmountHandler}/>
                                        <label for="trainer">&nbsp;One time Assessment only(Rs 500 only)</label><br/>
                                        <input type="radio" id="month" name="group" value="2000"  onChange = {this.changeAmountHandler}/>
                                        <label for="user">&nbsp;4 sessions per Week(Rs 2000)</label><br/>
                                        <input type="radio" id="year" name="group" value="8000"  onChange = {this.changeAmountHandler}/>
                                        <label for="admin">&nbsp;5 sessions per Week(Rs 1500)</label><br/>
                                    </div>


                                   
                                    <div className="form-group" data-test="date"> 
                                        <label>Enter Date</label>
                                        <input type="date" placeholder="date" name="date"
                                            className="form-control" value = {this.state.date} 
                                            onChange = {this.changeDateHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.saveAppointment}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                                <div className="card-body text-center">
                                     <a href="/admin-home"  className="btn btn-secondary"><h6>Back</h6></a>
                                 </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}



export default CreateAppointmentComponent;









/* import React, { Component } from 'react';
import AppointmentService from '../Service/AppointmentService';

class CreateAppointmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointment_id:'',
            user_id:'',
            trainer_id:'',
            trainer_Preference:'',
            phy_the:'',
            amount:'',
            location:'',
            date:'',
            password: '',
            role:''
        }

        this.changeIdHandler=this.changeIdHandler.bind(this);
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changeTrainerIdHandler=this.changeTrainerIdHandler.bind(this);
        this.changePrefHandler=this.changePrefHandler.bind(this);
        this.changePhyHandler=this.changePhyHandler.bind(this);
        this.changeAmountHandler=this.changeAmountHandler.bind(this);
        this.changeLocationHandler=this.changeLocationHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
    }     

    saveAppointment = (t)=>{
        t.preventDefault();
        let appointment ={ appointment_id: this.state.appointment_id, user_id: this.state.user_id,trainer_id: this.state.trainer_id,admin_name: this.state.admin_name, emailId: this.state.emailId,
            address:this.state.address, mobileNo:this.state.mobileNo , password:this.state.password ,
            role: this.state.role
        };
        console.log(JSON.stringify(admin));
        AdminService.addAdmin(admin).then(res =>{
            this.props.history.push('/admins');
        })
    }  
    
    cancel(){
        this.props.history.push('/admins');
    }

    changeIdHandler = (event) =>{
        this.setState({admin_id: event.target.value});
    }

    changeNameHandler = (event) =>{
        this.setState({admin_name: event.target.value});
    }

    changeEmailHandler = (event) =>{
        this.setState({emailId: event.target.value});
    }

    changeAddressHandler = (event) =>{
        this.setState({address: event.target.value});
    }

    changeMobileNoHandler = (event) =>{
        this.setState({mobileNo: event.target.value});
    }

    changePasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }

    changeRoleHandler = (event) =>{
        this.setState({role: event.target.value});
    }

   

    render() {
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Admin</h3>
                            <div className = "card-body">
                                <form>
                                <div className="form-group"> 
                                        <label>Enter Id</label>
                                        <input placeholder=" Id" name="id"
                                            className="form-control" value = {this.state.admin_id} 
                                            onChange = {this.changeIdHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Name</label>
                                        <input placeholder=" Name" name="name"
                                            className="form-control" value = {this.state.admin_name} 
                                            onChange = {this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Email</label>
                                        <input placeholder="Email" name="email"
                                            className="form-control" value = {this.state.emailId} 
                                            onChange = {this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Address</label>
                                        <input placeholder=" Address" name="address"
                                            className="form-control" value = {this.state.address} 
                                            onChange = {this.changeAddressHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Mobile No</label>
                                        <input placeholder=" mobile no" name="mobile no"
                                            className="form-control" value = {this.state.mobileNo} 
                                            onChange = {this.changeMobileNoHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Password</label>
                                        <input placeholder="Trainer password" name="password"
                                            className="form-control" value = {this.state.password} 
                                            onChange = {this.changePasswordHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter role</label>
                                        <input placeholder="Role" name="role"
                                            className="form-control" value = {this.state.role} 
                                            onChange = {this.changeRoleHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.saveAdmin}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default CreateAdminComponent; */