// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";

// import './UserList.css' 
// import UserRow from "../UserRow";
// import Navbar from "../layout/Navbar";


// const UserList = () => {// file name and function name should be same

//     const [users, setUser] = useState([]);

//     useEffect(() => {
//        loadUsers();
//     }, []);

//     const loadUsers = () => {
//         axios.get('http://localhost:8080/user/userlist').then((response) => {
//           const result = response.data
//           if (result.status === 'success') {
//             setUser(result.data)
//           } else {
//             alert('error while loading list of agency')
//           }
//         })
//       }

//     return(
//       <div>
//             <div>
//             <Navbar/>
//         </div>
//         <div className="list1">
//             <h3 className="label1">User List</h3>
//             <table className="table table-responsive table-striped table-hover styled-table">
//                 <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Address</th>
//                         <th>Gender</th>
//                         <th>Email Id</th>
//                         <th>Mobile No</th>   
//                         <th>Action</th>   
//                     </tr>
//                 </thead>
               
//                 <tbody>
//                    {users.map((user) => {
//                        return <UserRow user = {user}/>
//                    })}
//                 </tbody><br></br>
//                 <Link to="/agencylist">
//           <a className="btn btn-warning">Back To HomePage</a>
//         </Link>


//             </table>
//         </div>
       
//         </div>
//     )

// }

// export default UserList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './UserList.css'; 
import UserRow from "../UserRow";
import Navbar from "../layout/Navbar";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    axios.get('http://localhost:8080/user/userlist').then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setUser(result.data);
      } else {
        alert('error while loading list of agency');
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-primary text-white text-center" >
            <h3>User List</h3>
          </div>
          <div className="card-body">
            <table className="table table-responsive table-striped table-hover">
              <thead style={{backgroundColor:"#7e22ce"}}>
                <tr>
                  <th style={{color:"white"}}>First Name</th>
                  <th style={{color:"white"}}>Last Name</th>
                  <th style={{color:"white"}}>Address</th>
                  <th style={{color:"white"}}>Gender</th>
                  <th style={{color:"white"}}>Email Id</th>
                  <th style={{color:"white"}}>Mobile No</th>
                  <th style={{color:"white"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserRow key={user.id} user={user} />
                ))}
              </tbody>
            </table>
            <div className="text-center mt-4">
              <Link to="/agencylist" className="btn btn-warning">
                Back To HomePage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
