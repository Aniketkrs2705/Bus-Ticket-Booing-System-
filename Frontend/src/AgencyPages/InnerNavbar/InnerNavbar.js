import { useHistory } from 'react-router'
import {Link} from "react-router-dom";
import bus from "../../images/bluebus.png"
const InnerNavbar= ()=>{
  const history = useHistory()
  const SignOut = () => {
    sessionStorage.clear();
    history.push('/agencylogin')
  }
return(
    <nav class="navbar navbar-expand-lg navbar mb-5" style={{backgroundColor:"#7e22ce"}}>
      {/* <img src="https://cdn-icons-png.flaticon.com/512/1841/1841609.png" alt="" height={60} className="ms-2"/> */}
      <img src={bus} alt="" height={50} className="ms-2"/>
      <a class="navbar-brand" href="/agency/home"><h3 className="ms-1" style={{color:"#0badaa"}}>BusBooking</h3></a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    
                        <li className="nav-item active">
            <Link className="nav-link" to="/agencyprofile"> <button className="btn btn-light">profile</button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/agency/home"> <button className="btn btn-light">Active Trips</button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/agency/newTrip"> <button className="btn btn-light">Create Trip</button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/agency/newBus"> <button className="btn btn-light">Add Bus</button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/agency/buses"> <button className="btn btn-light">Show Buses</button> <span className="sr-only"></span></Link>
          </li>
                        <li className="nav-item active">
            <Link className="nav-link" to="/agency/trips"> <button className="btn btn-light">Show All Trips</button> <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link"> <button className="btn btn-danger" onClick={SignOut}>Sign Out </button> <span className="sr-only"></span></Link>
          </li>
                    </ul>
                </div>
                {/* <div className="signout">
                  <button className="btn btn-outline-success button" onClick={SignOut}>Sign Out</button>
                </div> */}
            </nav>

)
}

export default InnerNavbar