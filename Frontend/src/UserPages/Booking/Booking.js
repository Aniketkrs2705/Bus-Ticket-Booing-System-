
// import { useState, useEffect} from 'react'
// import axios from 'axios'
// import { url } from '../../common/Constants'
// import UserNavbar from '../UserNavbar/UserNavbar'
// import { Link } from 'react-router-dom'
// import './Booking.css'
// import UserLogIn from './../UserLogIn/UserLogIn';

// const Booking = () =>{
//     const[bookings, setBookings] = useState([])

//     useEffect(() => {
//         getBooking()
//     }, [])

//     const getBooking = ()=>{
//         const id = sessionStorage.getItem("id")

//         axios.get(url + '/ticket/bookings/'+ id).then((response) => {
//             const result = response.data
//             if(result.status ==='success'){
//                 console.log(result.data)
//                 setBookings(result.data)
//             }else{
//                 console.log(result.error)
//                 alert('Tickets not found!')
//             }
//         })
//     }
//     if(sessionStorage.getItem("id")!==null){
//     return(
//         <div>
//             <UserNavbar/>
//             <div className="container row">
//             <div className="col-md-4="></div>
//             <div className="list11 col-md-4">
//                 <h3 className="label1">My Bookings</h3>
//                 <table className="table table-bordered table-responsive table-striped table-hover">
//                     <thead className="table-dark">
//                         <tr>
//                             <th>Bus No</th>
//                             <th>From</th>
//                             <th>To</th>
//                             <th>Date</th>
//                             <th>Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
                        
//                             {bookings.map((booking) => {
//                                 return (
//                                 <tr>
//                                     <td>{booking.busNo}</td>
//                                     <td>{booking.fromStation}</td>
//                                     <td>{booking.toStation}</td>
//                                     <td>{booking.date}</td>
//                                     <td>{booking.ticketPrice}</td>
//                                 </tr>
//                                 )
//                             })}
//                     </tbody>
//                 </table>
//                 <Link to='/routes'>
//                     <a className="btn btn-warning btn-md">Back</a>
//                 </Link>
//             </div>
//             <div className="col-md-4"></div>
//             </div>
//         </div>
//     )}else{return(<UserLogIn/>)}
// }
// export default Booking


import { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../../common/Constants';
import UserNavbar from '../UserNavbar/UserNavbar';
import { Link } from 'react-router-dom';
import './Booking.css';
import UserLogIn from './../UserLogIn/UserLogIn';

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBooking();
  }, []);

  const getBooking = () => {
    const id = sessionStorage.getItem("id");

    axios.get(url + '/ticket/bookings/' + id).then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setBookings(result.data);
      } else {
        console.log(result.error);
        alert('Tickets not found!');
      }
    });
  };

  if (sessionStorage.getItem("id") !== null) {
    return (
      <div>
        <UserNavbar />
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white"><h3 className="text-center mb-4">My Bookings</h3></div>
                <div className="card-body">
                  
                  <table className="table table-hover table-bordered text-center">
                    <thead className="thead-dark">
                      <tr style={{backgroundColor:"#7e22ce",}}>
                        <th style={{color:"white"}}>Bus No</th>
                        <th style={{color:"white"}}>From</th>
                        <th style={{color:"white"}}>To</th>
                        <th style={{color:"white"}}>Date</th>
                        <th style={{color:"white"}}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr key={index}>
                          <td>{booking.busNo}</td>
                          <td>{booking.fromStation}</td>
                          <td>{booking.toStation}</td>
                          <td>{booking.date}</td>
                          <td>{booking.ticketPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="text-center mt-4">
                    <Link to='/routes'>
                      <button className="btn btn-warning btn-md">Back</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (<UserLogIn />);
  }
}

export default Booking;
