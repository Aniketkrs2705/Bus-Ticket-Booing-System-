import './App.css'
import {useEffect} from 'react'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import HomePage from './UserPages/Homepage/HomePage';
import UserLogIn from './UserPages/UserLogIn/UserLogIn';
import AdminLogIn from './UserPages/AdminLogin/AdminLogIn';
import AgencyLogIn from './UserPages/AgencyLogin/AgencyLogIn';
import SignUp from './UserPages/SignUp/SignUp';
import ForgotPassword from './UserPages/ForgotPassword/ForgotPassword';
import Routes from './UserPages/RouteSelection/Routes';
import BusList from './UserPages/BusList/BusList';
import SeatSelection from './UserPages/SeatSelection/SeatSelection';
import TravellingDetails from './UserPages/TravellingDetails/TravellingDetails';
import Payment from './UserPages/Payment/Payment';
import Ticket from './UserPages/Ticket/Ticket';
import Profile from './UserPages/Profile/Profile';
import EditUserProfile from './UserPages/EditUserProfile/EditUserProfile';
import Booking from './UserPages/Booking/Booking';

import StationList from './AdminPages/StationList/StationList';
import UserList from './AdminPages/UserList/UserList';
import AgencyList from './AdminPages/AgencyList/AgencyList';
import AddAgency from './AdminPages/AddAgency/AddAgency';
import AddStation from './AdminPages/AddStation/AddStation';
import RouteList from './AdminPages/RouteList/RouteList';
import AddRoute from './AdminPages/AddRoute/AddRoute';
import AdminProfile from './AdminPages/Profile/AdminProfile';
import EditAdminProfile from './AdminPages/EditAdminProfile/EditAdminProfile';
import AddPickingPoint from './AdminPages/PickingPoint/PickingPoint';
import AddDroppingPoint from './AdminPages/DroppingPoint/DroppingPoint';
import AgencyHome from './AgencyPages/AgencyHome/AgencyHome';
import NewTrip from './AgencyPages/NewTrip/NewTrip';
import NewBus from './AgencyPages/NewBus/NewBus';
import EditTrip from './AgencyPages/EditTrip/EditTrip';
import DeleteTrip from './AgencyPages/DeleteTrip/DeleteTrip';
import AllBuses from './AgencyPages/AllBuses/AllBuses';
import DeleteBus from './AgencyPages/DeleteBus/DeleteBus';
import AllTrips from './AgencyPages/AllTrips/AllTrips';
import ViewTrip from './AgencyPages/ViewTrip/ViewTrip';
import AgencyProfile from './AgencyPages/AgencyProfile/AgencyProfile';
import EditAgencyProfile from './AgencyPages/EditAgencyProfile/EditAgencyProfile';
import AdminForgotPassword from './UserPages/AdminLogin/AdminForgotPassword';
import AgencyForgotPassword from './UserPages/AgencyLogin/AgencyForgotPassword';
import ChangeUserPassword from './UserPages/ChangePassword/ChangeUserPassword';
import AgencyPassword from './AgencyPages/AgencyPassword/AgencyPassword';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './UserPages/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Link to="/home">
        </Link>
        
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/userlogin" component={UserLogIn} />
          <Route exact path="/adminlogin" component={AdminLogIn} />
          <Route exact path="/agencylogin" component={AgencyLogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <Route exact path="/routes" component={Routes}/>
          <Route exact path="/buses" component={BusList}/>
          <Route exact path="/seatselection" component={SeatSelection}/>
          <Route exact path="/travellingdetails" component={TravellingDetails}/>
          <Route exact path="/payment" component={Payment}/>
          <Route exact path="/ticket" component={Ticket}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/editprofile" component={EditUserProfile}/>
          <Route exact path="/bookings" component={Booking}/>
          <Route exact path="/changepassword" component={ChangeUserPassword}/>

          <Route exact path ="/agencylist" component={AgencyList}/>
          <Route exact path="/addagency" component={AddAgency}/>
          <Route exact path="/stationlist" component={StationList}/>
          <Route exact path="/addstation" component={AddStation}/>
          <Route exact path="/routelist" component={RouteList}/>
          <Route exact path="/addroute" component={AddRoute}/>
          <Route exact path="/addpickingpoint" component={AddPickingPoint}/>
          <Route exact path="/adddroppingpoint" component={AddDroppingPoint}/>
          <Route exact path="/userlist" component={UserList}/>
          <Route exact path="/adminprofile" component={AdminProfile}/>
          <Route exact path="/editadminprofile" component={EditAdminProfile}/>
          <Route exact path="/adminforgot" component={AdminForgotPassword} />

          <Route exact path='/agency/home' component={AgencyHome}/>
          <Route exact path='/agency/newTrip' component={NewTrip}/>
          <Route exact path='/agency/newBus' component={NewBus}/>
          <Route exact path='/agency/editTrip' component={EditTrip}/>
          <Route exact path='/agency/deleteTrip' component={DeleteTrip}/>
          <Route exact path="/agencyprofile/" component={AgencyProfile}/>
          <Route exact path="/agency/editprofile" component={EditAgencyProfile}/>
          <Route exact path="/agencyforgot" component={AgencyForgotPassword} />
          <Route exact path="/agency/editTrip" component={EditTrip}/>
          <Route exact path="/agency/deleteTrip" component={DeleteTrip}/>
          <Route exact path="/agency/buses" component={AllBuses}/>
          <Route exact path="/bus/deleteBus" component={DeleteBus}/>
          <Route exact path="/agency/trips" component={AllTrips}/>
          <Route exact path="/agency/viewTrip" component={ViewTrip}/>
          <Route exact path="/agency/changePassword" component={AgencyPassword}/>

          <Route path="*" component={HomePage} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;