// import React from "react";
// import { useState } from "react";
// import axios from 'axios'


// import { Link,useHistory } from "react-router-dom";
// import Navbar from "../layout/Navbar";

// const AddStation = () => {// file name and function name should be same

//   const [name,setName]=useState("")
//     // const [address,setAddress]=useState("")
//     const [city,setCity]=useState("")

//     const history = useHistory();
    
//     const addStationToDB = () =>{
//       if(name.length === 0){
//         alert('Enter station name')
//       }else if(city.length===0){
//         alert('Enter station city')
//       }else{

//         const data = new FormData()

//         data.append('name',name)
//         // data.append('address',address)
//         data.append('city',city)

//         console.log(data.getAll)

//         axios.post('http://localhost:8080/station/addstation',data).then ((response) =>{
//           const result = response.data
//           if(result.status === 'success'){
//             alert('successfully added station')

//            // history.push('/agencylist')
//           }else{
//             alert('error while adding station')
//           }
//         })
//       }
//     }

//     return(
//       <div>
//         <Navbar/>
//       <div className="container w-50">
//           <div class="col-md-4"></div><br></br>
//         <h1 className="text-center card cul">Add New Station</h1><hr/>
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

//           <div className="form-group">
//             <label for="inputEmail3" class="col-sm-2 col-form-label"><h3>City</h3></label>
//             <input type="text" 
//                    className="form-control form-control-md" 
//                    placeholder="Enter Station City"
//                    onChange={(e) => {
//                     setCity(e.target.value)
//                   }}
//             />
//           </div>
//           <br></br>
//           <button onClick={addStationToDB} type="submit" class="btn btn-success"  >Confirm</button>&nbsp;&nbsp;
          
//           <Link to="/stationlist">
//           <a className="btn btn-warning">Back</a>
//         </Link>
//           </form>
//       </div>
      
//       </div>
//     )

// }

// export default AddStation;

import React from "react";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Navbar from "../layout/Navbar";

const AddStation = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      city: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter station name"),
      city: Yup.string().required("Enter station city"),
    }),
    onSubmit: (values) => {
      const data = new FormData();
      data.append("name", values.name);
      data.append("city", values.city);

      axios.post('http://localhost:8080/station/addstation', data)
        .then((response) => {
          const result = response.data;
          if (result.status === 'success') {
            Swal.fire('Success', 'Successfully added station', 'success').then(() => {
              history.push('/stationlist');
            });
          } else {
            Swal.fire('Error', 'Error while adding station', 'error');
          }
        })
        .catch((error) => {
          Swal.fire('Error', error.message, 'error');
        });
    },
  });

  return (
    <div>
      <Navbar />
      <div className="container w-50 mt-4">
        <div className="card">
          <div className="card-header text-center  text-white" style={{backgroundColor:"#7e22ce"}}>
            <h3 >Add New Station</h3>
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                  placeholder="Enter Station Name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className={`form-control ${formik.touched.city && formik.errors.city ? 'is-invalid' : ''}`}
                  placeholder="Enter Station City"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="invalid-feedback">{formik.errors.city}</div>
                ) : null}
              </div>
              <br />
              <button type="submit" className="btn btn-success">Confirm</button>
              &nbsp;&nbsp;
              <Link to="/stationlist" className="btn btn-warning">Back</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStation;
