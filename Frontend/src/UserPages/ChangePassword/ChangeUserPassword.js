import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../ForgotPassword/ForgotPassword.css'
import Footer from '../Footer/Footer';
import { url } from '../../common/Constants';
import UserNavbar from './../UserNavbar/UserNavbar';

const ChangeUserPassword = () =>{
    const history = useHistory()
    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const id = sessionStorage.getItem("id")

    const ChangePassword = () => {
        if (oldPassword.length === 0) {
            alert('Enter Email')
        }else if(password.length === 0){
            alert('Enter Password')
        }else if(confirmPassword.length === 0){
            alert('Enter Confirm Password')
        }else if(confirmPassword !== password){
            alert('Please enter password again!')
        }else{
            const data = new FormData()
            data.append('id',id)
            data.append('oldPassword',oldPassword)
            data.append('newPassword',password)

            history.push('/routes')

            axios.post(url + '/user/changepassword',data).then((response) => {
                const result = response.data
                if(result.status ==='success'){
                    alert('Password Changed Successfully!')
                    history.push('/routes')
                }else{
                    alert('Invalid input!')
                }
            })
        } 
    }
    return (
        <div>
            <UserNavbar/>
            <div className="container row">
            <div className="col-md-4"></div>
            <div className="col-md-5">
            <div className="div3 p-3 mb-2 bg-primary text-white">
            <form className="form-control">
                <h3 className="user">Change Password</h3><br/>
                <div className="form-group center-screen">
                    <label>Old Password</label>
                    <input type="password" className="form-control" placeholder="Enter Old Password" onChange={(event) => {
                        setOldPassword(event.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter New Password" onChange={(event) => {
                        setPassword(event.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" className="form-control" placeholder="Confirm New Password" onChange={(event) => {
                        setConfirmPassword(event.target.value)
                    }}/>
                </div>
                <div className="button1">
                   <button type="submit" className="btn btn-primary" onClick={ChangePassword}>Confirm</button>&nbsp;&nbsp;
                <Link to='/routes'>
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
export default ChangeUserPassword