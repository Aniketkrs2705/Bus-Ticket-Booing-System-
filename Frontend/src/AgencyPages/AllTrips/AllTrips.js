// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import InnerNavbar from '../InnerNavbar/InnerNavbar'
// import { useHistory } from 'react-router-dom';
// import { url } from './../Common/Constant';
// import './AllTrips.css'

// const AllTrips =()=>{
//   const history= useHistory()
//     const [trips, setTrips] = useState([])
     
//     useEffect(() => {
//         getTrips()
//       }, [])
//       const getTrips = () => {
//         const id= sessionStorage.getItem("id")
//         axios.get(url + '/agency/trips/all/' + id).then((response) => {
//           const result = response.data
//           if (result.status === 'success') {
//             setTrips(result.data)
//           } else {
//             alert('error while loading list of trips')
//           }
//         })
//     }
   
//     const viewTrip=(trip)=>{
//       console.log(trip)
//       sessionStorage.setItem("trip",JSON.stringify(trip))
//       history.push("/agency/viewTrip")
//     }

    
// return(
//     <div className="body1">

//     <InnerNavbar/>      
//     <div class="container row">
//     <div className="list3">
//     <h3 className="label1">All Trip Schedule</h3>
//     <table className="table table-responsive table-striped table-hover styled-table">
//         <thead>
//             <tr>
//                 <th>Trip Id</th>
//                 <th>Bus Number</th>
//                 <th>Bus Type</th>
//                 <th>From</th>
//                 <th>To</th>
//                 <th>Date</th>
//                 <th>Arrival Time</th>
//                 <th>Departure Time</th>
//                 <th>Price</th>
//                 <th>Booked</th>
//                 <th>business</th>
//                 <th>###</th>
//             </tr>
//         </thead>
//         <tbody>
//           {
//               trips.map((trip)=>{
//                   return (
//                       <tr>
//                           <td>{trip.tripId}</td>
//                           <td>{trip.busno}</td>
//                           <td>{trip.busType}</td>
//                           <td>{trip.fromStation}</td>
//                           <td>{trip.toStation}</td>
//                           <td>{trip.date}</td>
//                           <td>{trip.arrivalTime}</td>
//                           <td>{trip.departureTime}</td>
//                           <td>{trip.ticketPrice}</td>
//                           <td>{trip.bookedSeatsCount}</td>
//                           <td>{trip.totalBusiness}</td>
//                           <td><button type="button" className="viewBtn"  onClick={()=>{viewTrip(trip)}}>Details</button></td>
//                         </tr>
//                   )
//               })
//           }

//         </tbody>
//     </table>
// </div>
//     </div>


// </div>
// )
// }

// export default AllTrips


import axios from 'axios';
import { useState, useEffect } from 'react';
import InnerNavbar from '../InnerNavbar/InnerNavbar';
import { useHistory } from 'react-router-dom';
import { url } from './../Common/Constant';
import './AllTrips.css';

const AllTrips = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    const id = sessionStorage.getItem("id");
    axios.get(url + '/agency/trips/all/' + id).then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setTrips(result.data);
      } else {
        alert('Error while loading list of trips');
      }
    });
  };

  const viewTrip = (trip) => {
    console.log(trip);
    sessionStorage.setItem("trip", JSON.stringify(trip));
    history.push("/agency/viewTrip");
  };

  return (
    <div className="body1">
      <InnerNavbar />
      <div className="container mt-4">
        <div className="card">
          <div className="card-header text-white text-center" style={{backgroundColor:"#7e22ce"}}>
            <h3 className="">All Trip Schedule</h3>
          </div>
          <div className="card-body">
            <table className="table table-responsive table-striped table-hover styled-table">
              <thead >
                <tr style={{backgroundColor:"#7e22ce"}}>
                  <th style={{color:"white"}}>Trip Id</th>
                  <th style={{color:"white"}}>Bus Number</th>
                  <th style={{color:"white"}}>Bus Type</th>
                  <th style={{color:"white"}}>From</th>
                  <th style={{color:"white"}}>To</th>
                  <th style={{color:"white"}}>Date</th>
                  <th style={{color:"white"}}>Arrival Time</th>
                  <th style={{color:"white"}}>Departure Time</th>
                  <th style={{color:"white"}}>Price</th>
                  <th style={{color:"white"}}>Booked</th>
                  <th style={{color:"white"}}>Business</th>
                  <th style={{color:"white"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  trips.map((trip) => {
                    return (
                      <tr key={trip.tripId}>
                        <td>{trip.tripId}</td>
                        <td>{trip.busno}</td>
                        <td>{trip.busType}</td>
                        <td>{trip.fromStation}</td>
                        <td>{trip.toStation}</td>
                        <td>{trip.date}</td>
                        <td>{trip.arrivalTime}</td>
                        <td>{trip.departureTime}</td>
                        <td>{trip.ticketPrice}</td>
                        <td>{trip.bookedSeatsCount}</td>
                        <td>{trip.totalBusiness}</td>
                        <td>
                          <button type="button" className="btn btn-primary" onClick={() => { viewTrip(trip) }}>
                            Details
                          </button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTrips;
