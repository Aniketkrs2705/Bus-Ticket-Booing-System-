// import { useState } from "react"
// import {useHistory, useLocation} from 'react-router-dom'
// import axios from 'axios'
// import './EditAgencyProfile.css'
// import { url } from '../Common/Constant'
// import InnerNavbar from "../InnerNavbar/InnerNavbar"


// const EditAgencyProfile = () => {
//     const history = useHistory()
   

//     const profile =JSON.parse(sessionStorage.getItem("profile"))
//     console.log(profile)
//     const[name,setName] = useState(profile.name)
//     const[ownerName,setOwnerName] = useState(profile.ownerName)
//     const[email,setEmail] = useState(profile.email)
//     const[mobileNo,setMobileNo] = useState(profile.mobileNo)
//     const[address,setAddress] = useState(profile.address)
    
//     const EditProfile =() => {
//         if(name.length === 0){
//             alert('Enter Name')
//         }else if(ownerName.length === 0){
//             alert('Enter Owner Name')
//         }else if(email.length === 0){
//             alert('Enter Email')
//         }else if(mobileNo.length === 0){
//             alert('Enter Mobile No')
//         }else if(address.length === 0){
//             alert('Enter Address')
//         }else{
//             const data = new FormData()
//             data.append('name',name)
//             data.append('ownerName',ownerName)
//             data.append('email',email)
//             data.append('mobileNo',mobileNo)
//             data.append('address',address)
            
//             // history.push('/agency/home')

//             const id = sessionStorage.getItem("id")

//             axios.put(url + '/agency/update/'+ id, data).then((response) => {
//                 // console.log(response.data)
//                 const result = response.data
//                 // console.log(result)
//                 if(result.status ==='success'){
//                   sessionStorage.removeItem("profile");

                   
//                     alert('Updated Successfully!')
                    
//                     history.push('/agency/home')
//                 }else{
//                     console.log(result.error)
//                     alert('Updation Failed!...Please try again!')
//                 }
//             })
//         }
//     }

//     return (
       

//         <div>
//         <InnerNavbar/>
//         <div class="container row">
//           <div className="list3">
//             <h3 className="label1">Edit Profile</h3>
  
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
//                     <td> <label>Name</label></td>
//                     <td><div className="form-group">
                                     
//                                      <input type="text" className="form-control" value={name}   onChange={(event) => {
//                                          setName(event.target.value)
//                                      }} />
//                                  </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>Owner Name</label> </td>
//                     <td> <div className="form-group">
                                    
//                                      <input type="text" className="form-control" value= {ownerName}  onChange={(event) => {
//                                          setOwnerName(event.target.value)
//                                      }} />
//                                  </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>Email Address</label></td>
//                     <td>  <div className="form-group">
                                    
//                                      <input type="email" className="form-control" value={email} onChange={(event) => {
//                                          setEmail(event.target.value)
//                                      }}/>
//                                  </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>Mobile No</label></td>
//                     <td><div className="form-group">
                                     
//                                      <input type="number" className="form-control" value={mobileNo} onChange={(event) => {
//                                          setMobileNo(event.target.value)
//                                      }}/>
//                                  </div></td>
//                   </tr>
//                   <tr>
//                     <td><label>Address</label></td>
//                     <td><div className="form-group">
                                     
//                                      <input type="text" className="form-control" value={address}  onChange={(event) => {
//                                          setAddress(event.target.value)
//                                      }}/>
//                                  </div></td>
//                   </tr>
                  
                  
//                   <tr>
//                     <td></td>
//                     <td><div className="button">
//                       <br />
//                       <button type="button" className="addBtn" onClick={EditProfile}>Confirm</button>
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
// export default EditAgencyProfile


import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./EditAgencyProfile.css";
import { url } from "../Common/Constant";
import InnerNavbar from "../InnerNavbar/InnerNavbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const EditAgencyProfile = () => {
  const history = useHistory();
  const profile = JSON.parse(sessionStorage.getItem("profile"));

  const initialValues = {
    name: profile.name || "",
    ownerName: profile.ownerName || "",
    email: profile.email || "",
    mobileNo: profile.mobileNo || "",
    address: profile.address || ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter Name"),
    ownerName: Yup.string().required("Enter Owner Name"),
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    mobileNo: Yup.string().required("Enter Mobile No"),
    address: Yup.string().required("Enter Address")
  });

  const onSubmit = (values) => {
    const data = new FormData();
    data.append("name", values.name);
    data.append("ownerName", values.ownerName);
    data.append("email", values.email);
    data.append("mobileNo", values.mobileNo);
    data.append("address", values.address);

    const id = sessionStorage.getItem("id");

    axios
      .put(url + "/agency/update/" + id, data)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          sessionStorage.removeItem("profile");
          Swal.fire({
            icon: "success",
            title: "Updated Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          history.push("/agency/home");
        } else {
          Swal.fire({
            icon: "error",
            title: "Updation Failed!",
            text: "Please try again!",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div>
      <InnerNavbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-2">
            <div className="card-header text-white" style={{backgroundColor:"#7e22ce"}}><h3 className="text-center mb-4">Edit Profile</h3></div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ownerName" className="form-label">Owner Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="ownerName"
                      name="ownerName"
                    />
                    <ErrorMessage name="ownerName" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobileNo" className="form-label">Mobile No</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="mobileNo"
                      name="mobileNo"
                    />
                    <ErrorMessage name="mobileNo" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                    />
                    <ErrorMessage name="address" component="div" className="text-danger" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Confirm
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAgencyProfile;

