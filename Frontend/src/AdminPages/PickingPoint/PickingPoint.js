// import React from "react";
// import { useState, useEffect } from "react";
// import { useHistory } from 'react-router-dom';
// import axios from 'axios'
// import { Link } from "react-router-dom";
// import './PickingPoint.css'
// import Navbar from "../layout/Navbar";

// const AddPickingPoint = () => {
//     const [name,setName]=useState("")
//     const history = useHistory();
//     const[pickingPoints, setPickingPoint] =useState([])
    
//     const routeId = sessionStorage.getItem("routeId")

//     useEffect(() => {
//         getPickingPoints();
//      }, []);
 
//      const getPickingPoints = () => {
//          axios.get('http://localhost:8080/route/getpickingpoint/'+ routeId).then((response) => {
//            const result = response.data
//            if (result.status === 'success') {
//             setPickingPoint(result.data)
//            } else {
//              alert('error while loading list of Routes')
//            }
//          })
//        }

//     const addStationToDB = () =>{
//       if(name.length === 0){
//         alert('Enter station name')
//       }else{
//         const data = new FormData()
//         data.append('name',name)
//         // data.append('routeId',routeId)

//         axios.post('http://localhost:8080/route/addpickingpoint/'+ routeId,data).then ((response) =>{
//           const result = response.data
//           if(result.status === 'success'){
//             alert('successfully added station')
//             history.push('/routelist')
//           }else{
//             alert('error while adding station')
//           }
//         })
//       }
//     }

//     return(
//       <div>
//         <Navbar/>
//           <div className="container w-50">
//           <div class="col-md-4"></div>
//         <h1 className="text-center mb-4">Add New Picking Point</h1><hr/>
//         <form >
//           <div className="form-group">
//             <label for="inputEmail3" class="col-sm-2 col-form-label"><h3>Name  </h3></label>
//             <input type="text"
//                    className="form-control form-control-md" 
//                    placeholder="Enter Station Name"
//                    onChange={(e) => {
//                     setName(e.target.value)
//                   }}
//             />
//           </div>
//           <button onClick={addStationToDB} type="submit" class="btn btn-success">Confirm</button>
          
//           <Link to="/routelist">
//           <a className="btn btn-warning">Back</a>
//         </Link>
//           </form>
//       </div>
      
//       <div className="list2">
//             <h3 className="label1">Picking Point List</h3>
//             <table className="table table-responsive table-striped table-hover">
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th></th>
//                         <th>Id</th>
//                     <th></th>
//                    <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//               {pickingPoints.map((point)=>{
//                   return(
//                       <tr>
//                           <td></td>
//                           <td></td>
//                           <td>{point.id}</td>
//                           <td></td>
//                           <td>{point.name}</td>
//                       </tr>
//                   )
//               })}
//           </tbody>
//             </table>
//         </div>
//       </div>
      
//     )

// }

// export default AddPickingPoint;


import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PickingPoint.css';
import Navbar from "../layout/Navbar";

const AddPickingPoint = () => {
  const [pickingPoints, setPickingPoint] = useState([]);
  const history = useHistory();
  const routeId = sessionStorage.getItem("routeId");

  useEffect(() => {
    getPickingPoints();
  }, []);

  const getPickingPoints = () => {
    axios.get('http://localhost:8080/route/getpickingpoint/' + routeId).then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        setPickingPoint(result.data);
      } else {
        Swal.fire('Error', 'Error while loading list of Routes', 'error');
      }
    });
  };

  const initialValues = {
    name: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Station name is required')
  });

  const onSubmit = (values) => {
    const data = new FormData();
    data.append('name', values.name);

    axios.post('http://localhost:8080/route/addpickingpoint/' + routeId, data).then((response) => {
      const result = response.data;
      if (result.status === 'success') {
        Swal.fire('Success', 'Successfully added station', 'success');
        history.push('/routelist');
      } else {
        Swal.fire('Error', 'Error while adding station', 'error');
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="card mb-4 w-50 mx-auto">
          <div className="card-header  text-white text-center" style={{backgroundColor:"#7e22ce"}}>
            <h3>Add New Picking Point</h3>
          </div>
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Station Name"
                  />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-success mt-3">Confirm</button>
                <Link to="/routelist" className="btn btn-warning mt-3 ms-3">Back</Link>
              </Form>
            </Formik>
          </div>
        </div>

        <div className="card w-50 mx-auto">
          <div className="card-header  text-white text-center" style={{backgroundColor:"#7e22ce"}}>
            <h3>Picking Point List</h3>
          </div>
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead style={{backgroundColor:"#ae77df"}} >
                <tr>
                  <th style={{color:"white"}}>Id</th>
                  <th style={{color:"white"}}>Name</th>
                </tr>
              </thead>
              <tbody>
                {pickingPoints.map((point) => (
                  <tr key={point.id}>
                    <td>{point.id}</td>
                    <td>{point.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPickingPoint;
