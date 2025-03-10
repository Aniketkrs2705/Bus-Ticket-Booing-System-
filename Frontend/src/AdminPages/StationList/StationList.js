// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";
// import './StationList.css' 
// import StationRow from "../StationRow";
// import Navbar from "../layout/Navbar";


// const StationList = () => {

//     const [stations, setStation] = useState([]);

//     useEffect(() => {
//        loadStations();
//     }, []);

//     const loadStations = () => {
//         axios.get('http://localhost:8080/station/stationlist').then((response) => {
//           const result = response.data
//           if (result.status === 'success') {
//             setStation(result.data)
//           } else {
//             alert('error while loading list of station')
//           }
//         })
//       }

     
    
//     return(
//         <div>
            
//           <Navbar/>
//         <div>
//             <h3 >Station List</h3>
//             <table className="table table-responsive table-striped table-hover styled-table">
//                 <thead>
//                     <tr>
//                         <th>Station Id</th>
//                         <th>Station Name</th>
//                         <th>Station City</th>
//                         <th>Action</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                    {stations.map((station) => {
//                        return <StationRow station = {station}/>
//                    })}
//                 </tbody>
//                 <br></br>
//                 <Link to="/agencylist">
//           <a className="btn btn-warning">Back To HomePage</a>
//         </Link>

//             </table>
//         </div>
       
//         </div>
        
//     )
// }

// export default StationList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import './StationList.css';
import StationRow from "../StationRow";
import Navbar from "../layout/Navbar";

const StationList = () => {
    const [stations, setStation] = useState([]);

    useEffect(() => {
       loadStations();
    }, []);

    const loadStations = () => {
        axios.get('http://localhost:8080/station/stationlist').then((response) => {
          const result = response.data;
          if (result.status === 'success') {
            setStation(result.data);
          } else {
            alert('Error while loading list of stations');
          }
        });
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header text-center bg-primary text-white">
                        <h3>Station List</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead className="thead-dark" style={{backgroundColor:"#7e22ce"}}>
                                    <tr >
                                        <th style={{color:"white"}}>Station Id</th>
                                        <th style={{color:"white"}}>Station Name</th>
                                        <th style={{color:"white"}}>Station City</th>
                                        <th style={{color:"white"}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stations.map((station) => (
                                        <StationRow key={station.id} station={station} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center mt-3">
                            <Link to="/agencylist" className="btn btn-warning">
                                Back To HomePage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StationList;
