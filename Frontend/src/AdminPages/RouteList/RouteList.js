// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";
// import './RouteList.css' 
// import RouteRow from "../RouteRow";
// import Navbar from "../layout/Navbar";


// const RouteList = () => {

//     const [routes, setRoute] = useState([]);

//     useEffect(() => {
//        loadRoutes();
//     }, []);

//     const loadRoutes = () => {
//         axios.get('http://localhost:8080/route/getroutes').then((response) => {
//           const result = response.data
//           if (result.status === 'success') {
//             setRoute(result.data)
//           } else {
//             alert('error while loading list of Routes')
//           }
//         })
//       }

     
    
//     return(
//         <div>
//             <Navbar/>
//         <div className="list1">
//             <h3 className="label1">Route List</h3>
//             <table className="table table-responsive table-striped table-hover styled-table">
//                 <thead>
//                     <tr>
//                         <th>Route Id</th>
//                         <th>From</th>
//                         <th>To</th>
//                         <th>Add Picking Point</th>
//                         <th>Add Dropping Point</th>
//                         {/* <th>View SubStations</th> */}
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                    {routes.map((route) => {
//                        return <RouteRow route = {route}/>
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
// };

// export default RouteList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './RouteList.css';
import RouteRow from "../RouteRow";
import Navbar from "../layout/Navbar";

const RouteList = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    loadRoutes();
  }, []);

  const loadRoutes = () => {
    axios.get('http://localhost:8080/route/getroutes').then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setRoutes(result.data);
      } else {
        alert('Error while loading list of Routes');
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-primary text-center text-white">
            <h3 className="mb-0">Route List</h3>
          </div>
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead style={{backgroundColor:"#7e22ce"}}>
                <tr >
                  <th style={{color:"white"}}>Route Id</th>
                  <th style={{color:"white"}}>From</th>
                  <th style={{color:"white"}}>To</th>
                  <th style={{color:"white"}}>Add Picking Point</th>
                  <th style={{color:"white"}}>Add Dropping Point</th>
                  <th style={{color:"white"}}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route) => {
                  return <RouteRow key={route.id} route={route} />;
                })}
              </tbody>
            </table>
            <div className="mt-3">
              <Link to="/agencylist" className="btn btn-warning">Back To HomePage</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteList;
