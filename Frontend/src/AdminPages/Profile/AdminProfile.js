// import { useHistory } from 'react-router'
// import { useState, useEffect} from 'react'
// import axios from 'axios'
// import { url } from '../../common/Constants'
// import { Link } from 'react-router-dom'
// import './AdminProfile.css'
// import Navbar from '../layout/Navbar'

// const AdminProfile = () => {
//     const[profile,setProfile]= useState([])

//     useEffect(() => {
//         renderAdminProfile()
//     }, [])

//     const renderAdminProfile = ()=>{
//         const id = sessionStorage.getItem("id")

//         axios.get(url + '/admin/getprofile/'+ id).then((response) => {
//             const result = response.data
//             if(result.status ==='success'){
//                 // console.log(result.data)
//                 setProfile(result.data)
//             }else{
//                 console.log(result.error)
//                 alert('Login Failed!...Please try again!')
//             }
//         })
//     }
    
//     const history = useHistory()
//     const EditAdmin =() => {
//         history.push('/editadminprofile',{profile: profile})
//     }

//     return(
//         <div >
//             <Navbar/>
//             <div class="container-fluid">
//                 <div class="row">
//                     <div class="col-md-4"></div>
//                         <div class="col-md-4">
//                             <div className="profile1 p-3 mb-2  text-white" >
//                                 <form className="form-control">
//                                     <h3 className="user">My Info</h3>
//                                     <div className="form-group">
//                                         <label>Name</label>
//                                         <input readonly="true" type="text" className="form-control" placeholder="First Name" value={profile.name}/>
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Email Address</label>
//                                         <input readonly="true" type="email" className="form-control" placeholder="Enter Email" value={profile.email}/>
//                                     </div>
//                                     <div className="button2">
//                                         <button type="submit" className="btn-primary btn btn-success" onClick={EditAdmin}>Edit</button>&nbsp;&nbsp;&nbsp;
//                                         <Link to="/agencylist">
//                                             <a className="btn btn-warning">Back</a>
//                                         </Link>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     <div class="col-md-4"></div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default AdminProfile

import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../../common/Constants';
import { Link } from 'react-router-dom';
import './AdminProfile.css';
import Navbar from '../layout/Navbar';

const AdminProfile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        renderAdminProfile();
    }, []);

    const renderAdminProfile = () => {
        const id = sessionStorage.getItem("id");

        axios.get(`${url}/admin/getprofile/${id}`).then((response) => {
            const result = response.data;
            if (result.status === 'success') {
                setProfile(result.data);
            } else {
                console.log(result.error);
                alert('Failed to load profile!...Please try again!');
            }
        });
    };

    const history = useHistory();
    const EditAdmin = () => {
        history.push('/editadminprofile', { profile: profile });
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header  text-white text-center" style={{backgroundColor:"#7e22ce"}}>
                                <h3>Admin Profile</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="First Name" 
                                            value={profile.name} 
                                            readOnly 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Enter Email" 
                                            value={profile.email} 
                                            readOnly 
                                        />
                                    </div>
                                    <div className="text-center mt-3">
                                        <button 
                                            type="button" 
                                            className="btn btn-success mr-3" 
                                            onClick={EditAdmin}
                                        >
                                            Edit
                                        </button>
                                        <Link to="/agencylist" className="btn btn-warning ms-3">
                                            Back
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
