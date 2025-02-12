import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../ForgotPassword/ForgotPassword.css'
import Footer from '../Footer/Footer';
import { url } from '../../common/Constants';
import Navbar from '../Navbar/Navbar';

const AgencyForgotPassword = () =>{
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const RedirectToLogin = () => {
        if (email.length === 0) {
            alert('Enter Email')
        }else if(password.length === 0){
            alert('Enter Password')
        }else if(confirmPassword.length === 0){
            alert('Enter Confirm Password')
        }else if(confirmPassword !== password){
            alert('Please enter password again!')
        }else{
            const data = new FormData()
            data.append('email',email)
            data.append('password',password)
            data.append('confirmPassword',confirmPassword)

            history.push('/agencylogin')

            axios.post(url + '/agency/agencyforgot',data).then((response) => {
                const result = response.data
                if(result.status ==='success'){
                    alert('Password Changed Successfully!')
                    history.push('/agencylogin')
                }else{
                    console.log(result.error)
                    alert('Invalid input!')
                }
            })
        } 
    }
    return (
        <div>
            <Navbar/>
            <div className="container row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <div className="div3 p-3 mb-2 bg-primary text-white">
            <form className="form-control">
                <h3 className="user">Agency Reset Password</h3><br/>
                <div className="form-group center-screen">
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
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" onChange={(event) => {
                        setConfirmPassword(event.target.value)
                    }}/>
                </div>
                <div className="button1">
                   <button type="submit" className="btn btn-primary" onClick={RedirectToLogin}>Confirm</button>&nbsp;&nbsp;
                <Link to='/agencylogin'>
                    <a className="btn btn-warning">Back</a>
                </Link>
                </div>
                
            </form>
            
            </div>
            </div>
            <div className="col-md-3"></div>
        </div>
        </div>
    );
}
export default AgencyForgotPassword