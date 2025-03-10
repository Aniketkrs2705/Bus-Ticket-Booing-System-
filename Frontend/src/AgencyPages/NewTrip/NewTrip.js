// import InnerNavbar from "../InnerNavbar/InnerNavbar"
// import {useHistory } from 'react-router-dom'
// import axios from 'axios'
// import { url } from '../Common/Constant'
// import { useState, useEffect } from 'react'
// import './NewTrip.css'

// const NewTrip = () => {
//   let history = useHistory()

//   const [buses, setBuses] = useState([])
//   const [stations, setStations] = useState([])
//   const [busNo, setBusNo] = useState()
//   const [fromStation, setFromStation] = useState()
//   const [toStation, setToStation] = useState()
//   const [date, setDate] = useState()
//   const [arrivalTime, setArrivalTime] = useState()
//   const [departureTime, setDepartureTime] = useState()
//   const [ticketPrice, setTicketPrice] = useState()
  
//   useEffect(() => {
//     getBuses()
//     getStations()

//   }, [])

//   const disablePastDate = () => {
//     const today = new Date();
//     const dd = String(today.getDate() + 1).padStart(2, "0");
//     const mm = String(today.getMonth() + 1).padStart(2, "0");
//     const yyyy = today.getFullYear();
//     return yyyy + "-" + mm + "-" + dd;
// }

//   const getBuses = () => {
//     const id = sessionStorage.getItem("id")
//     axios.get('http://localhost:8080' + '/bus/agency/' + id).then((response) => {
//       const result = response.data
//       if (result.status === 'success') {
//         setBuses(result.data)
//       } else {
//         alert('Select All Fields')
//       }
//     })
//   }
//   const getStations = () => {
//     axios.get('http://localhost:8080' + '/station/all').then((response) => {
//       const result = response.data
//       if (result.status === 'success') {
//         setStations(result.data)
//       } else {
//         alert('Stations not found')
//       }
//     })
//   }
//   const confirmAdd = () => {
//     if (busNo === "") {
//       alert('enter Bus No')
//     } else if (fromStation === undefined) {
//       alert('enter from Station')
//     } else if (toStation === undefined) {
//       alert('select an toStation')
//     } else if (date === "") {
//       alert('select Date')
//     } else if (arrivalTime === undefined) {
//       alert('select Arrival Time')
//     } else if (departureTime === undefined) {
//       alert('select Departure Time')
//     } else if (ticketPrice === undefined) {
//       alert('select Ticket Price')
//     } else {
//       const id = sessionStorage.getItem("id")
//       const data = new FormData()
//       data.append('date', date)
//       data.append('arrivalTime', arrivalTime)
//       data.append('departureTime', departureTime)
//       data.append('ticketPrice', ticketPrice)
//       data.append('busno', busNo)
//       data.append('fromStation', fromStation)
//       data.append('toStation', toStation)
//       data.append('agencyId', id)
//       // send the album info to the API
//       axios.post(url + '/trip/add', data).then((response) => {
//         const result = response.data
//         if (result.status === 'success') {
//           alert('successfully added new Trip')
//           history.push('/agency/home')
//         } else {
//           console.log(result.error)
//           alert('Select All Fields')
//         }
//       })
//     }
//   }
//   return (

//     <div>
//       <InnerNavbar />
//       <div class="container row">
//         <div className="list3">
//           <h3 className="">Add New Trip</h3>

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
//                   <td> <label>Bus</label></td>
//                   <td><div className="form-group">
//                     <select className="form-select" aria-label="Default select example" onChange={(e) => {
//                       setBusNo(e.target.value)
//                     }}>
//                       <option selected>Select Bus</option>
//                       {
//                         buses.map((bus) => {
//                           return (
//                             <option value={bus}>{bus}</option>
//                           )
//                         })
//                       }
//                     </select>
//                   </div></td>
//                 </tr>
//                 <tr>
//                   <td><label>From</label> </td>
//                   <td> <div className="form-group">
//                     <select className="form-select" aria-label="Default select example" onChange={(e) => {
//                       setFromStation(e.target.value)
//                     }}>
//                       <option selected>Select From Station</option>
//                       {
//                         stations.map((station) => {
//                           return (
//                             <option value={station}>{station}</option>
//                           )
//                         })
//                       }

//                     </select>
//                   </div></td>
//                 </tr>
//                 <tr>
//                   <td><label>To</label></td>
//                   <td> <div className="form-group">

//                     <select class="form-select" aria-label="Default select example" onChange={(e) => {
//                       setToStation(e.target.value)
//                     }}>
//                       <option selected>Select To Station</option>
//                       {
//                         stations.map((station) => {
//                           return (
//                             <option value={station}>{station}</option>
//                           )
//                         })
//                       }
//                     </select>
//                   </div></td>
//                 </tr>
//                 <tr>
//                   <td><label>date</label></td>
//                   <td><div className="form-group">

