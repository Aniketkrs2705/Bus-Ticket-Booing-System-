// import { useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom'
// import axios from 'axios'
// import './UserLogIn.css'
// import Footer from './../Footer/Footer'
// import { url } from './../../common/Constants';
// import Navbar from './../Navbar/Navbar';

// const UserLogIn = () =>{
//     const history = useHistory()
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const LogInUser = () =>{
//         if(email.length === 0){
//             alert('Enter Email')
//         }else if(password.length === 0){
//             alert('Enter Password')
//         }else {
//         const data = new FormData()
//         data.append('email',email)
//         data.append('password',password)

//         sessionStorage.clear()
//         history.push('/routes')

//         axios.post(url + '/user/login',data).then((response) => {
//             const result = response.data
//             if(result.status ==='success'){
//                 sessionStorage.setItem("id", result.data.id)
//                 alert('Login Successfull!')
//                 history.push('/routes')
//             }else{
//                 history.push('/userlogin')
//                 alert('Login Failed!...Please try again!')
//             }
//         })
//     }
// }
//     return (
//         <div>
//             <Navbar/>
//             <div class="container-fluid p">
//                 <div class="row p">
//                     <div class="col-md-4"></div>
//                         <div class="col-md-4">
//                             <div className="div1 p-3 mb-2 bg-secondary text-white">
//                                 <form className="form-control">
//                                     <h3 className="user">User Sign In</h3>
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
//                                        <button type="submit" className="btn btn-primary " onClick={LogInUser}>Sign In</button>
//                                     </div>
//                                     <div>
//                                         <p className="forgot-password text-right">
//                                             Forgot <a href="/forgot">password?</a>
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <p className="user">
//                                             New User <a href="/signup">Sign Up?</a>
//                                         </p>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 <div class="col-md-4"></div>
//             </div>
            
//         </div>
//     );
// }
// export default UserLogIn



import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './UserLogIn.css';

import { url } from './../../common/Constants';
import Navbar from './../Navbar/Navbar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const UserLogIn = () => {
    const history = useHistory();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const onSubmit = (values) => {
        const data = new FormData();
        data.append('email', values.email);
        data.append('password', values.password);

        sessionStorage.clear();

        axios.post(url + '/user/login', data).then((response) => {
            const result = response.data;
            if (result.status === 'success') {
                sessionStorage.setItem('id', result.data.id);
                Swal.fire('Success', 'Login Successful!', 'success');
                history.push('/routes');
            } else {
                Swal.fire('Error', 'Login Failed! Please try again.', 'error');
            }
        });
    };

    return (
        <div>
            <Navbar />
            <div className="container-fluid p-5 d-flex align-items-center justify-content-center ">                    
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header text-white" style={{ backgroundColor: '#7e22ce' }}>
                                <h3 className="user">User Sign In</h3>
                            </div>
                            <div className="card-body  text-white">
                                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                    <Form className="form-control">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <Field type="email" name="email" className="form-control" placeholder="Enter Email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field type="password" name="password" className="form-control" placeholder="Enter Password" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>
                                        <div className="button1">
                                            <button type="submit" className="btn btn-primary">Sign In</button>
                                        </div>
                                        <div>
                                            <p className="forgot-password text-right">
                                                Forgot <a href="/forgot">password?</a>
                                            </p>
                                        </div>
                                        <div>
                                            <p className="user">
                                                New User? <a href="/signup">Sign Up</a>
                                            </p>
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

export default UserLogIn;
