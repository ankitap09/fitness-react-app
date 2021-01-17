import axios from 'axios';
const APPOINTMENT_API_BASE_URL = "http://localhost:8082/springfox/fitness/appointment";
class AppointmentService {
     getAppointment(){
        return axios.get(APPOINTMENT_API_BASE_URL+'/');
    } 

    addAppointment(appointment){
        return axios.post(APPOINTMENT_API_BASE_URL+'/',appointment);
    }

     getAppointmentById(appointmentId){
        return axios.get(APPOINTMENT_API_BASE_URL+'/'+appointmentId);
    }

    updateAppointment(appointment, appointmentId){
        return axios.put(APPOINTMENT_API_BASE_URL+'/',appointment);
    }
    deleteAppointment(appointmentId){
        return axios.delete(APPOINTMENT_API_BASE_URL+'/'+appointmentId);
    } 
    }

//exporting TrainerService object
export default new AppointmentService();