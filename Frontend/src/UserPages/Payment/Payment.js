// import './Payment.css'
// import axios from 'axios'
// import { useHistory } from 'react-router'
// import { url } from './../../common/Constants';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';

// const Payment = () =>{
//     const trip = JSON.parse(sessionStorage.getItem("bus"))
//     const seatNumber = sessionStorage.getItem("reservedSeats")
//     const pickingPoint = sessionStorage.getItem("pickingPoint")
//     const droppingPoint = sessionStorage.getItem("droppingPoint")

//     const history = useHistory()

//     const Proceed = () => {
//         const id = sessionStorage.getItem("id")

//         const data = new FormData()
//         data.append('seatNumber',seatNumber)
//         data.append('pickingPoint',pickingPoint)
//         data.append('droppingPoint',droppingPoint)
//         data.append('tripId',trip.tripId)
//         data.append('userId',id)
//         data.append('busNo',trip.busNo)

//         axios.post(url + '/payment/details', data).then((response) => {
//             const result = response.data
//             if(result.status ==='success'){
//                 alert('Payment Successfull!')
//                 sessionStorage.setItem("result",JSON.stringify(result.data))
//                 history.push('/ticket')
//             }else{
//                 console.log(result.error)
//             }
//         })
//     }
//     if(sessionStorage.getItem("id")!==null){
//     return(
//        <div>
//            <UserNavbar/>
//            <div className="container">
//            <div className="row ">
//            <div className="col-md-3"></div>
//            <div className="col-md-6">
//                <div className="card">
//                    <h3 className="label1">Payment Method</h3>
//                    <div className="accordion" id="accordionExample">
//                        <div>
//                            <div className="card-header p-0" id="headingTwo">
//                                <h2 className="mb-0"> <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                        <div className="d-flex align-items-center justify-content-between"> <span>Paypal</span> <img src="https://i.imgur.com/7kQEsHU.png" width="30"/> </div>
//                                    </button> </h2>
//                            </div>
//                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
//                                <div className="card-body"> <input type="text" className="form-control" placeholder="Paypal email"/> </div>
//                            </div>
//                        </div>
//                        <div className="card">
//                            <div className="card-header p-0">
//                                <h2 className="mb-0"> <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                        <div className="d-flex align-items-center justify-content-between"> <span>Credit card</span>
//                                            <div className="icons"> <img src="https://i.imgur.com/2ISgYja.png" width="30"/> <img src="https://i.imgur.com/W1vtnOV.png" width="30"/> <img src="https://i.imgur.com/35tC99g.png" width="30"/> <img src="https://i.imgur.com/2ISgYja.png" width="30"/> </div>
//                                        </div>
//                                    </button> </h2>
//                            </div>
//                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//                                <div className="card-body payment-card-body"> <span className="font-weight-normal card-text">Card Number</span>
//                                    <div className="input"> <i className="fa fa-credit-card"></i> <input type="text" className="form-control" placeholder="0000 0000 0000 0000"/> </div>
//                                    <div className="row mt-3 mb-3">
//                                        <div className="col-md-6"> <span className="font-weight-normal card-text">Expiry Date</span>
//                                            <div className="input"> <i className="fa fa-calendar"></i> <input type="text" className="form-control" placeholder="MM/YY"/> </div>
//                                        </div>
//                                        <div className="col-md-6"> <span className="font-weight-normal card-text">CVC/CVV</span>
//                                            <div className="input"> <i className="fa fa-lock"></i> <input type="text" className="form-control" placeholder="000"/> </div>
//                                        </div>
//                                    </div> <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
//                                </div>
//                            </div>
//                            <div className="p-3"> <button className="btn btn-primary btn-block free-button" onClick={Proceed}>Confirm Payment</button>
//                        <div className="text-center"> <a href="#">Have a promo code?</a> </div>
//                    </div>
//                        </div>
//                    </div>
//                </div>
//            </div>
//            <div className="col-md-3"></div>
//        </div> 
//    </div>
//        </div>
  
//     )}else{return(<UserLogIn/>)}
// }
// export default Payment



// import './Payment.css'
// import axios from 'axios'
// import { useHistory } from 'react-router-dom' // updated import for 'react-router-dom'
// import { url } from './../../common/Constants';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';

// const Payment = () => {
//     const trip = JSON.parse(sessionStorage.getItem("bus"))
//     const seatNumber = sessionStorage.getItem("reservedSeats")
//     const pickingPoint = sessionStorage.getItem("pickingPoint")
//     const droppingPoint = sessionStorage.getItem("droppingPoint")

//     const history = useHistory()

//     const Proceed = () => {
//         const id = sessionStorage.getItem("id")

//         // Data for /payment/details
//         const paymentData = new FormData()
//         paymentData.append('seatNumber', seatNumber)
//         paymentData.append('pickingPoint', pickingPoint)
//         paymentData.append('droppingPoint', droppingPoint)
//         paymentData.append('tripId', trip.tripId)
//         paymentData.append('userId', id)
//         paymentData.append('busNo', trip.busNo)

//         // Data for /seats
//         const seatData = {
//             seatNo: seatNumber,
//             booked: 1,
//             trip: { tripId: trip.tripId },
//             ticket: { ticketId: id },
//             user: { userId: id }
//         }

//         // First, make the payment request
//         axios.post(url + '/payment/details', paymentData).then((response) => {
//             const result = response.data
//             if (result.status === 'success') {
//                 // If payment is successful, make the request to save the seat
//                 axios.post(url + '/seats', seatData).then((seatResponse) => {
//                     const seatResult = seatResponse.data
//                     if (seatResult.status === 'success') {
//                         alert('Payment and Seat Booking Successful!')
//                         sessionStorage.setItem("result", JSON.stringify(seatResult.data))
//                         history.push('/ticket')
//                     } else {
//                         console.log(seatResult.error)
//                     }
//                 }).catch((error) => {
//                     console.log('Error saving seat!', error)
//                 })
//             } else {
//                 console.log(result.error)
//             }
//         }).catch((error) => {
//             console.log('Error with payment!', error)
//         })
//     }

//     if (sessionStorage.getItem("id") !== null) {
//         return (
//             <div>
//                 <UserNavbar />
//                 <div className="container">
//                     <div className="row ">
//                         <div className="col-md-3"></div>
//                         <div className="col-md-6">
//                             <div className="card">
//                                 <h3 className="label1">Payment Method</h3>
//                                 <div className="accordion" id="accordionExample">
//                                     <div>
//                                         <div className="card-header p-0" id="headingTwo">
//                                             <h2 className="mb-0">
//                                                 <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     <div className="d-flex align-items-center justify-content-between"> <span>Paypal</span> <img src="https://i.imgur.com/7kQEsHU.png" width="30" /> </div>
//                                                 </button>
//                                             </h2>
//                                         </div>
//                                         <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
//                                             <div className="card-body"> <input type="text" className="form-control" placeholder="Paypal email" /> </div>
//                                         </div>
//                                     </div>
//                                     <div className="card">
//                                         <div className="card-header p-0">
//                                             <h2 className="mb-0">
//                                                 <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                                     <div className="d-flex align-items-center justify-content-between">
//                                                         <span>Credit card</span>
//                                                         <div className="icons">
//                                                             <img src="https://i.imgur.com/2ISgYja.png" width="30" />
//                                                             <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
//                                                             <img src="https://i.imgur.com/35tC99g.png" width="30" />
//                                                             <img src="https://i.imgur.com/2ISgYja.png" width="30" />
//                                                         </div>
//                                                     </div>
//                                                 </button>
//                                             </h2>
//                                         </div>
//                                         <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//                                             <div className="card-body payment-card-body">
//                                                 <span className="font-weight-normal card-text">Card Number</span>
//                                                 <div className="input"> <i className="fa fa-credit-card"></i> <input type="text" className="form-control" placeholder="0000 0000 0000 0000" /> </div>
//                                                 <div className="row mt-3 mb-3">
//                                                     <div className="col-md-6">
//                                                         <span className="font-weight-normal card-text">Expiry Date</span>
//                                                         <div className="input"> <i className="fa fa-calendar"></i> <input type="text" className="form-control" placeholder="MM/YY" /> </div>
//                                                     </div>
//                                                     <div className="col-md-6">
//                                                         <span className="font-weight-normal card-text">CVC/CVV</span>
//                                                         <div className="input"> <i className="fa fa-lock"></i> <input type="text" className="form-control" placeholder="000" /> </div>
//                                                     </div>
//                                                 </div>
//                                                 <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with SSL certificate</span>
//                                             </div>
//                                         </div>
//                                         <div className="p-3">
//                                             <button className="btn btn-primary btn-block free-button" onClick={Proceed}>Confirm Payment</button>
//                                             <div className="text-center"> <a href="#">Have a promo code?</a> </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3"></div>
//                     </div>
//                 </div>
//             </div>
//         )
//     } else {
//         return (<UserLogIn />)
//     }
// }

// export default Payment


// import './Payment.css'
// import axios from 'axios'
// import { useHistory } from 'react-router-dom' // updated import for 'react-router-dom'
// import { url } from './../../common/Constants';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';

// const Payment = () => {
//     const trip = JSON.parse(sessionStorage.getItem("bus"))
//     const seatNumber = sessionStorage.getItem("reservedSeats")
//     const pickingPoint = sessionStorage.getItem("pickingPoint")
//     const droppingPoint = sessionStorage.getItem("droppingPoint")

//     const history = useHistory()

//     const Proceed = () => {
//         const id = sessionStorage.getItem("id")

//         // Data for /payment/details
//         const paymentData = new FormData()
//         paymentData.append('seatNumber', seatNumber)
//         paymentData.append('pickingPoint', pickingPoint)
//         paymentData.append('droppingPoint', droppingPoint)
//         paymentData.append('tripId', trip.tripId)
//         paymentData.append('userId', id)
//         paymentData.append('busNo', trip.busNo)

//         // Data for /seats
//         const seatData = {
//             seatNo: seatNumber,
//             booked: 1,
//             trip: { tripId: trip.tripId },
//             ticket: { ticketId: id },
//             user: { userId: id }
//         }

//         console.log('Payment Data:', paymentData)
//         console.log('Seat Data:', seatData)

//         // First, make the payment request
//         axios.post(url + '/payment/details', paymentData).then((response) => {
//             const result = response.data
//             console.log('Payment Response:', result)
//             if (result.status === 'success') {
//                 // If payment is successful, make the request to save the seat
//                 axios.post(url + '/seats', seatData).then((seatResponse) => {
//                     const seatResult = seatResponse.data
//                     console.log('Seat Response:', seatResult)
//                     if (seatResult && seatResult.seatId) {
//                         alert('Payment and Seat Booking Successful!')
//                         sessionStorage.setItem("result", JSON.stringify(result.data))
                        
//                         history.push('/ticket')
//                     } else {
//                         console.error('Seat Booking Error: Invalid seat response', seatResult)
//                     }
//                 }).catch((error) => {
//                     console.error('Error saving seat!', error)
//                 })
//             } else {
//                 console.error('Payment Error:', result.error)
//             }
//         }).catch((error) => {
//             console.error('Error with payment!', error)
//         })
//     }

