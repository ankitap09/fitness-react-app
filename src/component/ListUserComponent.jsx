import React, { Component } from 'react';
import UserService from '../Service/UserService';

class ListUserComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    componentDidMount(){
        UserService.getUser()
        .then((res) => {
            this.setState({users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user');
    }

    editUser(id){
        this.props.history.push(`/update-user/${id}`)
    }

    deleteUser(id){
        UserService.deleteUser(id).then((res) => {
            this.setState({users: this.state.users.filter( user => user.userId !== id)});
        });
    }

    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User List</h2>
                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>User Id</th>
                                <th>User Fname</th>
                                <th>User Lname</th>
                                <th>User EmailId</th>
                                <th>User ShippingAddress</th>
                                <th>User Country</th>
                                <th>User State</th>
                                <th>User City</th>
                                <th>User Pincode</th>
                                <th>User MobileNo</th>
                                <th>User Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key= {user.userId}>
                                        <td>{user.userId}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.emailId}</td>
                                        <td>{user.shippingAddress}</td>
                                        <td>{user.country}</td>
                                        <td>{user.state}</td>
                                        <td>{user.city}</td>
                                        <td>{user.pincode}</td>
                                        <td>{user.mobileNo}</td>
                                        <td>{user.age}</td>
                                       
                                        
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteUser(user.userId)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewUser(user.userId)} className = "btn btn-info">View</button>
                                        </td>
                                     </tr>  
                                )
                            }


                        </tbody>

                    </table>
                    <div className="card-body text-center">
                                     <a href="/admin-home"  className="btn btn-secondary"><h6>Back</h6></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;