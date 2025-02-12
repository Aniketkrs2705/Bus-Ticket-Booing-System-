// import React from "react";
// import { useState } from "react";
// import axios from 'axios'
// import { Link} from "react-router-dom";
// import Navbar from "../layout/Navbar";


// const AddAgency = () => {

//     const [name,setName]=useState("")
//     const [address,setAddress]=useState("")
//     const [ownerName,setOwnerName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")

//     const addAgencyToDB = () =>{
//       if(name.length === 0){
//         alert('Enter agnecy name')
//       }else if(address.length===0){
//         alert('Enter agency address')
//       }else if(ownerName.length===0){
//         alert('Enter agency ownerName')
//       }else if(email.length===0){
//         alert('Enter agency email id')
//       }else if(password.length===0){
//         alert('Enter password')
//       }else{

//         const data = new FormData()

//         data.append('name',name)
//         data.append('address',address)
//         data.append('ownerName',ownerName)
//         data.append('email',email)
//         data.append('password',password)

       
//         console.log(data.getAll)

//         axios.post('http://localhost:8080/agency/addagency',data).then ((response) =>{
//           const result = response.data
//           if(result.status === 'success'){
//             alert('successfully added an agency')

//            // history.push('/agencylist')
//           }else{
//             alert('error while adding an agency')
//           }
//         })
//       }
//     }

//     return(
      
//       <div >
//         <Navbar/>
//       <div className="container w-50" >
//         <h1 className="text-center card cul" >Add New Agency</h1><hr/>
//         <form >
//           <div className="form-group">
//             <label for="inputEmail3" className="col-sm-2 col-form-label"><h3>Name  </h3></label>
//             <input type="text"
//                    className="form-control form-control-md" 
//                    placeholder="Enter Agency Name"
//                    onChange={(e) => {
//                     setName(e.target.value)
//                   }}
//             />
//           </div>
//           <div className="form-group">
//             <label for="inputEmail3" class="col-sm-2 col-form-label"><h3>Address</h3></label>
//             <input type="text" 
//                    className="form-control form-control-md" 
//                    placeholder="Enter Agency Address"
//                    onChange={(e) => {
//                     setAddress(e.target.value)
//                   }}
//             />
//           </div>
//           <div className="form-group">
//             <label for="inputEmail3" className="col-sm-2 col-form-label"><h3>Owner Name</h3></label>
//             <input type="text"
//                    className="form-control form-control-md" 
//                    placeholder="Enter Agency Owner Name"
//                    onChange={(e) => {
//                     setOwnerName(e.target.value)
//                   }}
//             />
//           </div>
//           <div className="form-group">
//             <label for="inputEmail3" className="col-sm-2 col-form-label"><h3>Email Id</h3></label>
//             <input type="email"
//                    className="form-control form-control-md" 
//                    placeholder="Enter Agency Email Id"
//                    onChange={(e) => {
//                     setEmail(e.target.value)
//                   }}
//             />
//           </div>
//           <div className="form-group">
//             <label for="inputEmail3" className="col-sm-2 col-form-label"><h3>Password</h3></label>
//             <input type="password"
//                    className="form-control form-control-md" 
//                    placeholder="Enter Password"
//                    onChange={(e) => {
//                     setPassword(e.target.value)
//                   }}
//             />
//           </div><br></br>
//           <button onClick={addAgencyToDB} type="submit" class="btn btn-success"  >Confirm</button>&nbsp;&nbsp;

//           <Link to="/agencylist">
//           <a className="btn btn-warning">Back</a>
//         </Link>

//           </form>
          
//       </div>
      
//       </div>
//     );

// }

// export default AddAgency;

import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Navbar from "../layout/Navbar";

const AddAgency = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      ownerName: "",
      email: "",
      mobileNo: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter agency name"),
      address: Yup.string().required("Enter agency address"),
      ownerName: Yup.string().required("Enter agency owner name"),
      email: Yup.string().email("Invalid email format").required("Enter agency email id"),
      mobileNo: Yup.number().required("Enter agency mobile no"),
      password: Yup.string().required("Enter password"),
    }),
    onSubmit: (values) => {
      const data = new FormData();
      data.append("name", values.name);
      data.append("address", values.address);
      data.append("ownerName", values.ownerName);
      data.append("email", values.email);
      data.append("mobileNo", values.mobileNo);
      data.append("password", values.password);

      axios.post('http://localhost:8080/agency/addagency', data)
        .then((response) => {
          const result = response.data;
          if (result.status === 'success') {
            Swal.fire('Success', 'Successfully added an agency', 'success');
            // history.push('/agencylist');
          } else {
            Swal.fire('Error', 'Error while adding an agency', 'error');
          }
        })
        .catch((error) => {
          Swal.fire('Error', error.message, 'error');
        });
    },
  });

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="card w-50 mx-auto">
          <div className="card-header text-center" style={{backgroundColor:"#7e22ce"}}>
            <h3 style={{color:"white"}}>Add New Agency</h3>
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Agency Name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Agency Address"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-danger">{formik.errors.address}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Owner Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Agency Owner Name"
                  name="ownerName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ownerName}
                />
                {formik.touched.ownerName && formik.errors.ownerName ? (
                  <div className="text-danger">{formik.errors.ownerName}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Email Id</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Agency Email Id"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Mobile No</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Agency mobile no"
                  name="mobileNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobileNo}
                />
                {formik.touched.mobileNo && formik.errors.mobileNo ? (
                  <div className="text-danger">{formik.errors.mobileNo}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>
              <br />
              <button type="submit" className="btn btn-success">Confirm</button>
              &nbsp;&nbsp;
              <Link to="/agencylist" className="btn btn-warning">Back</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAgency;
