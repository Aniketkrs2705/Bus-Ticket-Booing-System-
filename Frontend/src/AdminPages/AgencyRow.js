import React from "react"
import axios from "axios"
import { Link,useHistory } from "react-router-dom";
const AgencyRow = ({ agency }) => {
  const history = useHistory()

  function deleteAgency(id){
   axios.delete("http://localhost:8080/agency/agencylist/"+id)

    window.location.href="/agencylist"; 
    history.push("/agencylist")
  }
    
  return (
    <tr>
          
      <td>{agency.agencyId}</td>
      <td>{agency.name}</td>
      <td>{agency.address}</td>
      <td>{agency.ownerName}</td> 
      <td>{agency.email}</td>
      
      <td><Link  class="btn btn-danger" onClick={() => deleteAgency (agency.agencyId) }>Delete</Link></td>
     
     
    </tr>
  )
}

export default AgencyRow;