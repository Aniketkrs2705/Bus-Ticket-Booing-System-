// import React from "react";
// import { useState, useEffect } from "react";
// import axios from 'axios'
// import { Link} from "react-router-dom";
// import { url } from './../../common/Constants';
// import './AddRoute.css'
// import Navbar from "../layout/Navbar";

// const AddRoute = () => {
//   const [routeName,setName]=useState("") 
//   const [fromStation,setFromStation]=useState("") 
//   const [toStation,setToStation]=useState("") 
//   const [stations, setStation] = useState([])

//   useEffect(() => {
//     getStations()
//   }, [])

//   const getStations = () =>{
//     axios.get(url + '/station/routes').then((response) => {
//       const result = response.data
//             if(result.status ==='success'){
//               setStation(result.data)
//               // history.push('/routes')
//             }else{
//               console.log(result.error)
//               alert('Bus not found!')
//             }
//     })
//   }

//     const addRouteToDB = () =>{
//       if(fromStation.length === 0){
//         alert('Select From Station Name')
//       }else if(toStation.length === 0){
//         alert('Select To Station Name')
//       }else {
//         const data = new FormData()

//         data.append('fromStation',fromStation)
//         data.append('toStation',toStation)

//         console.log(data.getAll)

//         axios.post('http://localhost:8080/route/addroute',data).then ((response) =>{
//           const result = response.data
//           if(result.status === 'success'){
//             alert('successfully added route')
//            // history.push('/agencylist')
//           }else{
//             alert('error while adding route')
//           }
//         })
//       }
//     }

//     return(
//       <div className="">
//         <Navbar/>
//       <div className="container w-50">
        
//           <div class="col-md-4"></div><br></br><br></br><br></br>
//         <h1 className="text-center card ">Add New route</h1>
//         <form >
//         <div className="input-group">
//             <span className="input-group-text">From</span>
//             <input className="form-control" list="datalistOptions" placeholder="Select Source"  onChange={(event) => {setFromStation(event.target.value)}}/>
//             <datalist id="datalistOptions">
//               {stations.map((station)=>{
//                 // return <TripRow station = {station}/>
//                 return <option value={station.name}>{station.name}</option>
//               })}
//             </datalist>
            
//             <span className="input-group-text">To</span>
//             <input className="form-control" list="datalistOptions" placeholder="Select Destination" onChange={(event) => {setToStation(event.target.value)}}/>
//             <datalist id="datalistOptions">
//             {stations.map((station)=>{
//               // return <TripRow station = {station}/>
//               return <option value={station.name}>{station.name}</option>
//             })}
//             </datalist>
//           </div>

//           <br></br>
//           <button onClick={addRouteToDB} type="submit" class="btn btn-success"  >Confirm</button>&nbsp;&nbsp;
          
//           <Link to="/routelist">
//           <a className="btn btn-warning">Back</a>
//         </Link>

//           </form>
          
        
//       </div>
//             </div>
      
//     )

// }

// export default AddRoute;


import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { url } from './../../common/Constants';
import Navbar from "../layout/Navbar";
import './AddRoute.css';

const AddRoute = () => {
  const [stations, setStation] = useState([]);

  useEffect(() => {
    getStations();
  }, []);

  const getStations = () => {
    axios.get(url + '/station/routes').then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setStation(result.data);
      } else {
        Swal.fire('Error', 'Stations not found!', 'error');
      }
    });
  };

  const initialValues = {
    fromStation: '',
    toStation: ''
  };

  const validationSchema = Yup.object().shape({
    fromStation: Yup.string().required('Select From Station Name'),
    toStation: Yup.string().required('Select To Station Name')
  });

  const onSubmit = (values) => {
    const data = new FormData();
    data.append('fromStation', values.fromStation);
    data.append('toStation', values.toStation);

    axios.post('http://localhost:8080/route/addroute', data).then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        Swal.fire('Success', 'Successfully added route', 'success');
        // history.push('/agencylist');
      } else {
        Swal.fire('Error', 'Error while adding route', 'error');
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="card mb-4 w-50 mx-auto">
          <div className="card-header text-white text-center" style={{backgroundColor:"#7e22ce"}}>
            <h3>Add New Route</h3>
          </div>
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="fromStation" className="form-label">From</label>
                  <Field
                    as="select"
                    name="fromStation"
                    className="form-select"
                  >
                    <option value="" label="Select Source" />
                    {stations.map((station) => (
                      <option key={station.name} value={station.name}>{station.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="fromStation" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="toStation" className="form-label">To</label>
                  <Field
                    as="select"
                    name="toStation"
                    className="form-select"
                  >
                    <option value="" label="Select Destination" />
                    {stations.map((station) => (
                      <option key={station.name} value={station.name}>{station.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="toStation" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-success">Confirm</button>
                <Link to="/routelist" className="btn btn-warning ms-3">Back</Link>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoute;
