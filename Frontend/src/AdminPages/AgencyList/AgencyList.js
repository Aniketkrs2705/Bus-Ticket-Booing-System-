// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from '../layout/Navbar'
// import './AgencyList.css' 
// import AgencyRow from "../AgencyRow";

// const AgencyList = () => {

//     const [agencies, setAgency] = useState([]);

//     useEffect(() => {
//        loadAgencies();
//     }, []);

//     const loadAgencies = () => {
//         axios.get('http://localhost:8080/agency/agencylist').then((response) => {
//           const result = response.data
//           if (result.status === 'success') {
//             setAgency(result.data)
//           } else {
//             alert('error while loading list of agency')
//           }
//         })
//       }

     
    
//     return(
//         <div>
//             <div>
//             <Navbar/>
//         </div>
//         <div className="list1">
//             <h3 className="label1">Agency List</h3>
//             <table className="table table-responsive table-striped table-hover styled-table">
//                 <thead>
//                     <tr>
//                         <th>Agency Id</th>
//                         <th>Agency Name</th>
//                         <th>Agency Address</th>
//                         <th>Owner Name</th>
//                         <th>Email Id</th>
//                         <th>Action</th>
                       
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                    {agencies.map((agency) => {
//                        return <AgencyRow agency = {agency}/>
//                    })}
//                 </tbody>
//             </table>
//         </div>
       
//         </div>
        
//     )
// };

// export default AgencyList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../layout/Navbar';
// import './AgencyList.css'; 
import AgencyRow from "../AgencyRow";

const AgencyList = () => {
    const [agencies, setAgency] = useState([]);

    useEffect(() => {
        loadAgencies();
    }, []);

    const loadAgencies = () => {
        axios.get('http://localhost:8080/agency/agencylist')
            .then((response) => {
                const result = response.data;
                if (result.status === 'success') {
                    setAgency(result.data);
                } else {
                    alert('Error while loading list of agencies');
                }
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="card">

            <div className="card-header text-center bg-primary text-white mb-4">
                        <h3>Agency List</h3>
                    </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="text-white" style={{backgroundColor:"#7e22ce"}}>
                            <tr >
                                <th style={{ color: "white" }}>Agency Id</th>
                                <th style={{ color: "white" }}>Agency Name</th>
                                <th style={{ color: "white" }}>Agency Address</th>
                                <th style={{ color: "white" }}>Owner Name</th>
                                <th style={{ color: "white" }}>Email Id</th>
                                <th style={{ color: "white" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agencies.map((agency) => (
                                <AgencyRow key={agency.id} agency={agency} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
                            </div>
    );
};

export default AgencyList;
