import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8082/springfox/fitness/user";

class UserService {
    getUser(){
        return axios.get(USER_API_BASE_URL+'/');
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL+'/',user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL+'/'+userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL+'/',user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL+'/'+userId);
    }
}

//exporting UserService object
export default new UserService();