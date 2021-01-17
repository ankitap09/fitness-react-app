import axios from 'axios';
const TRAINER_API_BASE_URL = "http://localhost:8082/springfox/fitness/trainer";
class TrainerService {
     getTrainer(){
        return axios.get(TRAINER_API_BASE_URL+'/');
    } 

    addTrainer(trainer){
        return axios.post(TRAINER_API_BASE_URL+'/',trainer);
    }

     getTrainerById(trainerId){
        return axios.get(TRAINER_API_BASE_URL+'/'+trainerId);
    }

    updateTrainer(trainer, trainerId){
        return axios.put(TRAINER_API_BASE_URL+'/',trainer);
    }

    deleteTrainer(trainerId){
        return axios.delete(TRAINER_API_BASE_URL+'/'+trainerId);
    } 
}

//exporting TrainerService object
export default new TrainerService();