//                     <input type="date" className="form-control" min={disablePastDate()} onChange={(e) => {
//                       setDate(e.target.value)
//                     }} />
//                   </div></td>
//                 </tr>
//                 <tr>
//                   <td><label>Arrival Time</label></td>
//                   <td><div className="form-group">

//                     <input type="time" className="form-control" onChange={(e) => {
//                       setArrivalTime(e.target.value)
//                     }} />
//                   </div></td>
//                 </tr>
//                 <tr>
//                   <td><label>Departure Time</label></td>
//                   <td><div className="form-group">

//                     <input type="time" className="form-control" onChange={(e) => {
//                       setDepartureTime(e.target.value)
//                     }} />
//                   </div></td>
//                 </tr>
//                 <tr>
//                   <td><label>Ticket Price</label></td>
//                   <td><div className="form-group">

//                     <input type="number" className="form-control" onChange={(e) => {
//                       setTicketPrice(e.target.value)
//                     }} />
//                   </div></td>
//                 </tr>
//                 <tr>
//                   <td></td>
//                   <td><div className="button">
//                     <br />
//                     <button type="button" className="addBtn" onClick={confirmAdd}>Add Trip</button>
//                   </div></td>
//                 </tr>
//               </tbody>
//             </table>
//           </form>
//         </div>
//       </div>


//     </div>




//   )
// }

// export default NewTrip



import InnerNavbar from "../InnerNavbar/InnerNavbar"
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { url } from '../Common/Constant'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './NewTrip.css'

const NewTrip = () => {
  const history = useHistory()
  // const MySwal = withReactContent(Swal)

  const [buses, setBuses] = useState([])
  const [stations, setStations] = useState([])
  const [busNo, setBusNo] = useState()
  const [fromStation, setFromStation] = useState()
  const [toStation, setToStation] = useState()
  const [date, setDate] = useState()
  const [arrivalTime, setArrivalTime] = useState()
  const [departureTime, setDepartureTime] = useState()
  const [ticketPrice, setTicketPrice] = useState()

  useEffect(() => {
    getBuses()
    getStations()
  }, [])

  const disablePastDate = () => {
    const today = new Date()
    const dd = String(today.getDate() + 1).padStart(2, "0")
    const mm = String(today.getMonth() + 1).padStart(2, "0")
    const yyyy = today.getFullYear()
    return yyyy + "-" + mm + "-" + dd
  }

  const getBuses = () => {
    const id = sessionStorage.getItem("id")
    axios.get(url + '/bus/agency/' + id).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setBuses(result.data)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error fetching buses!'
        })
      }
    })
  }

  const getStations = () => {
    axios.get(url + '/station/all').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setStations(result.data)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error fetching stations!'
        })
      }
    })
  }

  const confirmAdd = () => {
    if (busNo === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Enter Bus No'
      })
    } else if (fromStation === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Enter from Station'
      })
    } else if (toStation === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Select a toStation'
      })
    } else if (date === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Select Date'
      })
    } else if (arrivalTime === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Select Arrival Time'
      })
    } else if (departureTime === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Select Departure Time'
      })
    } else if (ticketPrice === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Select Ticket Price'
      })
    } else {
      const id = sessionStorage.getItem("id")
      const data = new FormData()
      data.append('date', date)
      data.append('arrivalTime', arrivalTime)
      data.append('departureTime', departureTime)
      data.append('ticketPrice', ticketPrice)
      data.append('busno', busNo)
      data.append('fromStation', fromStation)
      data.append('toStation', toStation)
      data.append('agencyId', id)
      axios.post(url + '/trip/add', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Successfully added new Trip'
          })
          history.push('/agency/home')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error adding trip. Select All Fields'
          })
        }
      })
    }
  }

  return (
    <div>
      <InnerNavbar />
      <div className="container mt-4 w-50 mx-auto" >
        <div className="card">
          <div className="card-header text-white text-center" style={{backgroundColor:"#7e22ce"}}>
            <h3 className="">Add New Trip</h3>
          </div>
          <div className="card-body">
            <form className="form">
              <div className="mb-3">
                <label className="form-label">Bus</label>
                <select className="form-select" onChange={(e) => setBusNo(e.target.value)}>
                  <option selected>Select Bus</option>
                  {buses.map((bus) => (
                    <option value={bus} key={bus}>{bus}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">From</label>
                <select className="form-select" onChange={(e) => setFromStation(e.target.value)}>
                  <option selected>Select From Station</option>
                  {stations.map((station) => (
                    <option value={station} key={station}>{station}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">To</label>
                <select className="form-select" onChange={(e) => setToStation(e.target.value)}>
                  <option selected>Select To Station</option>
                  {stations.map((station) => (
                    <option value={station} key={station}>{station}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" min={disablePastDate()} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Arrival Time</label>
                <input type="time" className="form-control" onChange={(e) => setArrivalTime(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Departure Time</label>
                <input type="time" className="form-control" onChange={(e) => setDepartureTime(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Ticket Price</label>
                <input type="number" className="form-control" onChange={(e) => setTicketPrice(e.target.value)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={confirmAdd}>Add Trip</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTrip
