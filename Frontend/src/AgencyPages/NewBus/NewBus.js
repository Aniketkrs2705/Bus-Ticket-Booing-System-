// import InnerNavbar from "../InnerNavbar/InnerNavbar"
// import { useHistory } from 'react-router-dom'
// import axios from 'axios'
// import { url } from '../Common/Constant'
// import { useState } from 'react'
// import './NewBus.css'

// const NewBus = () => {
//     let history = useHistory()

//     const [busNo, setBusNo] = useState()
//     const [busType, setBusType] = useState()
//     const [busModel, setBusModel] = useState()

//     const addBus = () => {
//         if (busNo === "") {
//             alert('enter Bus No')
//         } else if (busModel === "") {
//             alert('enter bus Model')
//         } else if (busType === "") {
//             alert('enter bus Type')
//         } else {
//             const id = sessionStorage.getItem("id")
//             const data = new FormData()
//             data.append('busNo', busNo)
//             data.append('model', busModel)
//             data.append('type', busType)
//             data.append('agencyId', id)
//              history.push('/agency/home')
//             axios.post(url + '/bus/add', data).then((response) => {
//                 const result = response.data
//                 console.log(result)
//                 if (result.status === 'success') { 
//                     alert('Bus added successfully')
//                     history.push('/agency/home')
                    
//                 } else {
                    
//                     console.log(result.error)
                   
//                     alert('Error in Bus Addition')
                    
//                 }
//             })
//         }
//     }



//     return (
//         <div>
//             <InnerNavbar />
//             <div class="container row">
//                 <div className="list3">
//                     <h3 className="">Add New Bus</h3>

//                     <form className="form-control">
//                         <table className="table table-responsive table-striped table-hover styled-table">
//                             <thead>
//                                 <tr>
//                                     <th></th>
//                                     <th></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td> <label>Bus No</label></td>
//                                     <td><div className="form-group">
//                                         <input type="text" className="form-control" placeholder="Enter Bus No" onChange={(e) => {
//                                             setBusNo(e.target.value)
//                                         }} />
//                                     </div></td>
//                                 </tr>
//                                 <tr>
//                                     <td><label>Bus Type</label> </td>
//                                     <td> <div>

//                                         <select class="form-select" aria-label="Default select example" onChange={(e) => {
//                                             setBusType(e.target.value)
//                                         }}>
//                                             <option selected> select Bus Type</option>
//                                             <option value="A/C">A/C</option>
//                                             <option value="Non A/C">Non A/C</option>
//                                         </select>
//                                     </div></td>
//                                 </tr>
//                                 <tr>
//                                     <td><label>Model</label></td>
//                                     <td> <div className="form-group">

//                                         <input type="text" className="form-control" placeholder="Enter model" onChange={(e) => {
//                                             setBusModel(e.target.value)
//                                         }} />
//                                     </div></td>
//                                 </tr>
//                                 <tr>
//                                     <td></td>
//                                     <td><div className="button">
//                                         <br />
//                                         <button type="submit" className="addBtn" onClick={addBus}>Add Bus</button>
//                                     </div></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </form>
//                 </div>
//             </div>


//         </div>





//     )
// }

// export default NewBus


import InnerNavbar from "../InnerNavbar/InnerNavbar"
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { url } from '../Common/Constant'
import { useState } from 'react'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NewBus.css'

const NewBus = () => {
  const history = useHistory()
//   const MySwal = withReactContent(Swal)

  const [busNo, setBusNo] = useState("")
  const [busType, setBusType] = useState("")
  const [busModel, setBusModel] = useState("")

  const addBus = (e) => {
    e.preventDefault()

    if (busNo === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Enter Bus No'
      })
    } else if (busModel === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Enter Bus Model'
      })
    } else if (busType === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Enter Bus Type'
      })
    } else {
      const id = sessionStorage.getItem("id")
      const data = new FormData()
      data.append('busNo', busNo)
      data.append('model', busModel)
      data.append('type', busType)
      data.append('agencyId', id)
      
      axios.post(url + '/bus/add', data).then((response) => {
        const result = response.data
        console.log(result)
        if (result.status === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Bus added successfully'
          })
          history.push('/agency/home')
        } else {
          console.log(result.error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error in Bus Addition'
          })
        }
      })
    }
  }

  return (
    <div>
      <InnerNavbar />
      <div className="container mt-4 w-50 mx-auto">
        <div className="card">
          <div className="card-header text-white text-center" style={{backgroundColor:"#7e22ce"}}>
            <h3 className="">Add New Bus</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={addBus}>
              <div className="mb-3">
                <label className="form-label">Bus No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Bus No"
                  value={busNo}
                  onChange={(e) => setBusNo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Bus Type</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={busType}
                  onChange={(e) => setBusType(e.target.value)}
                >
                  <option value="" disabled>Select Bus Type</option>
                  <option value="A/C">A/C</option>
                  <option value="Non A/C">Non A/C</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Model</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Model"
                  value={busModel}
                  onChange={(e) => setBusModel(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Add Bus</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewBus
