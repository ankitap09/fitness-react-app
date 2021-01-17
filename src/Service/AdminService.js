import axios from 'axios';
const ADMIN_API_BASE_URL = "http://localhost:8082/springfox/fitness/admin";
class AdminService {
     getAdmin(){
        return axios.get(ADMIN_API_BASE_URL+'/');
    } 

    addAdmin(admin){
        return axios.post(ADMIN_API_BASE_URL+'/',admin);
    }

     getAdminById(adminId){
        return axios.get(ADMIN_API_BASE_URL+'/'+adminId);
    }

    updateAdmin(admin, adminId){
        return axios.put(ADMIN_API_BASE_URL+'/',admin);
    }
    deleteAdmin(adminId){
        return axios.delete(ADMIN_API_BASE_URL+'/'+adminId);
    } 
    }

//exporting TrainerService object
export default new AdminService();