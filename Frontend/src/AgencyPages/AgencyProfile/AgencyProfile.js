// import { useHistory } from 'react-router'
// import { useState, useEffect} from 'react'
// import axios from 'axios'
// import { url } from '../../AgencyPages/Common/Constant'
// import InnerNavbar from '../InnerNavbar/InnerNavbar'
// import { Link } from 'react-router-dom'
// import './AgencyProfile.css'
// import './AgencyProfile.css'

// const AgencyProfile = () => {
//     const[profile,setProfile]= useState([])
//     console.log(profile)

//     useEffect(() => {
//         renderAgencyProfile()
//     }, [])

//     const renderAgencyProfile = ()=>{
//         const id = sessionStorage.getItem("id")

//         axios.get(url + '/agency/getprofile/'+ id).then((response) => {
//             const result = response.data
//             if(result.status ==='success'){
//                 sessionStorage.setItem("profile",JSON.stringify(result.data))
//                 //console.log(result.data)
//                 setProfile(result.data)
               
//             }else{
//                 console.log(result.error)
//                 alert('Login Failed!...Please try again!')
//             }
//         })
//     }
    
    
//     const history = useHistory()
//     const EditAgency =() => {
//         history.push('/agency/editprofile',{profile: profile})
//     }

//     return(
//       <div>
//       <InnerNavbar />
//       <div class="container row">
//         <div className="list3">
//           <h3 className="label1">Agency Info</h3>

//           <form className="form-control">
//             <table className="table table-responsive table-striped table-hover styled-table">
//               <thead>
//                 <tr>
//                   <th></th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td> <h3><label>Agency Name : </label></h3> </td>
//                   <td> <h4>{profile.name}</h4></td>
//                 </tr>
//                 <tr>
//                   <td><h3><label>Owner Name : </label></h3></td>
//                   <td><h4>{profile.ownerName}</h4></td>
//                 </tr>
//                 <tr>
//                     <td><h3><label>Email Address : </label></h3></td>
//                     <td><h4>{profile.email}</h4></td>
//                 </tr>
//                 <tr>
//                     <td> <h3><label>Mobile No : </label></h3></td>
//                     <td><h4>{profile.mobileNo}</h4></td>
//                 </tr>
//                 <tr>
//                     <td> <h3><label>Address : </label></h3></td>
//                     <td><h4>{profile.address}</h4></td>
//                 </tr>
//                 <tr>
//                     <td><button className="edtBtn" onClick={()=>{ history.push('/agency/editprofile')}}>Edit Profile</button></td>
//                     <td><button className="edtBtn" onClick={()=>{ history.push('/agency/changePassword')}}>Change password </button></td>
//                 </tr>
                
//               </tbody>
//             </table>
//           </form>
//         </div>
//       </div>


//     </div>





//     )
// }
// export default AgencyProfile


import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../AgencyPages/Common/Constant'
import InnerNavbar from '../InnerNavbar/InnerNavbar'
import { Link } from 'react-router-dom'
// import './AgencyProfile.css'

const AgencyProfile = () => {
  const [profile, setProfile] = useState([])
  const history = useHistory()

  useEffect(() => {
    renderAgencyProfile()
  }, [])

  const renderAgencyProfile = () => {
    const id = sessionStorage.getItem("id")
    axios.get(url + '/agency/getprofile/' + id).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        sessionStorage.setItem("profile", JSON.stringify(result.data))
        setProfile(result.data)
      } else {
        console.log(result.error)
        alert('Login Failed!...Please try again!')
      }
    })
  }

  return (
    <div>
      <InnerNavbar />
      <div className="container mt-4 w-50 mx-auto">
        <div className="card">
          <div className="card-header text-white" style={{backgroundColor:"#7e22ce"}}>
            <h3 className='text-center'>Agency Info</h3>
          </div>
          <div className="card-body">
            <form className="form-control">
              <table className="table table-responsive table-striped table-hover styled-table">
                <tbody>
                  <tr>
                    <td> <h5><label>Agency Name:</label></h5> </td>
                    <td> <h6>{profile.name}</h6></td>
                  </tr>
                  <tr>
                    <td><h5><label>Owner Name:</label></h5></td>
                    <td><h6>{profile.ownerName}</h6></td>
                  </tr>
                  <tr>
                    <td><h5><label>Email Address:</label></h5></td>
                    <td><h6>{profile.email}</h6></td>
                  </tr>
                  <tr>
                    <td> <h5><label>Mobile No:</label></h5></td>
                    <td><h6>{profile.mobileNo}</h6></td>
                  </tr>
                  <tr>
                    <td> <h5><label>Address:</label></h5></td>
                    <td><h6>{profile.address}</h6></td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-center">
                      <button className="btn btn-primary m-2" onClick={() => { history.push('/agency/editprofile') }}>Edit Profile</button>
                      <button className="btn btn-secondary m-2" onClick={() => { history.push('/agency/changePassword') }}>Change Password</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgencyProfile
