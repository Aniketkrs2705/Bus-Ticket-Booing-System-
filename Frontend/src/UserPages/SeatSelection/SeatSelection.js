// import {useState, useEffect} from 'react'
// import { useHistory } from 'react-router'
// import './SeatSelection.css'
// import axios from 'axios'
// import { url } from './../../common/Constants';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';

// const SeatSelection = () => {
//     const trip = JSON.parse(sessionStorage.getItem("bus"))
//     const [reservedSeat, setReservedSeat] = useState([])
//     const [seatNumber, setSeatnumber] = useState([])
//     const [bookedSeats, setBookedSeats] = useState([])
    
//     const history = useHistory() 

//     useEffect(() => {
//         getBookedSeats()
//     },[])

//     const getBookedSeats = ()=> {
//         axios.get(url + '/trip/getseats/'+ trip.tripId).then((response)=>{
//             const result = response.data
//             if(result.status === 'success'){
//                 console.log(result.data)
//                 setBookedSeats(result.data)
//             }else{
//                 console.log(result.error)
//             }
//         })
//     }

//     const handleSubmitDetails = e => {
//         if(seatNumber.length === 0) {
//             alert("Select Seat")
//         }else{
//             sessionStorage.setItem("reservedSeats",seatNumber)
//             history.push("/travellingdetails")
//         }
//     }

//     const getSeatNumber = (e) => {
//         let newSeat = e.target.value
//         if (reservedSeat.includes(newSeat)) {
//             e.disabled = true
//             if (seatNumber.includes(newSeat)) {
//                 setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
//             }
//         } else {
//             setSeatnumber([...seatNumber, newSeat])
//             setReservedSeat([...reservedSeat, newSeat])
//         }
//     }
//     if(sessionStorage.getItem("id")!==null){
//     return (
//         <div>
//             <UserNavbar/>
//             <div className="container row">
//             <div class="col-md-3 booked">
//                 <table className="table table-striped">
//                     <tr>
//                         <th className="label2"><h5>Already Booked Seats :</h5></th>
//                     </tr>
//                     <tr>
//                         <td className="bs">{
//                             bookedSeats.map((bs)=>{
//                                 return(
//                                     bs + " " 
//                                 )
//                             })
//                         }
//                         </td>
//                     </tr>
//                 </table>
//             </div>
//             <div class="col-md-6">
//             <div className="ss">
//                 <div className="row">
//                     <div className="column1">
//                         <div className="plane">
//             <h3 className="label1">Select Seats</h3>
//                             <form onChange={e => getSeatNumber(e)}>
//                                 <ol>
//                                     <li className="row row--1">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox" id="1" value="1" />
//                                                 <label htmlFor="1">1</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" id="2" value="2" />
//                                                 <label htmlFor="2">2</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="3" id="3" />
//                                                 <label htmlFor="3">3</label>
//                                             </li>
//                                         </ol>
//                                     </li>
//                                     <li className="row row--2">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="4" id="4" />
//                                                 <label htmlFor="4">4</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="5" id="5" />
//                                                 <label htmlFor="5">5</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="6" id="6" />
//                                                 <label htmlFor="6">6</label>
//                                             </li>
    
//                                         </ol>
//                                     </li>
//                                     <li className="row row--3">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox" value="7" id="7" />
//                                                 <label htmlFor="7">7</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="8" id="8" />
//                                                 <label htmlFor="8">8</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="9" id="9" />
//                                                 <label htmlFor="9">9</label>
//                                             </li>
    
//                                         </ol>
//                                     </li>
//                                     <li className="row row--4">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="10" id="10" />
//                                                 <label htmlFor="10">10</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="11" id="11" />
//                                                 <label htmlFor="11">11</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="12" id="12" />
//                                                 <label htmlFor="12">12</label>
//                                             </li>
    
//                                         </ol>
//                                     </li>
//                                     <li className="row row--5">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox" value="13" id="13" />
//                                                 <label htmlFor="13">13</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="14" id="14" />
//                                                 <label htmlFor="14">14</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="15" id="15" />
//                                                 <label htmlFor="15">15</label>
//                                             </li>
    
