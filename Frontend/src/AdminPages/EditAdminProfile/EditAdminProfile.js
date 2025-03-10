// import { useState } from "react"
// import {useHistory, useLocation} from 'react-router-dom'
// import axios from 'axios'
// import './EditAdminProfile.css'
// import { url } from '../../common/Constants';
// import Navbar from "../layout/Navbar";

// const EditAdminProfile = () => {
//     const history = useHistory()
//     const location = useLocation()
//     const profile = location.state.profile
    
//     const[name,setName] = useState(profile.name)
//     const[email,setEmail] = useState(profile.email)

//     const EditProfile =() => {
//         if(name.length === 0){
//             alert('Enter Name')
//         }else if(email.length === 0){
//             alert('Enter Email')
//         }else{
//             const data = new FormData()
//             data.append('name',name)
//             data.append('email',email)
            
//             history.push('/agencylist')

//             const id = sessionStorage.getItem("id")

//             axios.put(url + '/admin/update/'+ id, data).then((response) => {
//                 // console.log(response.data)
//                 const result = response.data
//                 // console.log(result)
//                 if(result.status ==='success'){
//                     alert('Updated Successfully!')
//                     history.push('/agencylist')
//                 }else{
//                     console.log(result.error)
//                     alert('Updation Failed!...Please try again!')
//                 }
//             })
//         }
//     }

//     return (
//         <div >
//             <Navbar/>
//             <div class="row">
//                 <div class="col-md-4"></div>
//                     <div class="col-md-4">
//                         <div className="edit p-3 mb-2 bg-secondary text-white">
//                             <form className="form-control">
//                                 <h3 className="user">Update Info</h3>
//                                 <div className="form-group">
//                                     <label>Name</label>
//                                     <input type="text" className="form-control" placeholder="First Name"  value={name} onChange={(event) => {
//                                         setName(event.target.value)
//                                     }} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Email Address</label>
//                                     <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(event) => {
//                                         setEmail(event.target.value)
//                                     }}/>
//                                 </div>
//                                 <div className="button1">
//                                    <button type="submit" className="btn-primary" onClick={EditProfile}>Update</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 <div class="col-md-4"></div>
//             </div>
//         </div>
//     )
// }
// export default EditAdminProfile


import { useState } from "react";
import { useHistory, useLocation,Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./EditAdminProfile.css";
import { url } from "../../common/Constants";
import Navbar from "../layout/Navbar";

const EditAdminProfile = () => {
  const history = useHistory();
  const location = useLocation();
  const profile = location.state.profile;

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const EditProfile = (event) => {
    event.preventDefault();

    if (name.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter Name",
      });
    } else if (email.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter Email",
      });
    } else {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);

      const id = sessionStorage.getItem("id");

      axios.put(`${url}/admin/update/${id}`, data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            history.push("/agencylist");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Updation Failed!",
            text: "Please try again!",
          });
        }
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header  text-white text-center" style={{backgroundColor:"#7e22ce"}}>
                <h3>Update Info</h3>
              </div>
              <div className="card-body">
                <form onSubmit={EditProfile}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button type="submit" className="btn btn-success">
                      Update
                    </button>
                    &nbsp;&nbsp;
                    <Link to="/agencylist" className="btn btn-warning">
                      Back
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAdminProfile;