//     if (sessionStorage.getItem("id") !== null) {
//         return (
//             <div>
//                 <UserNavbar />
//                 <div className="container">
//                     <div className="row ">
//                         <div className="col-md-3"></div>
//                         <div className="col-md-6">
//                             <div className="card">
//                                 <h3 className="label1">Payment Method</h3>
//                                 <div className="accordion" id="accordionExample">
//                                     <div>
//                                         <div className="card-header p-0" id="headingTwo">
//                                             <h2 className="mb-0">
//                                                 <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     <div className="d-flex align-items-center justify-content-between"> <span>Paypal</span> <img src="https://i.imgur.com/7kQEsHU.png" width="30" /> </div>
//                                                 </button>
//                                             </h2>
//                                         </div>
//                                         <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
//                                             <div className="card-body"> <input type="text" className="form-control" placeholder="Paypal email" /> </div>
//                                         </div>
//                                     </div>
//                                     <div className="card">
//                                         <div className="card-header p-0">
//                                             <h2 className="mb-0">
//                                                 <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                                     <div className="d-flex align-items-center justify-content-between">
//                                                         <span>Credit card</span>
//                                                         <div className="icons">
//                                                             <img src="https://i.imgur.com/2ISgYja.png" width="30" />
//                                                             <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
//                                                             <img src="https://i.imgur.com/35tC99g.png" width="30" />
//                                                             <img src="https://i.imgur.com/2ISgYja.png" width="30" />
//                                                         </div>
//                                                     </div>
//                                                 </button>
//                                             </h2>
//                                         </div>
//                                         <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//                                             <div className="card-body payment-card-body">
//                                                 <span className="font-weight-normal card-text">Card Number</span>
//                                                 <div className="input"> <i className="fa fa-credit-card"></i> <input type="text" className="form-control" placeholder="0000 0000 0000 0000" /> </div>
//                                                 <div className="row mt-3 mb-3">
//                                                     <div className="col-md-6">
//                                                         <span className="font-weight-normal card-text">Expiry Date</span>
//                                                         <div className="input"> <i className="fa fa-calendar"></i> <input type="text" className="form-control" placeholder="MM/YY" /> </div>
//                                                     </div>
//                                                     <div className="col-md-6">
//                                                         <span className="font-weight-normal card-text">CVC/CVV</span>
//                                                         <div className="input"> < i className="fa fa-lock"></i> <input type="text" className="form-control" placeholder="000" /> </div>
//                                                     </div>
//                                                 </div>
//                                                 <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with SSL certificate</span>
//                                             </div>
//                                         </div>
//                                         <div className="p-3">
//                                             <button className="btn btn-primary btn-block free-button" onClick={Proceed}>Confirm Payment</button>
//                                             <div className="text-center"> <a href="#">Have a promo code?</a> </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3"></div>
//                     </div>
//                 </div>
//             </div>
//         )
//     } else {
//         return (<UserLogIn />)
//     }
// }

// export default Payment


