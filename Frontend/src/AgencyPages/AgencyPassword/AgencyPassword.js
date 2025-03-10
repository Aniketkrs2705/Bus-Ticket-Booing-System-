// import InnerNavbar from "../InnerNavbar/InnerNavbar"
// import {useState} from "react"
// import axios from 'axios'
// import { url } from "../Common/Constant"
// import { useHistory } from "react-router-dom"
// import './AgencyPassword.css'
// const AgencyPassword =()=>{
//     const [oldPassword, setOldPassword] = useState("")
//     const [newPassword, setNewPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     let history= useHistory()
//     const changePassword = () => {
//         if (oldPassword.length === 0) {
//             alert('Enter old Password')
//         }else if(newPassword.length === 0){
//             alert('Enter New Password')
//         }else if(confirmPassword.length === 0){
//             alert('Enter Confirm Password')
//         }else if(confirmPassword !== newPassword){
//             alert('Please enter password again!')
//         }else{
//             const data = new FormData()
//             const id = sessionStorage.getItem("id")
//             data.append('id',id)
//             data.append('oldPassword',oldPassword)
//             data.append('newPassword',newPassword)

//             history.push('/agency/home')

//             axios.post(url + '/agency/changePassword',data).then((response) => {
//                 const result = response.data
//                 if(result.status ==='success'){
//                     alert('Password Changed Successfully!')
//                     history.push('/agency/home')
//                 }else{
//                     console.log(result.error)
//                     alert('Invalid input!')
//                 }
//             })
//         }
//     }

// return(
//     <div className="body1">

//    <InnerNavbar/>
//     <div class="container row">
//         <div className="list3">
//             <h3 className="label1">Change Password</h3>
//             <form className="form-control">
//             <table className="table table-responsive table-striped table-hover styled-table">
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td><label>Old Password</label></td>
//                         <td><div className="form-group">
//                     <input type="password" className="form-control" placeholder="Enter Password" onChange={(event) => {
//                         setOldPassword(event.target.value)
//                     }}/>
//                 </div></td> 
//                     </tr>
//                     <tr>
//                         <td><label>New Password</label></td>
//                         <td><div className="form-group">
//                     <input type="password" className="form-control" placeholder="Enter Password" onChange={(event) => {
//                         setNewPassword(event.target.value)
//                     }}/>
//                 </div></td> 
//                     </tr>
//                     <tr>
//                         <td><label>Confirm Password</label></td>
//                         <td><div className="form-group">
//                     <input type="password" className="form-control" placeholder="Enter Password" onChange={(event) => {
//                         setConfirmPassword(event.target.value)
//                     }}/>
//                 </div></td> 
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td><button type="submit" className="passBtn" onClick={changePassword}>Change</button></td>
//                     </tr>
//                 </tbody>
//             </table>
//             </form>
//         </div>

//     </div>


// </div>
// )
// }

// export default AgencyPassword



import InnerNavbar from "../InnerNavbar/InnerNavbar";
import axios from "axios";
import { url } from "../Common/Constant";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import './AgencyPassword.css';

const AgencyPassword = () => {
  const history = useHistory();

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Enter old Password"),
    newPassword: Yup.string().required("Enter New Password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Enter Confirm Password")
  });

  const onSubmit = (values) => {
    const data = new FormData();
    const id = sessionStorage.getItem("id");
    data.append("id", id);
    data.append("oldPassword", values.oldPassword);
    data.append("newPassword", values.newPassword);

    axios.post(url + "/agency/changePassword", data)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Password Changed Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          history.push("/agency/home");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Invalid input!"
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!"
        });
      });
  };

  return (
    <div className="body1">
      <InnerNavbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-2">
                <div className="card-header text-white" style={{backgroundColor:"#7e22ce"}}>

              <h3 className="text-center mb-4">Change Password</h3>
                </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">Old Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      id="oldPassword"
                      name="oldPassword"
                      placeholder="Enter Old Password"
                    />
                    <ErrorMessage name="oldPassword" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                      placeholder="Enter New Password"
                    />
                    <ErrorMessage name="newPassword" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Enter Confirm Password"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Change
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

export default AgencyPassword;
