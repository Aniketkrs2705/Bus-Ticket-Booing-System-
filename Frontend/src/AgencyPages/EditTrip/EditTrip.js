// import { useLocation,useHistory } from 'react-router-dom'
// import axios from 'axios'
// import { url } from '../Common/Constant'
// import InnerNavbar from "../InnerNavbar/InnerNavbar"
// import { useState,useEffect } from 'react'
// const EditTrip= ()=>{
// let history=useHistory()
//     const location = useLocation()
//     const trip =JSON.parse(sessionStorage.getItem("trip"))
//     const [buses, setBuses]=useState([])
//     const[stations,setStations]=useState([])
//     const[tripId, setTripId]=useState(trip.tripId)
//     const[busNo, setBusNo]=useState(trip.busno)
//     const[fromStation, setFromStation]=useState(trip.fromStation)
//     const[toStation, setToStation]=useState(trip.toStation)
//     const[date, setDate]=useState(trip.date)
//     const[arrivalTime, setArrivalTime]=useState(trip.arrivalTime)
//     const[departureTime, setDepartureTime]=useState(trip.departureTime)
//     const[ticketPrice, setTicketPrice]=useState(trip.ticketPrice)
//     useEffect(() => {
//         getBuses()
//         getStations()
        
//       }, [])
//       const getSelectedBus =(bus)=>{
//          //console.log(bus)
//          setBusNo(bus)
//          //console.log(busNo)
//       }
//       const getSelectedFromStation =(station)=>{
//         //console.log(station)
//         setFromStation(station)
//         //console.log(fromStation)
//      }
//      const getSelectedToStation =(station)=>{
//         console.log(station)
//         setToStation(station)
//         console.log(toStation)
//      }
//     const getBuses = () => {
//       const id= sessionStorage.getItem("id");
//         axios.get('http://localhost:8080' + '/bus/agency/'+id).then((response) => {
//           const result = response.data
//           if (result.status === 'success') {
//             setBuses(result.data)
//           } else {
//             alert('Select All Fields')
//           }
//         })
//     }
//     const getStations = () => {
//         const id= sessionStorage.getItem("id");
//         axios.get('http://localhost:8080' + '/station/all').then((response) => {
//           const result = response.data
//           if (result.status === 'success') {
//             setStations(result.data)
//           } else {
//             alert('Stations not found')
//           }
//         })
//     }
//     const confirmEdit = () => {
//         if (busNo==="") {
//           alert('enter Bus No')
//         } else if (fromStation === "") {
//           alert('enter from Station')
//         } else if (toStation === "") {
//           alert('select an toStation')
//         } else if (date==="") {
//           alert('select Date')
//         }else if (arrivalTime==="") {
//             alert('select Arrival Time')
//           }else if (departureTime==="") {
//             alert('select Departure Time')
//           }else if (ticketPrice===0) {
//             alert('select Ticket Price')
//           } else {
//           const data = new FormData()
//           data.append('tripId', tripId)
//           data.append('date', date)
//           data.append('arrivalTime', arrivalTime)
//           data.append('departureTime', departureTime)
//           data.append('ticketPrice', ticketPrice)
//           data.append('busno', busNo)
//           data.append('fromStation', fromStation)
//           data.append('toStation', toStation)
//           // send the album info to the API
//           axios.post(url + '/trip/edit', data).then((response) => {
//             const result = response.data
//             if (result.status === 'success') {
//               alert('successfully added changes Trip')
//               history.push('/agency/home')
//             } else {
//               console.log(result.error)
//               alert('Select All Fields')
//             }
//           })
//         }
//       }  
  
//     return(
//         <div>
//         <InnerNavbar />
//         <div class="container row">
//           <div className="list3">
//             <h3 className="label1">Edit Trip</h3>
  
//             <form className="form-control">
//               <table className="table table-responsive table-striped table-hover styled-table">
//                 <thead>
//                   <tr>
//                     <th></th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td> <label>Bus</label></td>
//                     <td><div className="form-group">
//                     <select class="form-select" aria-label="Default select example" onChange={(e)=>{
//                                             getSelectedBus(e.target.value)
//                                         }}>
//                                        <option selected>{trip.busno}</option>
//                                        {
//                                            buses.map((bus)=>{
//                                             return(
//                                                 <option value={bus}>{bus}</option>
//                                             )
//                                            })
//                                        }
                                       
//                                     </select>
//                     </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>From</label> </td>
//                     <td> <div className="form-group">
//                     <select class="form-select" aria-label="Default select example" onChange={(e)=>{
//                                             getSelectedFromStation(e.target.value)
//                                         }}>
//                                         <option selected>{trip.fromStation}</option>
//                                         {
//                                             stations.map((station)=>{
//                                                 return(
//                                                     <option value={station}>{station}</option>
//                                                 )
//                                             })
//                                         }
//                                     </select>
//                     </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>To</label></td>
//                     <td> <div className="form-group">
  
//                     <select class="form-select" aria-label="Default select example" onChange={(e)=>{
//                                             getSelectedToStation(e.target.value)
//                                         }}>
//                                         <option selected>{trip.toStation}</option>
//                                         {
//                                             stations.map((station)=>{
//                                                 return(
//                                                     <option value={station}>{station}</option>
//                                                 )
//                                             })
//                                         }
//                                     </select>
//                     </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>date</label></td>
//                     <td><div className="form-group">
  
//                     <input type="date" className="form-control" onChange={(e)=>{
//                                              setDate(e.target.value)
//                                          }} />
//                     </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>Arrival Time</label></td>
//                     <td><div className="form-group">
  
