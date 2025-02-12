import { useState } from "react"
import {useHistory, useLocation} from 'react-router-dom'
import axios from 'axios'
import './EditUserProfile.css'
import { url } from '../../common/Constants';
import UserLogIn from './../UserLogIn/UserLogIn';
import UserNavbar from "../UserNavbar/UserNavbar";

const EditUserProfile = () => {
    const history = useHistory()
    const location = useLocation()
    const profile = location.state.profile
    
    const[firstName,setFirstName] = useState(profile.firstName)
    const[lastName,setLastName] = useState(profile.lastName)
    const[email,setEmail] = useState(profile.email)
    const[mobileNo,setMobileNo] = useState(profile.mobileNo)
    const[address,setAddress] = useState(profile.address)

    const EditProfile =() => {
        if(firstName.length === 0){
            alert('Enter First Name')
        }else if(lastName.length === 0){
            alert('Enter Last Name')
        }else if(email.length === 0){
            alert('Enter Email')
        }else if(mobileNo.length === 0){
            alert('Enter Mobile No')
        }else if(address.length === 0){
            alert('Enter Address')
        }else{
            const data = new FormData()
            data.append('firstName',firstName)
            data.append('lastName',lastName)
            data.append('email',email)
            data.append('mobileNo',mobileNo)
            data.append('address',address)

            history.push('/routes')

            const id = sessionStorage.getItem("id")

            axios.put(url + '/user/update/'+ id, data).then((response) => {
                // console.log(response.data)
                const result = response.data
                // console.log(result)
                if(result.status ==='success'){
                    alert('Updated Successfully!')
                    history.push('/routes')
                }else{
                    console.log(result.error)
                    alert('Updation Failed!...Please try again!')
                }
            })
        }
    }
    if(sessionStorage.getItem("id")!==null){
    return (
        <>
            <UserNavbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <div className="edit p-3 mb-2 bg-secondary text-white">
                            <form className="form-control">
                                <h3 className="user">Update Info</h3>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name"  value={firstName} onChange={(event) => {
                                        setFirstName(event.target.value)
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" value={lastName}  onChange={(event) => {
                                        setLastName(event.target.value)
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>Mobile No</label>
                                    <input type="number" className="form-control" placeholder="Enter Mobile No" value={mobileNo} onChange={(event) => {
                                        setMobileNo(event.target.value)
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder="Enter City" value={address} onChange={(event) => {
                                        setAddress(event.target.value)
                                    }}/>
                                </div>
                                <div className="button1">
                                   <button type="submit" className="btn-primary" onClick={EditProfile}>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                <div class="col-md-4"></div>
            </div>
        </div>
                                        </>
    )}else{return(<UserLogIn/>)}
}
export default EditUserProfile