//                                         </ol>
//                                     </li>
//                                     <li className="row row--6">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="16" id="16" />
//                                                 <label htmlFor="16">16</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="17" id="17" />
//                                                 <label htmlFor="17">17</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="18" id="18" />
//                                                 <label htmlFor="18">18</label>
//                                             </li>
    
//                                         </ol>
//                                     </li>
//                                     <li className="row row--7">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox" value="19" id="19" />
//                                                 <label htmlFor="19">19</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="20" id="20" />
//                                                 <label htmlFor="20">20</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="21" id="21" />
//                                                 <label htmlFor="21">21</label>
//                                             </li>
    
//                                         </ol>
//                                     </li>
//                                     <li className="row row--8">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox" value="22" id="22" />
//                                                 <label htmlFor="22">22</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="23" id="23" />
//                                                 <label htmlFor="23">23</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="24" id="24" />
//                                                 <label htmlFor="24">24</label>
//                                             </li>
    
//                                         </ol>
//                                     </li>
//                                     <li className="row row--9">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox" value="25" id="25" />
//                                                 <label htmlFor="25">25</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="26" id="26" />
//                                                 <label htmlFor="26">26</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox"  value="27" id="27" />
//                                                 <label htmlFor="27">27</label>
//                                             </li>
    
//                                         </ol>
//                                     </li>
//                                     <li className="row row--10">
//                                         <ol className="seats" type="A">
//                                             <li className="seat">
//                                                 <input type="checkbox" value="28" id="28" />
//                                                 <label htmlFor="28">28</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="29" id="29" />
//                                                 <label htmlFor="29">29</label>
//                                             </li>
//                                             <li className="seat">
//                                                 <input type="checkbox" value="30" id="30" />
//                                                 <label htmlFor="30">30</label>
//                                             </li>
//                                         </ol>
//                                     </li>
//                                 </ol>
//                             </form>
//                         </div> 
//                     </div>
//                     <div className="column2">
//                         <div className="seatInfo">
//                             <div>
//                                 <button onClick={e => handleSubmitDetails(e)} className="btn btn-success info seatBT">
//                                     Confirm
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-3"></div>
//         </div>
//         </div>
//     )}else{return(<UserLogIn/>)}
// }
// export default SeatSelection


// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
// import './SeatSelection.css';
// import axios from 'axios';
// import { url } from './../../common/Constants';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';

// const SeatSelection = () => {
//   const trip = JSON.parse(sessionStorage.getItem("bus"));
//   const [reservedSeat, setReservedSeat] = useState([]);
//   const [seatNumber, setSeatnumber] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]);

//   const history = useHistory();

//   useEffect(() => {
//     getBookedSeats();
//   }, []);

//   const getBookedSeats = () => {
//     axios.get(url + '/trip/getseats/' + trip.tripId).then((response) => {
//       const result = response.data;
//       if (result.status === 'success') {
//         setBookedSeats(result.data);
//       } else {
//         console.log(result.error);
//       }
//     });
//   };

//   const handleSubmitDetails = (e) => {
//     if (seatNumber.length === 0) {
//       alert("Select Seat");
//     } else {
//       sessionStorage.setItem("reservedSeats", seatNumber);
//       history.push("/travellingdetails");
//     }
//   };

//   const getSeatNumber = (e) => {
//     let newSeat = e.target.value;
//     if (reservedSeat.includes(newSeat)) {
//       e.disabled = true;
//       if (seatNumber.includes(newSeat)) {
//         setSeatnumber(seatNumber.filter(seat => seat !== newSeat));
//       }
//     } else {
//       setSeatnumber([...seatNumber, newSeat]);
//       setReservedSeat([...reservedSeat, newSeat]);
//     }
//   };