import './Payment.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { url } from './../../common/Constants';
import UserNavbar from './../UserNavbar/UserNavbar';
import UserLogIn from './../UserLogIn/UserLogIn';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const Payment = () => {
    const trip = JSON.parse(sessionStorage.getItem("bus"));
    const seatNumber = sessionStorage.getItem("reservedSeats");
    const pickingPoint = sessionStorage.getItem("pickingPoint");
    const droppingPoint = sessionStorage.getItem("droppingPoint");

    const history = useHistory();

    const Proceed = (values) => {
        const id = sessionStorage.getItem("id");

        // Data for /payment/details
        const paymentData = new FormData();
        paymentData.append('seatNumber', seatNumber);
        paymentData.append('pickingPoint', pickingPoint);
        paymentData.append('droppingPoint', droppingPoint);
        paymentData.append('tripId', trip.tripId);
        paymentData.append('userId', id);
        paymentData.append('busNo', trip.busNo);

        // Data for /seats
        const seatData = {
            seatNo: seatNumber,
            booked: 1,
            trip: { tripId: trip.tripId },
            ticket: { ticketId: id },
            user: { userId: id }
        };

        console.log('Payment Data:', paymentData);
        console.log('Seat Data:', seatData);

        // First, make the payment request
        axios.post(url + '/payment/details', paymentData).then((response) => {
            const result = response.data;
            console.log('Payment Response:', result);
            if (result.status === 'success') {
                // If payment is successful, make the request to save the seat
                axios.post(url + '/seats', seatData).then((seatResponse) => {
                    const seatResult = seatResponse.data;
                    console.log('Seat Response:', seatResult);
                    if (seatResult && seatResult.seatId) {
                        Swal.fire('Success', 'Payment and Seat Booking Successful!', 'success');
                        sessionStorage.setItem("result", JSON.stringify(result.data));
                        history.push('/ticket');
                    } else {
                        console.error('Seat Booking Error: Invalid seat response', seatResult);
                        Swal.fire('Error', 'Seat Booking Error!', 'error');
                    }
                }).catch((error) => {
                    console.error('Error saving seat!', error);
                    Swal.fire('Error', 'Error saving seat!', 'error');
                });
            } else {
                console.error('Payment Error:', result.error);
                Swal.fire('Error', 'Payment Error!', 'error');
            }
        }).catch((error) => {
            console.error('Error with payment!', error);
            Swal.fire('Error', 'Error with payment!', 'error');
        });
    };

    const validationSchema = Yup.object().shape({
        cardNumber: Yup.string().required('Card Number is required').min(16, 'Card Number should be 16 digits').max(16, 'Card Number should be 16 digits'),
        expiryDate: Yup.string().required('Expiry Date is required').matches(/(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Expiry Date must be in MM/YY format'),
        cvv: Yup.string().required('CVC/CVV is required').min(3, 'CVC/CVV should be 3 digits').max(3, 'CVC/CVV should be 3 digits'),
        paypalEmail: Yup.string().email('Invalid email').when('paymentMethod', {
            is: 'paypal',
            then: Yup.string().required('Paypal email is required')
        })
    });

    if (sessionStorage.getItem("id") !== null) {
        return (
            <div>
                <UserNavbar />
                <div className="container">
                    <div className="row ">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card">
                                <h3 className="label1">Payment Method</h3>
                                <Formik
                                    initialValues={{
                                        cardNumber: '',
                                        expiryDate: '',
                                        cvv: '',
                                        paypalEmail: '',
                                        paymentMethod: 'creditcard'
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        Proceed(values);
                                    }}
                                >
                                    {({ values, setFieldValue }) => (
                                        <Form>
                                            <div className="accordion" id="accordionExample">
                                                <div>
                                                    <div className="card-header p-0" id="headingTwo">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                                                                onClick={() => setFieldValue('paymentMethod', 'paypal')}>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <span>Paypal</span>
                                                                    <img src="https://i.imgur.com/7kQEsHU.png" width="30" alt="Paypal" />
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <Field type="text" className="form-control" name="paypalEmail" placeholder="Paypal email" />
                                                            <ErrorMessage name="paypalEmail" component="div" className="text-danger" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-light btn-block text-left p-3 rounded-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                                                onClick={() => setFieldValue('paymentMethod', 'creditcard')}>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <span>Credit card</span>
                                                                    <div className="icons">
                                                                        <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="Visa" />
                                                                        <img src="https://i.imgur.com/W1vtnOV.png" width="30" alt="MasterCard" />
                                                                        <img src="https://i.imgur.com/35tC99g.png" width="30" alt="American Express" />
                                                                        <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="Visa" />
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body payment-card-body">
                                                            <div className="form-group">
                                                                <label className="font-weight-normal card-text">Card Number</label>
                                                                <div className="input">
                                                                    <i className="fa fa-credit-card"></i>
                                                                    <Field type="text" className="form-control" name="cardNumber" placeholder="0000 0000 0000 0000" />
                                                                </div>
                                                                <ErrorMessage name="cardNumber" component="div" className="text-danger" />
                                                            </div>
                                                            <div className="row mt-3 mb-3">
                                                                <div className="col-md-6">
                                                                    <label className="font-weight-normal card-text">Expiry Date</label>
                                                                    <div className="input">
                                                                        <i className="fa fa-calendar"></i>
                                                                        <Field type="text" className="form-control" name="expiryDate" placeholder="MM/YY" />
                                                                    </div>
                                                                    <ErrorMessage name="expiryDate" component="div" className="text-danger" />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label className="font-weight-normal card-text">CVC/CVV</label>
                                                                    <div className="input">
                                                                        <i className="fa fa-lock"></i>
                                                                        <Field type="text" className="form-control" name="cvv" placeholder="000" />
                                                                    </div>
                                                                    <ErrorMessage name="cvv" component="div" className="text-danger" />
                                                                </div>
                                                            </div>
                                                            <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with SSL certificate</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <button className="btn btn-primary btn-block free-button" type="submit">Confirm Payment</button>
                                                        <div className="text-center"> <a href="#">Have a promo code?</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<UserLogIn />);
    }
}

export default Payment;


