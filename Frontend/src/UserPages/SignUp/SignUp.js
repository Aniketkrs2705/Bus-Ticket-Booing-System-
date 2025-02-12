import { useState } from "react"
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './SignUp.css'
import { url } from './../../common/Constants';
import Navbar from "../Navbar/Navbar";


const SignUp = () => {
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const[gender,setGender] = useState("")
    const[email,setEmail] = useState("")
    const[mobileNo,setMobileNo] = useState("")
    const[address,setAddress] = useState("")
    const[password,setPassword] = useState("")

    const history = useHistory()

    const SignUpUser =() => {
        if(firstName.length === 0){
            alert('Enter First Name')
        }else if(lastName.length === 0){
            alert('Enter Last Name')
        }else if(gender.length === 0){
            alert('Enter Gender')
        }else if(email.length === 0){
            alert('Enter Email')
        }else if(password.length === 0){
            alert('Enter Password')
        }else if(mobileNo.length === 0){
            alert('Enter Mobile No')
        }else if(address.length === 0){
            alert('Enter Address')
        }else{
            console.log(`First Name : ${firstName}`)
            console.log(`Last Name : ${lastName}`)
            console.log(`Gender : ${gender}`)
            console.log(`Email : ${email}`)
            console.log(`Password: ${password}`)
            console.log(`Mobile No: ${mobileNo}`)
            console.log(`Address: ${address}`)

            const data = new FormData()
            data.append('firstName',firstName)
            data.append('lastName',lastName)
            data.append('gender',gender)
            data.append('email',email)
            data.append('password',password)
            data.append('mobileNo',mobileNo)
            data.append('address',address)

            history.push('/userlogin')

            axios.post(url + '/user/register', data).then((response) => {
                console.log(response.data)
                const result = response.data
                console.log(result)
                if(result.status ==='success'){
                    alert('Registered Successfully!')
                    history.push('/userlogin')
                }else{
                    console.log(result.error)
                    alert('Regisration Failed!...Please try again!')
                }
            })
        }
    }

    return (
        <>
        <div className="">
            <Navbar/>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <div className="p-3 mb-2 bg-secondary text-white">
                            <form className="form-control">
                                <h3 className="user">Sign Up</h3>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(event) => {
                                        setFirstName(event.target.value)
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(event) => {
                                        setLastName(event.target.value)
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label><br/>
                                    <div class="form-check form-check-inline">
                                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="M" onChange={(event) => {
                                          setGender(event.target.value)
                                    }}/>
                                      <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="F" onChange={(event) => {
                                          setGender(event.target.value)
                                        }}/>
                                      <label class="form-check-label">Female</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter Email" onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Password" onChange={(event) => {
                                        setPassword(event.target.value)
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>Mobile No</label>
                                    <input type="number" className="form-control" placeholder="Enter Mobile No" onChange={(event) => {
                                        setMobileNo(event.target.value)
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder="Enter City" onChange={(event) => {
                                        setAddress(event.target.value)
                                    }}/>
                                </div>
                                <div className="button1">
                                   <button type="submit" className="btn-primary" onClick={SignUpUser}>Sign Up</button>
                                </div>
                                <p className="user">
                                    Already registered <a href="userlogin">Sign In?</a>
                                </p>
                            </form>
                        </div>
                    </div>
                <div class="col-md-4"></div>
            </div>
        </div>
                                    </>
    )
}
export default SignUp


import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import { url } from './../../common/Constants';
import Navbar from '../Navbar/Navbar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const SignUp = () => {
    const history = useHistory();

    const initialValues = {
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        mobileNo: '',
        address: '',
        password: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        gender: Yup.string().required('Gender is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        mobileNo: Yup.string().required('Mobile No is required'),
        address: Yup.string().required('Address is required'),
        password: Yup.string().required('Password is required'),
    });

    const onSubmit = (values) => {
        const data = new FormData();
        Object.keys(values).forEach((key) => {
            data.append(key, values[key]);
        });

        axios.post(url + '/user/register', data).then((response) => {
            const result = response.data;
            if (result.status === 'success') {
                Swal.fire('Success', 'Registered Successfully!', 'success');
                history.push('/userlogin');
            } else {
                Swal.fire('Error', 'Registration Failed! Please try again.', 'error');
            }
        });
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid p-5 d-flex align-items-center justify-content-center ">
                
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-white" style={{ backgroundColor: '#7e22ce' }}>
                                <h3 className="user">Sign Up</h3>
                            </div>
                            <div className="card-body text-white">
                                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                    <Form className="form-control">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <Field type="text" name="firstName" className="form-control" placeholder="First Name" />
                                            <ErrorMessage name="firstName" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <Field type="text" name="lastName" className="form-control" placeholder="Last Name" />
                                            <ErrorMessage name="lastName" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group">
                                            <label>Gender</label><br />
                                            <div className="form-check form-check-inline">
                                                <Field type="radio" name="gender" value="M" className="form-check-input" />
                                                <label className="form-check-label">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <Field type="radio" name="gender" value="F" className="form-check-input" />
                                                <label className="form-check-label">Female</label>
                                            </div>
                                            <ErrorMessage name="gender" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <Field type="email" name="email" className="form-control" placeholder="Enter Email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field type="password" name="password" className="form-control" placeholder="Enter Password" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group">
                                            <label>Mobile No</label>
                                            <Field type="text" name="mobileNo" className="form-control" placeholder="Enter Mobile No" />
                                            <ErrorMessage name="mobileNo" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <Field type="text" name="address" className="form-control" placeholder="Enter Address" />
                                            <ErrorMessage name="address" component="div" className="text-danger" />
                                        </div>
                                        <div className="button1">
                                            <button type="submit" className="btn btn-primary">Sign Up</button>
                                        </div>
                                        <p className="user">
                                            Already registered <a href="userlogin">Sign In?</a>
                                        </p>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                    
                </div>
           
        </>
    );
};

export default SignUp;