//   if (sessionStorage.getItem("id") !== null) {
//     return (
//       <div>
//         <UserNavbar />
//         <div className="container my-5">
//           <div className="row">
//             <div className="col-md-4">
//               <div className="card shadow-sm mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">Already Booked Seats</h5>
//                   <ul className="list-group list-group-flush">
//                     {bookedSeats.map((seat, index) => (
//                       <li key={index} className="list-group-item">{seat}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-8">
//               <div className="card shadow-sm mb-4">
//                 <div className="card-body">
//                   <h3 className="text-center mb-4">Select Seats</h3>
//                   <form onChange={e => getSeatNumber(e)}>
//                     <div className="seat-grid">
//                       {Array.from({ length: 33 }, (_, i) => i + 1).map(seat => (
//                         <div className="seat-item" key={seat}>
//                           <input
//                             type="checkbox"
//                             id={seat}
//                             value={seat}
//                             className="seat-checkbox"
//                             disabled={bookedSeats.includes(seat.toString())}
//                           />
//                           <label
//                             htmlFor={seat}
//                             className={`seat-label ${bookedSeats.includes(seat.toString()) ? 'booked' : ''}`}
//                           >
//                             {seat}
//                           </label>
//                         </div>
//                       ))}
//                     </div>
//                   </form>
//                   <div className="text-center mt-4">
//                     <button onClick={handleSubmitDetails} className="btn btn-success">Confirm</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (<UserLogIn />);
//   }
// };

// export default SeatSelection;


// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
// import './SeatSelection.css';
// import axios from 'axios';
// import { url } from './../../common/Constants';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';

// const SeatSelection = () => {
//     const trip = JSON.parse(sessionStorage.getItem("bus"));
//     const [reservedSeat, setReservedSeat] = useState([]);
//     const [seatNumber, setSeatnumber] = useState([]);
//     const [bookedSeats, setBookedSeats] = useState([]);

//     const history = useHistory();

//     useEffect(() => {
//         getBookedSeats();
//     }, []);

//     const getBookedSeats = () => {
//         axios.get(url + '/trip/getseats/' + trip.tripId).then((response) => {
//             const result = response.data;
//             if (result.status === 'success') {
//                 setBookedSeats(result.data);
//             } else {
//                 console.log(result.error);
//             }
//         });
//     };

//     const handleSubmitDetails = (e) => {
//         if (seatNumber.length === 0) {
//             alert("Select Seat");
//         } else {
//             sessionStorage.setItem("reservedSeats", seatNumber);
//             history.push("/travellingdetails");
//         }
//     };

//     const getSeatNumber = (e) => {
//         let newSeat = e.target.value;
//         if (reservedSeat.includes(newSeat)) {
//             e.disabled = true;
//             if (seatNumber.includes(newSeat)) {
//                 setSeatnumber(seatNumber.filter(seat => seat !== newSeat));
//             }
//         } else {
//             setSeatnumber([...seatNumber, newSeat]);
//             setReservedSeat([...reservedSeat, newSeat]);
//         }
//     };

//     if (sessionStorage.getItem("id") !== null) {
//         return (
//             <div>
//                 <UserNavbar />
//                 <div className="container my-5">
//                     <div className="row">
//                         <div className="col-md-4">
//                             <div className="card shadow-sm mb-4">
//                                 <div className="card-body">
//                                     <h5 className="card-title">Seat Status</h5>
//                                     <div className="seat-status">
//                                         <div className="seat-label booked">Booked</div>
//                                         <div className="seat-label available">Available</div>
//                                         <div className="seat-label selected">Selected</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card shadow-sm mb-4">
//                                 <div className="card-body">
//                                     <h3 className="text-center mb-4">Select Seats</h3>
//                                     <form onChange={e => getSeatNumber(e)}>
//                                         <div className="seat-grid">
//                                             <div className="seat-header">Driver Seat</div>
//                                             {Array.from({ length: 44 }, (_, i) => i + 1).map(seat => (
//                                                 <div className={`seat-item ${seat % 2 === 1 ? 'lower' : 'upper'}`} key={seat}>
//                                                     <input
//                                                         type="checkbox"
//                                                         id={seat}
//                                                         value={seat}
//                                                         className="seat-checkbox"
//                                                         disabled={bookedSeats.includes(seat.toString())}
//                                                     />
//                                                     <label
//                                                         htmlFor={seat}
//                                                         className={`seat-label ${bookedSeats.includes(seat.toString()) ? 'booked' : 'available'}`}
//                                                     >
//                                                         {seat}
//                                                     </label>
//                                                 </div>
//                                             ))}
//                                             <div className="seat-footer">Back Side</div>
//                                         </div>
//                                     </form>
//                                     <div className="text-center mt-4">
//                                         <button onClick={handleSubmitDetails} className="btn btn-success">Confirm</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     } else {
//         return (<UserLogIn />);
//     }
// };

