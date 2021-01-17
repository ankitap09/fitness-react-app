import React, { Component } from 'react';
import TrainerService from '../Service/TrainerService';

class UpdateTrainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainerId:'',
            trainerName:'',
            emailId: '',
            address: '',
            mobileNo: '',
            password: '',
            role:''
        }
       
        this.changeIdHandler=this.changeIdHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeMobileNoHandler=this.changeMobileNoHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.updateTrainer = this.updateTrainer.bind(this);
    }     

    componentDidMount(){
        TrainerService.getTrainerById(this.state.trainerId).then((res)=>{
            let trainer =  res.data;
            this.setState({
                trainerId:trainer.trainerId,
            trainerName:trainer.trainerName,
            emailId: trainer.emailId,
            address: trainer.address,
            mobileNo: trainer.mobileNo,
            password: trainer.password,
            role:trainer.role

               
            });
        });
    }

    updateTrainer = (u)=>{
        u.preventDefault();
        let trainer ={ trainerId: this.state.trainerId, trainerName: this.state.trainerName, emailId: this.state.emailId,
            address:this.state.address, mobileNo:this.state.mobileNo , password:this.state.password ,
            role: this.state.role
        };
        console.log(JSON.stringify(trainer));
       TrainerService.updateTrainer(trainer,this.state.trainerId).then((res) =>{
            //this.props.history.push('/trainers');
            alert("Your Data  Successfully Submitted....!");
            window.open("/trainer")
       });
    }  
    
    cancel(){
        //this.props.history.push('/trainers');
    }

    changeIdHandler = (event) =>{
        this.setState({trainerId: event.target.value});
    }

    changeNameHandler = (event) =>{
        this.setState({trainerName: event.target.value});
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
                            <h3 className="text-center">Add Trainer</h3>
                            <div className = "card-body">
                                <form>
                                 <div className="form-group"> 
                                        <label>Enter Id</label>
                                        <input placeholder=" Id" name="id"
                                            className="form-control" value = {this.state.trainerId} 
                                            onChange = {this.changeIdHandler}/>
                                    </div> 
                                    <div className="form-group"> 
                                        <label>Enter Name</label>
                                        <input placeholder=" Name" name="name"
                                            className="form-control" value = {this.state.trainerName} 
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
                                    <button className = "btn btn-success" onClick = {this.updateTrainer}>Save</button>
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



export default UpdateTrainerComponent;