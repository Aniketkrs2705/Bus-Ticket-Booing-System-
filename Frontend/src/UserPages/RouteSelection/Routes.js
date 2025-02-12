// import '../RouteSelection/Routes.css'
// import {useState,useEffect} from 'react'
// import { useHistory } from 'react-router'
// import Footer from './../Footer/Footer';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import { url } from './../../common/Constants';
// import axios from 'axios' 
// import UserLogIn from './../UserLogIn/UserLogIn';

// const Routes = () => {
//   const [date,setDate] = useState("")
//   const [fromStation,setFromStation] = useState("")
//   const [toStation,setToStation] = useState("")
//   const [stations, setStation] = useState([])

//   const history = useHistory()

//   useEffect(() => {
//     getStations()
//   }, [])

//   const Trip = () => {
//     if(fromStation.length === 0){
//       alert("Select From Station")
//     }else if(toStation.length === 0){
//       alert("Select To Station")
//     }else if(date.length === 0){
//       alert("Select Date")
//     }else{
//       sessionStorage.setItem("fromStation", fromStation)
//       sessionStorage.setItem("toStation", toStation)
//       sessionStorage.setItem("date", date)
//       history.push('/buses')
//     }
//   }

//   const getStations = () =>{
//     axios.get(url + '/station/routes').then((response) => {
//       const result = response.data
//             if(result.status ==='success'){
//               setStation(result.data)
//               console.log(result.data)
//             }else{
//               console.log(result.error)
//               alert('Bus not found!')
//             }
//     })
//   }
//   const disablePastDate = () => {
//     const today = new Date();
//     const dd = String(today.getDate() + 1).padStart(2, "0");
//     const mm = String(today.getMonth() + 1).padStart(2, "0");
//     const yyyy = today.getFullYear();
//     return yyyy + "-" + mm + "-" + dd;
// }

//   if(sessionStorage.getItem("id")!==null){
//   return(
//       <div>
//         <UserNavbar/>
//         <div className="container row">
//           <div className="col-md-2"></div>
//           <div className="col-md-10">
//           <div className="input-group">
//             <span className="input-group-text bg-dark text-white" >From</span>
//             <input className="form-control" list="datalistOptions" placeholder="Select Source"  onChange={(event) => {setFromStation(event.target.value)}}/>
//             <datalist id="datalistOptions">
//               {stations.map((station)=>{
//                   return <option value={station.name}>{station.name}</option>
//               })}
//             </datalist>
            
//             <span className="input-group-text bg-dark text-white">To</span>
//             <input className="form-control" list="datalistOptions" placeholder="Select Destination" onChange={(event) => {setToStation(event.target.value)}}/>
//             <datalist id="datalistOptions">
//             {stations.map((station)=>{
//                   return <option value={station.name}>{station.name}</option>
//               })}
//             </datalist>
//             <span className="input-group-text bg-dark text-white">Date</span>
//             <input type="date" className="form-control" min={disablePastDate()} onChange={(event) => {setDate(event.target.value)}}/>
        
//             <button onClick={Trip} type="submit" className="btn btn-danger">Search Buses</button>
//           </div>
//           </div>
//           <div className="col-md-2"></div>
//           {/* <Footer/> */}
//         </div>
//       </div>
//   )}else{return(<UserLogIn/>)}
// }
// export default Routes


import '../RouteSelection/Routes.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from './../Footer/Footer';
import UserNavbar from './../UserNavbar/UserNavbar';
import { url } from './../../common/Constants';
import axios from 'axios';
import UserLogIn from './../UserLogIn/UserLogIn';

const Routes = () => {
  const [date, setDate] = useState("");
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [stations, setStation] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getStations();
  }, []);

  const Trip = () => {
    if (fromStation.length === 0) {
      alert("Select From Station");
    } else if (toStation.length === 0) {
      alert("Select To Station");
    } else if (date.length === 0) {
      alert("Select Date");
    } else {
      sessionStorage.setItem("fromStation", fromStation);
      sessionStorage.setItem("toStation", toStation);
      sessionStorage.setItem("date", date);
      history.push('/buses');
    }
  };

  const getStations = () => {
    axios.get(url + '/station/routes').then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setStation(result.data);
        console.log(result.data);
      } else {
        console.log(result.error);
        alert('Bus not found!');
      }
    });
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  if (sessionStorage.getItem("id") !== null) {
    return (
      <div>
        <UserNavbar />
        <div className="background-container">
          <div className="overlay">
            <div className="input-group-container">
          <h2 className="heading">India's No. 1 Online Bus Ticket Booking Site</h2>
              <div className="input-group">
                <span className="input-group-text bg-dark text-white" style={{height:50}}>From</span>
                <input className="form-control" list="datalistOptions" placeholder="Select Source" onChange={(event) => { setFromStation(event.target.value) }} style={{height:50}}/>
                <datalist id="datalistOptions">
                  {stations.map((station) => {
                    return <option key={station.name} value={station.name}>{station.name}</option>
                  })}
                </datalist>
                <span className="input-group-text bg-dark text-white" style={{height:50}}>To</span>
                <input className="form-control" list="datalistOptions" placeholder="Select Destination" onChange={(event) => { setToStation(event.target.value) }} style={{height:50}}/>
                <datalist id="datalistOptions">
                  {stations.map((station) => {
                    return <option key={station.name} value={station.name}>{station.name}</option>
                  })}
                </datalist>
                <span className="input-group-text bg-dark text-white" style={{height:50}}>Date</span>
                <input type="date" className="form-control" min={disablePastDate()} onChange={(event) => { setDate(event.target.value) }} style={{height:50}}/>
                <button onClick={Trip} type="submit" className="btn btn-danger">Search Buses</button>
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

export default Routes;

