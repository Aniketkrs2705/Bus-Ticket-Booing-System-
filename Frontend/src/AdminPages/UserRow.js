import React from "react"
import axios from "axios"
import { Link,useHistory } from "react-router-dom";
import UserList from "./UserList/UserList";
const UserRow = ({ user }) => {

  const history = useHistory();

  function deleteUser(id){
    axios.delete(`http://localhost:8080/user/userlist/${id}`)

    window.location.href="/userlist";
  }  
  return (
    <tr>
     <td>{user.firstName}</td>
     <td>{user.lastName}</td>
     <td>{user.gender}</td>
     <td>{user.email}</td>
     <td>{user.mobileNo}</td>
     <td>{user.address}</td>
     
      {/* <td><button type="button" class="btn btn-success">View</button></td> */}
      
      <td><Link  class="btn btn-danger" onClick={() => deleteUser (user.userId) }>Delete</Link></td>
     
     {/* <td><button type="button" class="btn btn-danger">Delete</button></td> */}
     
    </tr>
  )
}

export default UserRow;