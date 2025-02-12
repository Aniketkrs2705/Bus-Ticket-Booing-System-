
import InnerNavbar from './../InnerNavbar/InnerNavbar';

import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios'
import { url } from '../Common/Constant';
import './DeleteTrip.css'
const DeleteTrip = () => {
    const history = useHistory()

  
    const trip =JSON.parse(sessionStorage.getItem("trip"))
    console.log(trip)

    const deleteTrip = () => {
        const id = trip.tripId
        axios.delete(url + '/trip/deleteTrip/' + id).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                alert('Trip Deleted Successfully')
                history.push('/agency/home')

            } else {
                console.log(result.error)
                alert('Trip Not Deleted')
            }
        })
    }

    return (
        // <div className="body1">
        //     <InnerNavbar />
        //     <div class="container">
                
                    
                    
        //                 <div className="list1">
        //                     <h3 className="label1">Delete Trip</h3>
        //                     <table className="table table-responsive table-striped table-hover styled-table">
        //                         <thead >
        //                             <tr>
        //                                 <th >Trip Id</th>
        //                                 <th>Bus Number</th>
        //                                 <th>Bus Type</th>
        //                                 <th>From</th>
        //                                 <th>To</th>
        //                                 <th>Date</th>
        //                                 <th>Arrival Time</th>
        //                                 <th>Departure Time</th>
        //                                 <th>Price</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>

        //                             <tr>
        //                                 <td>{trip.tripId}</td>
        //                                 <td>{trip.busno}</td>
        //                                 <td>{trip.busType}</td>
        //                                 <td>{trip.fromStation}</td>
        //                                 <td>{trip.toStation}</td>
        //                                 <td>{trip.date}</td>
        //                                 <td>{trip.arrivalTime}</td>
        //                                 <td>{trip.departureTime}</td>
        //                                 <td>{trip.ticketPrice}</td>
        //                             </tr>
        //                         </tbody>
        //                     </table>
        //                 </div>

        //                 <div className="div1 p-3 mb-2 bg-secondary text-white">
        //                     <h3>Would you want to Delete?</h3>
        //                     <div >
        //                         <center>
        //                         <tr >
        //                             <div className="button1">
        //                                 <td> <button type="button" class="deleteBtn" onClick={deleteTrip}>Yes</button>
                                    
        //                              <button type="button" class="editBtn" onClick={() => { window.location = "/Agency/home" }}>cancal</button>
        //                              </td>
        //                              </div>
        //                         </tr>
        //                         </center>
        //                     </div>


        //                 </div>

        //             </div>
                   
               
           

        // </div>



        <div className="body1">

        <InnerNavbar/>      
        <div class="container row">
        <div className="list3">
        <h3 className="label1">Bus</h3>
        <table className="table table-responsive table-striped table-hover styled-table">
            <thead>
            <tr>
            <th >Trip Id</th>
                                        <th>Bus Number</th>
                                         <th>Bus Type</th>
                                         <th>From</th>
                                         <th>To</th>
                                         <th>Date</th>
                                         <th>Arrival Time</th>
                                         <th>Departure Time</th>
                                         <th>Price</th>
                     </tr>
            </thead>
            <tbody>
            <tr>
            <td>{trip.tripId}</td>
                                         <td>{trip.busno}</td>
                                         <td>{trip.busType}</td>
                                         <td>{trip.fromStation}</td>
                                         <td>{trip.toStation}</td>
                                         <td>{trip.date}</td>
                                         <td>{trip.arrivalTime}</td>
                                         <td>{trip.departureTime}</td>
                                         <td>{trip.ticketPrice}</td>
            </tr>
            </tbody>
        </table>
        <h3>Would you want to Delete?</h3>
        <table className="   styled-table">
            <thead>
                <th></th>
                
                <th></th>
            </thead>
            <tbody>
                <td><button type="button" class="delBtn" onClick={deleteTrip}>Yes</button></td>
                
                <td><button type="button" class="edtBtn" onClick={() => { window.location = "/Agency/home" }}>cancel</button></td>
            </tbody>
        </table>
    </div>
    
        </div>
    
    
    </div>


    )
}

export default DeleteTrip