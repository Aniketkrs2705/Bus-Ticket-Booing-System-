import { useHistory } from 'react-router'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { url } from './../../common/Constants'
import UserNavbar from './../UserNavbar/UserNavbar'
import { Link } from 'react-router-dom'
import './Profile.css'
import UserLogIn from './../UserLogIn/UserLogIn';

const Profile = () => {
    const[profile,setProfile]= useState([])
    const[firstName,setFirstName]= useState("")

    useEffect(() => {
        renderUserProfile()
    }, [firstName])

    const renderUserProfile = ()=>{
        const id = sessionStorage.getItem("id")

        axios.get(url + '/user/getprofile/'+ id).then((response) => {
            const result = response.data
            if(result.status ==='success'){
                setFirstName(result.firstName)
                setProfile(result.data)
            }else{
                alert('Login Failed!...Please try again!')
            }
        })
    }
    
    
    const history = useHistory()
    const EditUser =() => {
        history.push('/editprofile',{profile: profile})
    }
    if(sessionStorage.getItem("id")!==null){
    return(
        <div>
            <div>
                <UserNavbar/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <div className="profile1 p-3 mb-2 bg-secondary text-white">
                                <form className="form-control">
                                    <h3 className="user">My Info</h3>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input readonly="true" type="text" className="form-control" placeholder="First Name" value={profile.firstName}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input readonly="true" type="text" className="form-control" placeholder="Last Name" value={profile.lastName}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input readonly="true" type="email" className="form-control" placeholder="Enter Email" value={profile.email}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile No</label>
                                        <input readonly="true" type="number" className="form-control" placeholder="Enter Mobile No" value={profile.mobileNo}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input readonly="true" type="text" className="form-control" placeholder="Enter City" value={profile.address}/>
                                    </div><br/>
                                    <div className="button2">
                                        <button type="submit" className="btn-primary btn btn-success" onClick={EditUser}>Edit</button>&nbsp;&nbsp;&nbsp;
                                        <Link to="/routes">
                                            <a className="btn btn-warning">Back</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
    )}else{return(<UserLogIn/>)}
}
export default Profile