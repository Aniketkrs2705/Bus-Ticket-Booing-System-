import React from "react"
import axios from "axios"
import { Link } from "react-router-dom";
const StationRow = ({ station }) => {
  function deleteStation(id){
    
    // alert("Are you sure ?" )
   
    axios.delete(`http://localhost:8080/station/stationlist/${id}`)

    window.location.href="/stationlist";
    // history.push('/stationlist')// he deun pan page reload hot nahiye
    
  }
    
  return (
              // onClick = {() =>{window.location="/editagency"}}
    <tr>
          
      <td>{station.stationId}</td>
     <td>{station.name}</td>
     <td>{station.city}</td>
      <td><Link  class="btn btn-danger" onClick={() => deleteStation (station.stationId) }>Delete</Link></td>
     
     
     
    </tr>
  )
}

export default StationRow;