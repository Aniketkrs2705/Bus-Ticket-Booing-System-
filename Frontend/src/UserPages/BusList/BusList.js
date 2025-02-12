// import {useState , useEffect} from 'react'
// import {useHistory } from 'react-router'
// import axios from 'axios'
// import  './BusList.css'
// import { url } from './../../common/Constants';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import Footer from './../Footer/Footer';
// import UserLogIn from './../UserLogIn/UserLogIn';  

// const BusList = () => {
//     const fromStation = sessionStorage.getItem("fromStation")
//     const toStation = sessionStorage.getItem("toStation")
//     const date = sessionStorage.getItem("date")
//     const history = useHistory()
//     const [buses,setBuses] = useState([])

//     useEffect(() => {
//         getBuses()
//     },[])

//     const getBuses = () => {
//         const data = new FormData()
//         data.append("fromStation",fromStation)
//         data.append("toStation",toStation)
//         data.append("date",date)

//         axios.post(url + '/trip/buses',data).then((response) => {
//             const result = response.data
//             if(result.status ==='success'){
//                 //alert('Successfull!')
//                 setBuses(result.data)
//             }else{
//                 console.log(result.error)
//                 alert('Failed!...Please try again!')
//             }
//         })
//     }
// function ViewSeats(bus){
//     sessionStorage.setItem("bus",JSON.stringify(bus))
//     history.push('/seatselection')
// }
// if(sessionStorage.getItem("id")!==null){
//     return(
//         <div>
//             <UserNavbar/>
//         <div className="container row">
//         <div className="col-md-4"></div>
//         <div className="col-md-4 list11">
//             <h3 className="label1">Available Buses</h3>
//             <table className="table table-responsive table-striped table-hover styled-table">
//                 <thead>
//                     <tr>
//                         <th>Agency Name</th>
//                         <th>Bus No</th>
//                         <th>Bus Type</th>
//                         <th>From</th>
//                         <th>To</th>
//                         <th>Departure Time</th>
//                         <th>Arrival Time</th>
//                         <th>Date</th>
//                         <th>Price</th>
//                         <th>View</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                         {buses.map((bus)=>{
//                             return(
//                                 <tr>
//                                 <td>{bus.name}</td>
//                                 <td>{bus.busNo}</td>
//                                 <td>{bus.busType}</td>
//                                 <td>{bus.fromStation}</td>
//                                 <td>{bus.toStation}</td>
//                                 <td>{bus.departureTime}</td>
//                                 <td>{bus.arrivalTime}</td>
//                                 <td>{bus.date}</td>
//                                 <td>{bus.ticketPrice}</td>
//                                 <td><button type="submit" className="btn btn-outline-success" onClick={()=>{ViewSeats(bus)}}>View Seats</button></td>
//                                 </tr>
//                             )
//                         })}
//                 </tbody>
//             </table>
//         </div>
//         <div className="col-md-4"></div>
//         </div>
//         <Footer/>
//         </div>
//     )}else{return(<UserLogIn/>)}
// }
// export default BusList


import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import './BusList.css';
import { url } from './../../common/Constants';
import UserNavbar from './../UserNavbar/UserNavbar';
import Footer from './../Footer/Footer';
import UserLogIn from './../UserLogIn/UserLogIn';

const BusList = () => {
  const fromStation = sessionStorage.getItem("fromStation");
  const toStation = sessionStorage.getItem("toStation");
  const date = sessionStorage.getItem("date");
  const history = useHistory();
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    getBuses();
  }, []);

  const getBuses = () => {
    const data = new FormData();
    data.append("fromStation", fromStation);
    data.append("toStation", toStation);
    data.append("date", date);

    axios.post(url + '/trip/buses', data).then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setBuses(result.data);
      } else {
        console.log(result.error);
        alert('Failed!...Please try again!');
      }
    });
  };

  const ViewSeats = (bus) => {
    sessionStorage.setItem("bus", JSON.stringify(bus));
    history.push('/seatselection');
  };

  if (sessionStorage.getItem("id") !== null) {
    return (
      <div>
        <UserNavbar />
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white" ><h3 className="text-center mb-4">Available Buses</h3></div>
                <div className="card-body">
                  
                  <table className="table table-hover table-bordered text-center">
                    <thead className="thead-dark">
                      <tr style={{backgroundColor:"#7e22ce",}}>
                        <th style={{color:"white"}}>Agency Name</th>
                        <th style={{color:"white"}}>Bus No</th>
                        <th style={{color:"white"}}>Bus Type</th>
                        <th style={{color:"white"}}>From</th>
                        <th style={{color:"white"}}>To</th>
                        <th style={{color:"white"}}>Departure Time</th>
                        <th style={{color:"white"}}>Arrival Time</th>
                        <th style={{color:"white"}}>Date</th>
                        <th style={{color:"white"}}>Price</th>
                        <th style={{color:"white"}}>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {buses.map((bus, index) => (
                        <tr key={index}>
                          <td>{bus.name}</td>
                          <td>{bus.busNo}</td>
                          <td>{bus.busType}</td>
                          <td>{bus.fromStation}</td>
                          <td>{bus.toStation}</td>
                          <td>{bus.departureTime}</td>
                          <td>{bus.arrivalTime}</td>
                          <td>{bus.date}</td>
                          <td>{bus.ticketPrice}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-success btn-sm"
                              onClick={() => ViewSeats(bus)}
                            >
                              View Seats
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <UserLogIn />;
  }
};

export default BusList;
