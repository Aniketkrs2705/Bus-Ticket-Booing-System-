import React from "react";
import { useHistory } from 'react-router'
import {Link} from "react-router-dom";
import bus from "../../images/bluebus.png"
const Navbar = () => {
  const history = useHistory()
  const SignOut = () => {
    sessionStorage.clear();
    history.push('/adminlogin')
  }
 
    return(
<nav className="navbar navbar-expand-lg navbar" style={{backgroundColor:"#7e22ce"}}>
      {/* <img src="https://cdn-icons-png.flaticon.com/512/1841/1841609.png" alt="" height={60} className="ms-2"/> */}
      <img src={bus} alt="" height={50} className="ms-2"/>
                <a class="navbar-brand" href="/adminprofile"><h3 className="ms-1" style={{color:"#0badaa"}}>BusBooking</h3></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        
                        <li className="nav-item active">
            <Link className="nav-link" to="/adminprofile"> <button className="btn btn-light">profile</button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/agencylist"> <button className="btn btn-light">AgencyList </button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/addagency"> <button className="btn btn-light">AddAgency </button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/stationlist"> <button className="btn btn-light">StationList </button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/addstation"> <button className="btn btn-light">AddStation </button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/routelist"> <button className="btn btn-light">RouteList </button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/addroute"> <button className="btn btn-light">AddRoute </button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/userlist"> <button className="btn btn-light">UserList </button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link"> <button className="btn btn-danger" onClick={SignOut}>Sign Out </button> <span className="sr-only"></span></Link>
          </li>
          
                    </ul>
                </div>
                
                
            </nav>
            
    )
};

export default Navbar;