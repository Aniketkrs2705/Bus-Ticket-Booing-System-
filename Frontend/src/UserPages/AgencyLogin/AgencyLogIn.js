// import { useState } from 'react'
// import {useHistory} from 'react-router-dom'
// import axios from 'axios'
// import Footer from './../Footer/Footer';
// import { url } from './../../common/Constants';
// import Navbar from './../Navbar/Navbar';

// const AgencyLogIn = () =>{
//     const history = useHistory()
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const LogInAgency = () => {
//         if (email.length === 0) {
//             alert('Enter Email')
//         }else if (password.length === 0) {
//             alert('Enter Password')
//         }else{
//             const data = new FormData()
//             data.append('Email', email)
//             data.append('Password', password)

//             history.push('/agency/home')

//             axios.post(url + '/agency/login', data).then((response) => {
//                 const result = response.data
//                 if(result.status ==='success'){
//                     history.push('/agency/home')
//                     alert('Login Successfull!')
//                     sessionStorage.setItem("id",result.data.agencyId)
//                     history.push('/agency/home')
//                 }else{
//                     history.push('/agencylogin')
//                     alert('Login Failed!...Please try again!')
//                     console.log(result.error)
//                 }
//             })
//         }
//     }
//     return (
//         <div>
//             <Navbar/>
//             <div class="container-fluid p">
//                 <div class="row">
//                     <div class="col-md-4"></div>
//                         <div class="col-md-4">
//                             <div className="div1 p-3 mb-2 bg-secondary text-white">
//                                 <form className="form-control">
//                                     <h3 className="user">Agency Sign In</h3>
//                                     <div className="form-group">
//                                         <label>Email</label>
//                                         <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>{
//                                             setEmail(e.target.value);
//                                         }}/>
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Password</label>
//                                         <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>{
//                                             setPassword(e.target.value);
//                                         }}/>
//                                     </div>
//                                     <div className="button1">
//                                        <button type="submit" className="btn btn-primary " onClick={LogInAgency}>Sign In</button>
//                                     </div>
//                                     <div>
//                                         <p className="forgot-password text-right">
//                                             Forgot <a href="/agencyforgot">password?</a>
//                                         </p>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     <div class="col-md-4"></div>
//                 </div>
//             </div>
            
//         </div>
//     );
// }
// export default AgencyLogIn


import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { url } from './../../common/Constants';
import Navbar from './../Navbar/Navbar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
// import './AgencyLogIn.css'; // Create a CSS file for custom styles if needed

const AgencyLogIn = () => {
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Enter Email'),
    password: Yup.string().required('Enter Password'),
  });

  const onSubmit = (values) => {
    const data = new FormData();
    data.append('Email', values.email);
    data.append('Password', values.password);

    axios.post(url + '/agency/login', data)
      .then((response) => {
        const result = response.data;
        if (result.status === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            showConfirmButton: false,
            timer: 1500,
          });
          sessionStorage.setItem('id', result.data.agencyId);
          history.push('/agency/home');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Please try again!',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong!',
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid p-5 d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-2" >
            <div className="card-header text-white" style={{backgroundColor:"#7e22ce"}}><h3 className="text-center mb-4">Agency Sign In</h3></div>
            
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <Field
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
                <div className="text-center mt-3">
                  <p className="forgot-password text-right">
                    Forgot <a href="/agencyforgot">password?</a>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AgencyLogIn;
