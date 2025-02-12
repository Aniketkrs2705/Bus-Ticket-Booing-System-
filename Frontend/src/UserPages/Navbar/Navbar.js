import {Link} from "react-router-dom";
import bus from "../../images/bluebus.png"
const Navbar = () =>{
  return(
    <nav className="navbar navbar-expand-lg navbar" style={{backgroundColor:"#7e22ce"}}>
      {/* <img src="https://img.freepik.com/premium-vector/red-city-bus-coach-vector-illustration_443748-1714.jpg" alt="" height={60} className="ms-2"/> */}
      <img src={bus} alt=""  height={70} className="ms-2"/>
      <Link className="navbar-brand" to="/home"><h3 className="ms-1" style={{color:"#0badaa"}}>Bus Booking</h3></Link>
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
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/"> <button className="btn btn-light">Home</button> <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/userlogin"> <button className="btn btn-light">User Login</button> <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adminlogin"> <button className="btn btn-light">Admin Login</button></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/agencylogin"><button className="btn btn-light">Agency Login</button></Link>
          </li>
        </ul>
      </div>
     </nav>
  )
}
export default Navbar