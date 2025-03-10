import './UserNavbar.css'
import { useHistory } from 'react-router'
import {Link} from "react-router-dom"
import bus from "../../images/bluebus.png"

const UserNavbar = () =>{
  const history = useHistory()
  const SignOut = () => {
    sessionStorage.clear();
    history.push('/userlogin')
  }
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar" style={{backgroundColor:"#7e22ce"}}>
      {/* <img src="https://cdn-icons-png.flaticon.com/512/1841/1841609.png" alt="" height={60} className="ms-2"/> */}
      <img src={bus} alt="" height={50} className="ms-2"/>
      <Link className="navbar-brand" to="/routes">Bus Booking</Link>
      <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse dropdown-content" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/routes"><button className='btn btn-light'>Home</button><span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile"><button className='btn btn-light'>Profile</button></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bookings"><button className='btn btn-light'>My Bookings</button></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/changepassword"><button className='btn btn-light'>Change Password</button></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"><button className="btn btn-danger" onClick={SignOut}>Sign Out</button></Link>
            
          </li>
        </ul>
      </div>
      
    </nav>
   </div>
  )
}
export default UserNavbar