//                     <input type="time" className="form-control"onChange={(e)=>{
//                                              setArrivalTime(e.target.value)
//                                          }} />
//                     </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>Departure Time</label></td>
//                     <td><div className="form-group">
  
//                     <input type="time" className="form-control" onChange={(e)=>{
//                                              setDepartureTime(e.target.value)
//                                          }}  />
//                     </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>Ticket Price</label></td>
//                     <td><div className="form-group">
  
//                     <input type="number" className="form-control"  onChange={(e)=>{
//                                              setTicketPrice(e.target.value)
//                                          }}  />
//                     </div></td>
//                   </tr>
//                   <tr>
//                     <td></td>
//                     <td><div className="button">
//                       <br />
//                       <button type="button" className="addBtn" onClick={confirmEdit}>Add Trip</button>
//                     </div></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </form>
//           </div>
//         </div>
  
  
//       </div>
  




//     )
// }


// export default EditTrip


import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Common/Constant';
import InnerNavbar from "../InnerNavbar/InnerNavbar";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './EditTrip.css';

const EditTrip = () => {
    let history = useHistory();
    const location = useLocation();
    const trip = JSON.parse(sessionStorage.getItem("trip"));
    const [buses, setBuses] = useState([]);
    const [stations, setStations] = useState([]);
    const [tripId, setTripId] = useState(trip.tripId);
    const [busNo, setBusNo] = useState(trip.busno);
    const [fromStation, setFromStation] = useState(trip.fromStation);
    const [toStation, setToStation] = useState(trip.toStation);
    const [date, setDate] = useState(trip.date);
    const [arrivalTime, setArrivalTime] = useState(trip.arrivalTime);
    const [departureTime, setDepartureTime] = useState(trip.departureTime);
    const [ticketPrice, setTicketPrice] = useState(trip.ticketPrice);

    useEffect(() => {
        getBuses();
        getStations();
    }, []);

    const getSelectedBus = (bus) => {
        setBusNo(bus);
    };

    const getSelectedFromStation = (station) => {
        setFromStation(station);
    };

    const getSelectedToStation = (station) => {
        setToStation(station);
    };

    const getBuses = () => {
        const id = sessionStorage.getItem("id");
        axios.get(url + '/bus/agency/' + id).then((response) => {
            const result = response.data;
            if (result.status === 'success') {
                setBuses(result.data);
            } else {
                Swal.fire('Error', 'Select All Fields', 'error');
            }
        });
    };

    const getStations = () => {
        const id = sessionStorage.getItem("id");
        axios.get(url + '/station/all').then((response) => {
            const result = response.data;
            if (result.status === 'success') {
                setStations(result.data);
            } else {
                Swal.fire('Error', 'Stations not found', 'error');
            }
        });
    };

    const confirmEdit = () => {
        if (busNo === "") {
            Swal.fire('Error', 'Enter Bus No', 'error');
        } else if (fromStation === "") {
            Swal.fire('Error', 'Enter From Station', 'error');
        } else if (toStation === "") {
            Swal.fire('Error', 'Select a To Station', 'error');
        } else if (date === "") {
            Swal.fire('Error', 'Select Date', 'error');
        } else if (arrivalTime === "") {
            Swal.fire('Error', 'Select Arrival Time', 'error');
        } else if (departureTime === "") {
            Swal.fire('Error', 'Select Departure Time', 'error');
        } else if (ticketPrice === 0) {
            Swal.fire('Error', 'Select Ticket Price', 'error');
        } else {
            const data = new FormData();
            data.append('tripId', tripId);
            data.append('date', date);
            data.append('arrivalTime', arrivalTime);
            data.append('departureTime', departureTime);
            data.append('ticketPrice', ticketPrice);
            data.append('busno', busNo);
            data.append('fromStation', fromStation);
            data.append('toStation', toStation);

            axios.post(url + '/trip/edit', data).then((response) => {
                const result = response.data;
                if (result.status === 'success') {
                    Swal.fire('Success', 'Successfully added changes to Trip', 'success').then(() => {
                        history.push('/agency/home');
                    });
                } else {
                    Swal.fire('Error', 'Select All Fields', 'error');
                }
            });
        }
    };

    return (
        <div>
            <InnerNavbar />
            <div className="container mt-4 w-50 mx-auto">
                <div className="card">
                    <div className="card-header text-white text-center" style={{backgroundColor:"#7e22ce"}}>
                        <h3 className="">Edit Trip</h3>
                    </div>
                    <div className="card-body">
                        <form className="form">
                            <div className="mb-3">
                                <label className="form-label">Bus</label>
                                <select className="form-select" onChange={(e) => getSelectedBus(e.target.value)}>
                                    <option selected>{trip.busno}</option>
                                    {buses.map((bus) => (
                                        <option key={bus} value={bus}>{bus}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">From</label>
                                <select className="form-select" onChange={(e) => getSelectedFromStation(e.target.value)}>
                                    <option selected>{trip.fromStation}</option>
                                    {stations.map((station) => (
                                        <option key={station} value={station}>{station}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">To</label>
                                <select className="form-select" onChange={(e) => getSelectedToStation(e.target.value)}>
                                    <option selected>{trip.toStation}</option>
                                    {stations.map((station) => (
                                        <option key={station} value={station}>{station}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date</label>
                                <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Arrival Time</label>
                                <input type="time" className="form-control" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Departure Time</label>
                                <input type="time" className="form-control" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ticket Price</label>
                                <input type="number" className="form-control" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={confirmEdit}>Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTrip;