// export default SeatSelection;


import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './SeatSelection.css';
import axios from 'axios';
import { url } from './../../common/Constants';
import UserNavbar from './../UserNavbar/UserNavbar';
import UserLogIn from './../UserLogIn/UserLogIn';

const SeatSelection = () => {
    const trip = JSON.parse(sessionStorage.getItem("bus"));
    const [reservedSeat, setReservedSeat] = useState([]);
    const [seatNumber, setSeatnumber] = useState([]);
    const [bookedSeats, setBookedSeats] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getBookedSeats();
    }, []);

    const getBookedSeats = () => {
        axios.get(url + '/trip/getseats/' + trip.tripId).then((response) => {
            const result = response.data;
            if (result.status === 'success') {
                setBookedSeats(result.data);
            } else {
                console.log(result.error);
            }
        });
    };

    const handleSubmitDetails = (e) => {
        if (seatNumber.length === 0) {
            alert("Select Seat");
        } else {
            sessionStorage.setItem("reservedSeats", seatNumber);
            history.push("/travellingdetails");
        }
    };

    const getSeatNumber = (e) => {
        let newSeat = e.target.value;
        if (reservedSeat.includes(newSeat)) {
            e.disabled = true;
            if (seatNumber.includes(newSeat)) {
                setSeatnumber(seatNumber.filter(seat => seat !== newSeat));
            }
        } else {
            setSeatnumber([...seatNumber, newSeat]);
            setReservedSeat([...reservedSeat, newSeat]);
        }
    };

    if (sessionStorage.getItem("id") !== null) {
        return (
            <div>
                <UserNavbar />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow-sm mb-4">
                                <div className="card-body" style={{backgroundColor:"#FFF0E0"}}>
                                    <h5 className="card-title">Seat Status</h5>
                                    <div className="seat-status">
                                        <div className="seat-label booked">Booked</div>
                                        <div className="seat-label available">Available</div>
                                        <div className="seat-label selected">Selected</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card shadow-sm mb-4">
                                    <div className="card-header" style={{backgroundColor:"#7e22ce"}}>
                                    <h3 className="text-center text-white mb-4">Select Seats</h3>
                                    </div>
                                <div className="card-body" style={{backgroundColor:"#FFD1A3"}}>
                                    <form onChange={e => getSeatNumber(e)}>
                                        <div className="deck-header" >Lower Deck</div>
                                        <div className="seat-grid">
                                            <div className="seat-icon">ꔮ</div>
                                            {Array.from({ length: 22 }, (_, i) => i + 1).map(seat => (
                                                <div className={`seat-item ${seat % 2 === 1 ? 'lower' : 'upper'}`} key={seat}>
                                                    <input
                                                        type="checkbox"
                                                        id={seat}
                                                        value={seat}
                                                        className="seat-checkbox"
                                                        disabled={bookedSeats.includes(seat.toString())}
                                                    />
                                                    <label
                                                        htmlFor={seat}
                                                        className={`seat-label ${bookedSeats.includes(seat.toString()) ? 'booked' : 'available'}`}
                                                    >
                                                        {seat}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="deck-header">Upper Deck</div>
                                        <div className="seat-grid">
                                            {Array.from({ length: 22 }, (_, i) => i + 23).map(seat => (
                                                <div className={`seat-item ${seat % 2 === 1 ? 'lower' : 'upper'}`} key={seat}>
                                                    <input
                                                        type="checkbox"
                                                        id={seat}
                                                        value={seat}
                                                        className="seat-checkbox"
                                                        disabled={bookedSeats.includes(seat.toString())}
                                                    />
                                                    <label
                                                        htmlFor={seat}
                                                        className={`seat-label ${bookedSeats.includes(seat.toString()) ? 'booked' : 'available'}`}
                                                    >
                                                        {seat}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </form>
                                    <div className="text-center mt-4">
                                        <button onClick={handleSubmitDetails} className="btn btn-success">Confirm</button>
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
};

export default SeatSelection;
