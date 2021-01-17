import React, { Component } from 'react';
import UserService from '../Service/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                userId:'',
                fname:'',
                lname:'',
                emailId:'',
                shippingAddress:'',
                country:'',
                state:'',
                city:'',
                pincode:'',
                mobileNo:'',
                age:'',
                password:'',
                role:''

               
        }
        this.changeUserIdHandler= this.changeUserIdHandler.bind(this);
        this.changeUserFnameHandler= this.changeUserFnameHandler.bind(this);
        this.changeUserLnameHandler= this.changeUserLnameHandler.bind(this);
        this.changeEmailIdHandler= this.changeEmailIdHandler.bind(this);
        this.changeShippingAddressHandler= this.changeShippingAddressHandler.bind(this);
        this.changeCountryHandler= this.changeCountryHandler.bind(this);
        this.changeStateHandler= this.changeStateHandler.bind(this);
        this.changeCityHandler= this.changeCityHandler.bind(this);
        this.changePincodeHandler= this.changePincodeHandler.bind(this);
        this.changeMobileNoHandler= this.changeMobileNoHandler.bind(this);
        this.changeAgeHandler= this.changeAgeHandler.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);
        this.changeRoleHandler= this.changeRoleHandler.bind(this);
       
    }     

    saveUser = (u)=>{
        u.preventDefault();
        let user ={ userId: this.state.userId, fname: this.state.fname,  lname: this.state.lname,  emailId: this.state.emailId,
            shippingAddress: this.state.shippingAddress, country: this.state.country,  state: this.state.state, 
            city: this.state.city,  pincode: this.state.pincode,  mobileNo: this.state.mobileNo,  age: this.state.age,
            password: this.state.password,  role: this.state.role
        };
        console.log(JSON.stringify(user));
        UserService.addUser(user).then(res =>{
           this.props.history.push('/users');
           alert("Your Data  Successfully Submitted....!");
           window.open("/user")
        })
    }  
    
    cancel(){
        //this.props.history.push('/user');
    }

    changeUserIdHandler = (event) =>{
        this.setState({userId: event.target.value});
    }

    changeUserFnameHandler = (event) =>{
        this.setState({fname: event.target.value});
    }

    changeUserLnameHandler = (event) =>{
        this.setState({lname: event.target.value});
    }
    changeEmailIdHandler = (event) =>{
        this.setState({emailId: event.target.value});
    }
    changeShippingAddressHandler = (event) =>{
        this.setState({shippingAddress: event.target.value});
    }
     changeCountryHandler= (event) =>{
        this.setState({country: event.target.value});
    }
  

    changeStateHandler = (event) =>{
        this.setState({state: event.target.value});
    }

    changeCityHandler = (event) =>{
        this.setState({city: event.target.value});
    }

    changePincodeHandler = (event) =>{
        this.setState({pincode: event.target.value});
    }

    changeMobileNoHandler = (event) =>{
        this.setState({mobileNo: event.target.value});
    }

    changeAgeHandler = (event) =>{
        this.setState({age: event.target.value});
    }

    changePasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }

    changeRoleHandler = (event) =>{
        this.setState({role: event.target.value});
    }

   

    render() {

        
        const {userId,fname,lname,emailId,shippingAddress,
            country,state,city, pincode,mobileNo,age,password,
            role} = this.props;
    
            if(!fname){
                return null;
            }


        return ( <div class="description-bg-all">
            <div>               
                <div className="container" data-test="UserComponent">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group" data-test="userId"> 
                                        <label>Enter UserId</label>
                                        <input placeholder="UserId" name="userId"
                                            className="form-control" value = {this.state.userId} 
                                            onChange = {this.changeUserIdHandler}/>
                                    </div>
                                    <div className="form-group" data-test="fname"> 
                                        <label>Enter User Fname</label>
                                        <input placeholder="User Fname" name="fname"
                                            className="form-control" value = {this.state.fname} 
                                            onChange = {this.changeUserFnameHandler}/>
                                    </div>
                                    <div className="form-group" data-test="lname"> 
                                        <label>Enter User Lname</label>
                                        <input placeholder="User Lname" name="lname"
                                            className="form-control" value = {this.state.lname} 
                                            onChange = {this.changeUserLnameHandler}/>
                                    </div>
                                    <div className="form-group" data-test="email"> 
                                        <label>Enter User EmailId</label>
                                        <input placeholder="User EmailId" name="email"
                                            className="form-control" value = {this.state.emailId} 
                                            onChange = {this.changeEmailIdHandler}/>
                                    </div>
                                    <div className="form-group" data-test="address"> 
                                        <label>Enter User ShippingAddress</label>
                                        <input placeholder="User ShippingAddress" name="address"
                                            className="form-control" value = {this.state.shippingAddress} 
                                            onChange = {this.changeShippingAddressHandler}/>
                                    </div>
                                    <div className="form-group" data-test="country"> 
                                        <label>Enter User Country</label>
                                        <input placeholder="User Country" name="country"
                                            className="form-control" value = {this.state.country} 
                                            onChange = {this.changeCountryHandler}/>
                                    </div>
                                    <div className="form-group" data-test="state"> 
                                        <label>Enter User State</label>
                                        <input placeholder="User State" name="state"
                                            className="form-control" value = {this.state.state} 
                                            onChange = {this.changeStateHandler}/>
                                    </div>
                                    <div className="form-group" data-test="city"> 
                                        <label>Enter User City</label>
                                        <input placeholder="User City" name="city"
                                            className="form-control" value = {this.state.city} 
                                            onChange = {this.changeCityHandler}/>
                                    </div>
                                    <div className="form-group" data-test="pincode"> 
                                        <label>Enter User Pincode</label>
                                        <input placeholder="User Pincode" name="pincode"
                                            className="form-control" value = {this.state.pincode} 
                                            onChange = {this.changePincodeHandler}/>
                                    </div>
                                    <div className="form-group" data-test="mobile"> 
                                        <label>Enter User MobileNo</label>
                                        <input placeholder="User MobileNo" name="mobile"
                                            className="form-control" value = {this.state.mobileNo} 
                                            onChange = {this.changeMobileNoHandler}/>
                                    </div>
                                    <div className="form-group" data-test="age"> 
                                        <label>Enter User Age</label>
                                        <input placeholder="User Age" name="age"
                                            className="form-control" value = {this.state.age} 
                                            onChange = {this.changeAgeHandler}/>
                                    </div>
                                    <div className="form-group" data-test="password"> 
                                        <label>Enter User Password</label>
                                        <input type ="password"placeholder="User Password" name="password"
                                            className="form-control" value = {this.state.password} 
                                            onChange = {this.changePasswordHandler}/>
                                    </div>
                                    {/* <div className="form-group"> 
                                        <label>Enter User Role</label>
                                        <input placeholder="User Role" name="role"
                                            className="form-control" value = {this.state.role} 
                                            onChange = {this.changeRoleHandler}/>
                                    </div> */}

                                    <div className="form-group" data-test="role">
                                        <label>Select Role</label><br/>
                                        <input type="radio" id="trainer" name="group" value="TRAINER" onChange = {this.changeRoleHandler}/>
                                        <label for="trainer">TRAINER</label><br/>
                                        <input type="radio" id="user" name="group" value="USER"  onChange = {this.changeRoleHandler}/>
                                        <label for="user">USER</label><br/>
                                        <input type="radio" id="admin" name="group" value="ADMIN"  onChange = {this.changeRoleHandler}/>
                                        <label for="admin">ADMIN</label><br/>
                                    </div>
                                    
                                    <button className = "btn btn-success" onClick = {this.saveUser}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}



export default CreateUserComponent;