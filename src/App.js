import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import NavbarPage from './component/NavbarPage';
import AboutUs from './component/AboutUs';

//import ContactUs from './ContactUs';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import User from './component/User';
import Admin from './component/Admin';
import Trainer from './component/Trainer';
//import CreateTrainerComponent from './TrainerComponent/CreateTrainerComponent';
import CreateTrainerComponent from './component/CreateTrainerComponent';
import CreateUserComponent from './component/CreateUserComponent';
//import HeaderComponent from './component/HeaderComponent';
//import FooterComponent from './component/FooterComponent';
import Dashboard from './component/Dashboard';
import TrainerLogin from './component/TrainerLogin';
import UserLogin from './component/UserLogin';
import AdminLogin from './component/AdminLogin';

import 'bootstrap/dist/css/bootstrap.min.css';
import TrainerHomePage from './component/TrainerHomePage';
import UserHomePage from './component/UserHomePage';
import AdminHomePage from './component/AdminHomePage';
import CreateAppointmentComponent from './component/CreateAppointmentComponent';
import ListAppointmentComponent from './component/ListAppointmentComponent';
import ListUserComponent from './component/ListUserComponent';
import ListTrainerComponent from './component/ListTrainerComponent';
import UpdateUserComponent from './component/UpdateUserComponent';
import UpdateTrainerComponent from './component/UpdateTrainerComponent';
import UpdateAppointmentComponent from './component/UpdateAppointmentComponent';
import Logout from './component/Logout';
function App() {
  return (
    <div>
      <Router>
        
        
      
          <div className="container">
            <Switch>
            <Route path = "/" component= {NavbarPage}></Route> 
            <Route path = "/home" component= {Home}><Home /></Route> 
              <Route path = "/about-us" component= {AboutUs}><AboutUs/></Route> 
              <Route path = "/contact-us" component= {ContactUs}><ContactUs/></Route> 
              <Route path = "/user" component={User}><User/></Route> 
              <Route path = "/admin" component={Admin}><Admin/></Route> 
              <Route path = "/trainer" component={Trainer}><Trainer/></Route>
              <Route path = "/add-trainer" component= {CreateTrainerComponent}><CreateTrainerComponent/></Route>  
              <Route path = "/add-user" component= {CreateUserComponent}><CreateUserComponent/></Route>  
              <Route path="/TrainerLogin" component={TrainerLogin} ><TrainerLogin/></Route>
              <Route path="/UserLogin" component={UserLogin} ><UserLogin/></Route>
              <Route path="/AdminLogin" component={AdminLogin} ><AdminLogin/></Route>
              <Route path="/Dashboard" component={Dashboard}><Dashboard/></Route>
              <Route path="/trainer-home" component={TrainerHomePage}><TrainerHomePage/></Route>
              <Route path="/user-home" component={UserHomePage}><UserHomePage/></Route>
              <Route path="/admin-home" component={AdminHomePage}><AdminHomePage/></Route>
              <Route path ="/add-appointment" component= {CreateAppointmentComponent}><CreateAppointmentComponent/></Route>
              <Route path ="/update-user" component= {UpdateUserComponent}><UpdateUserComponent/></Route>
              <Route path ="/update-trainer" component= {UpdateTrainerComponent}><UpdateTrainerComponent/></Route>
              <Route path = "/appointments" component= {ListAppointmentComponent}><ListAppointmentComponent/></Route>   
              <Route path = "/users" component= {ListUserComponent}><ListUserComponent/></Route>   
              <Route path = "/trainers" component= {ListTrainerComponent}><ListTrainerComponent/></Route>   
              <Route path = "/logout" component= {Logout}><Logout/></Route> 
              <Route path = "/update-appointment/:id" component= {UpdateAppointmentComponent}><UpdateAppointmentComponent/></Route>
            </Switch>
          </div>
        
       
      </Router>
    </div>
   
    
  );
}

export default App;
