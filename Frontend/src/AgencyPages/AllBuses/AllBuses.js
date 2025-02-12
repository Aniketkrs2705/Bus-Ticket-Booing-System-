// import InnerNavbar from "../InnerNavbar/InnerNavbar"
// import { useHistory } from 'react-router-dom'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import './AllBuses.css'

// const AllBuses = () => {
//   let history = useHistory()
//   const [buses, setBuses] = useState([])
//   useEffect(() => {
//     getBuses()
//   }, [])

//   const deleteBus = (bus) => {
//     sessionStorage.setItem("bus",JSON.stringify(bus))
//     history.push("/bus/deleteBus")
//   }

//   const getBuses = () => {
//     const id= sessionStorage.getItem("id")
//     axios.get('http://localhost:8080' + '/bus/agency/data/' + id).then((response) => {
//       const result = response.data
//       if (result.status === 'success') {
//         setBuses(result.data)
//       } else {
//         alert('Select All Fields')
//       }
//     })
//   }

//   return (
//     <div className="body1">
//       <InnerNavbar />
//       <div class="container">



//         <div className="list1">
//           <h3 className="label1">All Buses</h3>
//           <table className="table table-responsive table-striped table-hover styled-table">
//             <thead >
//               <tr>
//                 <th>Bus Id</th>
//                 <th>Bus Number</th>
//                 <th>Bus Type</th>
//                 <th>Bus Model</th>
//                 <th>###</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 buses.map((bus) => {
//                   return (
//                     <tr>
//                       <td>{bus.busId}</td>
//                       <td>{bus.busNo}</td>
//                       <td>{bus.type}</td>
//                       <td>{bus.model}</td>
//                       <td><button type="button" className="btn deleteBtn" onClick={() => { deleteBus(bus) }}>Delete</button></td>
//                     </tr>
//                   )
//                 })
//               }
//             </tbody>
//           </table>
//         </div>

        

//       </div>

//     </div>


//   )

// }

// export default AllBuses



import InnerNavbar from "../InnerNavbar/InnerNavbar";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import './AllBuses.css';

const AllBuses = () => {
  let history = useHistory();
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    getBuses();
  }, []);

  const deleteBus = (bus) => {
    sessionStorage.setItem("bus", JSON.stringify(bus));
    history.push("/bus/deleteBus");
  };

  const getBuses = () => {
    const id = sessionStorage.getItem("id");
    axios.get('http://localhost:8080' + '/bus/agency/data/' + id).then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setBuses(result.data);
      } else {
        alert('Select All Fields');
      }
    });
  };

  return (
    <div className="body1">
      <InnerNavbar />
      <div className="container mt-4">
        <div className="card">
          <div className="card-header text-white text-center" style={{backgroundColor:"#7e22ce"}}>
            <h3 className="">All Buses</h3>
          </div>
          <div className="card-body">
            <table className="table table-responsive table-striped table-hover styled-table">
              <thead className="">
                <tr  style={{backgroundColor:"#7e22ce"}}>
                  <th style={{color:"white"}}>Bus Id</th>
                  <th style={{color:"white"}}>Bus Number</th>
                  <th style={{color:"white"}}>Bus Type</th>
                  <th style={{color:"white"}}>Bus Model</th>
                  <th style={{color:"white"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  buses.map((bus) => {
                    return (
                      <tr key={bus.busId}>
                        <td>{bus.busId}</td>
                        <td>{bus.busNo}</td>
                        <td>{bus.type}</td>
                        <td>{bus.model}</td>
                        <td>
                          <button type="button" className="btn btn-danger" onClick={() => { deleteBus(bus) }}>
                            Delete
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

export default AllBuses;
