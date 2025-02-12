import React from "react"
import axios from "axios"
import {useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const RouteRow = ({ route }) => {
  const history = useHistory()

  function deleteRoute(id){
    axios.delete("http://localhost:8080/route/routelist/"+id)
 
     window.location.href="/routelist"; 
     history.push("/routelist")
   }
    
  

  const AddPickingPoint = (routeId) => {
    sessionStorage.setItem("routeId",routeId)
    history.push("/addpickingpoint")
  }
  const AddDroppingPoint = (routeId) => {
    sessionStorage.setItem("routeId",route.routeId)
    history.push('/adddroppingpoint')
  }
    
  return (
    <tr>  
     <td>{route.routeId}</td>
     <td>{route.fromStation}</td>
     <td>{route.toStation}</td>
     <td><button  class="btn btn-success" onClick={() => AddPickingPoint(route.routeId)}>Add</button></td>
     <td><button  class="btn btn-success" onClick={() => AddDroppingPoint(route.routeId)}>Add</button></td>
     {/* <td><button  class="btn btn-success">View</button></td> */}
     <td><button  class="btn btn-warning" onClick={() => deleteRoute (route.routeId) }>Delete</button></td>
    </tr>
  )
}

export default RouteRow;