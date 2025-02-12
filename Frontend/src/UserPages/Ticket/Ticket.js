// import './Ticket.css'
// import axios from 'axios'
// import { useState} from 'react'
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';
// import { url } from './../../common/Constants';

// const Ticket = () => {
//     const ticket = JSON.parse(sessionStorage.getItem("result"))
//     const [email, setEmail] = useState("")

//     const SendEmail = () => {
//         if(email.length === 0) {
//             alert("Enter Email")
//         }else{
//             axios.post(url + "/ticket/sendemail/"+ email).then((response)=>{
//                 const result = response.data
//                 if(result.status === 'success'){
//                     console.log(result.data)
//                 }else{
//                     console.log(result.error)
//                 }
//             })
//         }
//     }

//     if(sessionStorage.getItem("id")!==null){
//     return (
//         <div>
//             <UserNavbar/>
//             <div className="container">
//            <div className="row">
//                 <div className="col-md-3"></div>
//                     <div className="col-md-6 tdiv">
//                         <h3 className="label">Happy Journey!</h3>
//                         <table className="table table-responsive">
//                             <tr>
//                                 <td>
//                                     <th>Ticket Id :</th>
//                                     <td className="td">{ticket.ticketId}</td>
//                                 </td>
//                                 <td>
//                                     <th>Date :</th>
//                                     <td className="td">{ticket.date}</td>
//                                 </td>
//                                 <td>
//                                     <th>Price :</th>
//                                     <td className="td">{ticket.ticketPrice * ticket.seatNo.length} /-</td>
//                                 </td>
//                             </tr>
//                         </table>
//                         <table className="table table-bordered table-condensed ticket1">
//                             <tr>
//                                 <td colspan="2">
//                                    <th>Name :</th>
//                                    <td></td>
//                                    <td className="td">{ticket.name}</td>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <th>From :</th>
//                                     <td></td>
//                                     <td className="td">{ticket.fromStation}</td>
//                                 </td>
//                                 <td></td>
//                                 <td>
//                                     <th>To :</th>
//                                     <td></td>
//                                     <td className="td">{ticket.toStation}</td>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 {/* <td>
//                                     <th>Seat No :</th>
//                                     <td></td>
//                                     <td className="td">{
//                                         ticket.seatNo.map((sNo)=>{
//                                             return(
//                                                 sNo + "  "
//                                             )
//                                         })}</td>
//                                 </td> */}
//                                 <td></td>
//                                 <td>
//                                     <th>Bus No :</th>
//                                     <td></td>
//                                     <td className="td">{ticket.busNo}</td>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <th>Picking Point :</th>
//                                     <td></td>
//                                     <td className="td">{ticket.pickingPoint}</td>
//                                 </td>
//                                 <td></td>
//                                 <td>
//                                     <th>Dropping Point :</th>
//                                     <td></td>
//                                     <td className="td">{ticket.droppingPoint}</td>
//                                 </td>
//                             </tr>
//                         </table>
//                         <div className="p-3 mb-2 bg-primary text-white">
//                             <form className="form-control">
//                                 <h3 className="user">Send Email</h3><br/>
//                                 <div className="form-group">
//                                     <label>Email Address</label>
//                                     <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>{
//                                             setEmail(e.target.value);
//                                         }}/>
//                                 </div>
//                                 <div className="button1">
//                                    <button type="submit" className="btn-primary" onClick={SendEmail}>Confirm</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 <div className="col-md-3"></div>
//             </div>
//         </div>
//         </div>
//     )}else{return(<UserLogIn/>)}
// }
// export default Ticket


// import './Ticket.css';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';
// import { url } from './../../common/Constants';

// const Ticket = () => {
//     const [ticket, setTicket] = useState(null);
    

//     useEffect(() => {
//         const ticketData = JSON.parse(sessionStorage.getItem("result"));
//         setTicket(ticketData);
//     }, []);

    

//     if (sessionStorage.getItem("id") === null) {
//         return <UserLogIn />;
//     }

//     if (!ticket) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <UserNavbar />
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-3"></div>
//                     <div className="col-md-6 tdiv">
//                         <h3 className="label">Happy Journey!</h3>
//                         <table className="table table-responsive">
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         <th>Ticket Id :</th>
//                                         <td className="td">{ticket.ticketId}</td>
//                                     </td>
//                                     <td>
//                                         <th>Date :</th>
//                                         <td className="td">{ticket.date}</td>
//                                     </td>
//                                     <td>
//                                         <th>Price :</th>
//                                         <td className="td">{ticket.ticketPrice * (Array.isArray(ticket.seatNo) ? ticket.seatNo.length : 0)} /-</td>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <table className="table table-bordered table-condensed ticket1">
//                             <tbody>
//                                 <tr>
//                                     <td colSpan="2">
//                                         <th>Name :</th>
//                                         <td className="td">{ticket.name}</td>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <th>From :</th>
//                                         <td className="td">{ticket.fromStation}</td>
//                                     </td>
//                                     <td>
//                                         <th>To :</th>
//                                         <td className="td">{ticket.toStation}</td>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <th>Seat No :</th>
//                                         <td className="td">
//                                             {Array.isArray(ticket.seatNo) ? ticket.seatNo.map((sNo, index) => (
//                                                 <span key={index}>{sNo} </span>
//                                             )) : ticket.seatNo}
//                                         </td>
//                                     </td>
//                                     <td>
//                                         <th>Bus No :</th>
//                                         <td className="td">{ticket.busNo}</td>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <th>Picking Point :</th>
//                                         <td className="td">{ticket.pickingPoint}</td>
//                                     </td>
//                                     <td>
//                                         <th>Dropping Point :</th>
//                                         <td className="td">{ticket.droppingPoint}</td>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
                        
//                     </div>
//                     <div className="col-md-3"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ticket;
// import './Ticket.css';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';
// import { url } from './../../common/Constants';

// const Ticket = () => {
//     const [ticket, setTicket] = useState(null);

//     useEffect(() => {
//         const ticketData = JSON.parse(sessionStorage.getItem("result"));
//         setTicket(ticketData);
//     }, []);

//     if (sessionStorage.getItem("id") === null) {
//         return <UserLogIn />;
//     }

//     if (!ticket) {
//         return <div className="text-center mt-5">Loading...</div>;
//     }

//     return (
//         <div>
//             <UserNavbar />
//             <div className="container my-5">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <div className="ticket">
//                             <div className="ticket-header">
//                                 <h3 className="text-center">Ticket</h3>
//                             </div>
//                             <div className="ticket-body">
//                                 <div className="row">
//                                     <div className="col-6">
//                                         <p><strong>Ticket Id:</strong> {ticket.ticketId}</p>
//                                         <p><strong>Date:</strong> {ticket.date}</p>
//                                         <p><strong>Price:</strong> {ticket.ticketPrice * (Array.isArray(ticket.seatNo) ? ticket.seatNo.length : 0)} /-</p>
//                                     </div>
//                                     <div className="col-6 text-end">
//                                         <p><strong>Bus No:</strong> {ticket.busNo}</p>
//                                     </div>
//                                 </div>
//                                 <div className="row mt-4">
//                                     <div className="col-12">
//                                         <p><strong>Name:</strong> {ticket.name}</p>
//                                         <p><strong>From:</strong> {ticket.fromStation}</p>
//                                         <p><strong>To:</strong> {ticket.toStation}</p>
//                                         <p><strong>Picking Point:</strong> {ticket.pickingPoint}</p>
//                                         <p><strong>Dropping Point:</strong> {ticket.droppingPoint}</p>
//                                         <p><strong>Seat No:</strong> {Array.isArray(ticket.seatNo) ? ticket.seatNo.join(', ') : ticket.seatNo}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="ticket-footer text-center">
//                                 <p><small>Thank you for booking with us!</small></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ticket;



// import './Ticket.css';
// import { useState, useEffect } from 'react';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';


// const Ticket = () => {
//     const [ticket, setTicket] = useState(null);

//     useEffect(() => {
//         const ticketData = JSON.parse(sessionStorage.getItem("result"));
//         setTicket(ticketData);
//     }, []);

//     if (sessionStorage.getItem("id") === null) {
//         return <UserLogIn />;
//     }

//     if (!ticket) {
//         return <div className="text-center mt-5">Loading...</div>;
//     }

//     return (
//         <div>
//             <UserNavbar />
//             <div className="ticket-container">
//                 <div className="ticket">
//                     <div className="ticket-header">
//                         <h3>BUS TICKET</h3>
//                     </div>
//                     <div className="ticket-section-1">
//                         <div className="ticket-section">
//                             <div>
//                                 <p><strong>Ticket Id: </strong> {ticket.ticketId}</p>
//                                 <p><strong>Date: </strong> {ticket.date}</p>
//                                 <p><strong>Price: </strong>{ticket.ticketPrice * (Array.isArray(ticket.seatNo) ? ticket.seatNo.length : 0)}</p>
//                             </div>
//                             <div className="text-end">
//                                 <img src={"https://cdn-icons-png.flaticon.com/512/1841/1841602.png"} alt="Bus" />
//                                 <p><strong>Bus No:</strong> {ticket.busNo}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="ticket-section-2">
//                         <div className="ticket-section">
//                             <div>
//                                 <p><strong>Name:</strong> {ticket.name}</p>
//                                 <p><strong>From:</strong> {ticket.fromStation}</p>
//                                 <p><strong>To:</strong> {ticket.toStation}</p>
//                                 <p><strong>Picking Point:</strong> {ticket.pickingPoint}</p>
//                                 <p><strong>Dropping Point:</strong> {ticket.droppingPoint}</p>
//                                 <p><strong>Seat No:</strong> {Array.isArray(ticket.seatNo) ? ticket.seatNo.join(', ') : ticket.seatNo}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="ticket-section-3">
//                         <div className="ticket-qr">
//                             <img src={"https://cdn-icons-png.flaticon.com/512/2649/2649272.png"} width={80} alt="QR Code" />
//                         </div>
//                     </div>
//                     <div className="ticket-footer">
//                         <p><small>Thank you for booking with us!</small></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ticket;


// import './Ticket.css';
// import { useState, useEffect } from 'react';
// import UserNavbar from './../UserNavbar/UserNavbar';
// import UserLogIn from './../UserLogIn/UserLogIn';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Ticket = () => {
//     const [ticket, setTicket] = useState(null);

//     useEffect(() => {
//         const ticketData = JSON.parse(sessionStorage.getItem("result"));
//         setTicket(ticketData);
//     }, []);

//     if (sessionStorage.getItem("id") === null) {
//         return <UserLogIn />;
//     }

//     if (!ticket) {
//         return <div className="text-center mt-5">Loading...</div>;
//     }

//     const downloadPDF = () => {
//         const ticketElement = document.getElementById('ticket');

//         html2canvas(ticketElement).then(canvas => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF();
//             pdf.addImage(imgData, 'PNG', 0, 0);
//             pdf.save("ticket.pdf");
//         });
//     };

//     return (
//         <div>
//             <UserNavbar />
//             <div className="ticket-container">
//                 <div className="ticket" id="ticket">
//                     <div className="ticket-header">
//                         <h3>BUS TICKET</h3>
//                     </div>
//                     <div className="ticket-section-1">
//                         <div className="ticket-section">
//                             <div>
//                                 <p><strong>Ticket Id:</strong> {ticket.ticketId}</p>
//                                 <p><strong>Date:</strong> {ticket.date}</p>
//                                 <p><strong>Price:</strong> €{ticket.ticketPrice * (Array.isArray(ticket.seatNo) ? ticket.seatNo.length : 0)}</p>
//                             </div>
//                             <div className="text-end">
//                                 <img src={"https://cdn-icons-png.flaticon.com/512/1841/1841602.png"} alt="Bus" />
//                                 <p><strong>Bus No:</strong> {ticket.busNo}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="ticket-section-2">
//                         <div className="ticket-section">
//                             <div>
//                                 <p><strong>Name:</strong> {ticket.name}</p>
//                                 <p><strong>From:</strong> {ticket.fromStation}</p>
//                                 <p><strong>To:</strong> {ticket.toStation}</p>
//                                 <p><strong>Picking Point:</strong> {ticket.pickingPoint}</p>
//                                 <p><strong>Dropping Point:</strong> {ticket.droppingPoint}</p>
//                                 <p><strong>Seat No:</strong> {Array.isArray(ticket.seatNo) ? ticket.seatNo.join(', ') : ticket.seatNo}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="ticket-section-3">
//                         <div className="ticket-qr">
//                             <img src={"https://cdn-icons-png.flaticon.com/512/2649/2649272.png"} width={80} alt="QR Code" />
//                         </div>
//                     </div>
//                     <div className="ticket-footer">
//                         <p><small>Thank you for booking with us!</small></p>
//                     </div>
//                 </div>
//                 <div className="text-center mt-4">
//                     <button onClick={downloadPDF} className="btn btn-primary">Download PDF</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ticket;


import './Ticket.css';
import { useState, useEffect } from 'react';
import UserNavbar from './../UserNavbar/UserNavbar';
import UserLogIn from './../UserLogIn/UserLogIn';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import bus from  "../../images/1841602.png"
import qr from  "../../images/2649272.png"
const Ticket = () => {
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        const ticketData = JSON.parse(sessionStorage.getItem("result"));
        setTicket(ticketData);
    }, []);

    if (sessionStorage.getItem("id") === null) {
        return <UserLogIn />;
    }

    if (!ticket) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    const downloadPDF = () => {
        const ticketElement = document.getElementById('ticket');

        html2canvas(ticketElement).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("ticket.pdf");
        });
    };

    return (
        <div>
            <UserNavbar />
            <div className="ticket-container">
                <div className="ticket" id="ticket">
                    <div className="ticket-header">
                        <h3>BUS TICKET</h3>
                    </div>
                    <div className="ticket-section-1">
                        <div className="ticket-section">
                            <div>
                                <p><strong>Ticket Id: </strong> {ticket.ticketId}</p>
                                <p><strong>Date: </strong> {ticket.date}</p>
                                <p><strong>Price: </strong> {ticket.ticketPrice * (Array.isArray(ticket.seatNo) ? ticket.seatNo.length : 0)}</p>
                            </div>
                            <div className="text-end">
                                {/* <img src={"https://cdn-icons-png.flaticon.com/512/1841/1841602.png"} alt="Bus" /> */}
                                <img src={bus} alt="Bus" />
                                <p><strong>Bus No: </strong> {ticket.busNo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-section-2">
                        <div className="ticket-section">
                            <div>
                                <p><strong>Name:</strong> {ticket.name}</p>
                                <p><strong>From:</strong> {ticket.fromStation}</p>
                                <p><strong>To:</strong> {ticket.toStation}</p>
                                <p><strong>Picking Point:</strong> {ticket.pickingPoint}</p>
                                <p><strong>Dropping Point:</strong> {ticket.droppingPoint}</p>
                                <p><strong>Seat No:</strong> {Array.isArray(ticket.seatNo) ? ticket.seatNo.join(', ') : ticket.seatNo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-section-3">
                        <div className="ticket-qr">
                            {/* <img src={"https://cdn-icons-png.flaticon.com/512/2649/2649272.png"} width={80} alt="QR Code" /> */}
                            <img src={qr} width={60} alt="QR Code" />
                        </div>
                    </div>
                    <div className="ticket-footer">
                        <p><small>Thank you for booking with us!</small></p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button onClick={downloadPDF} className="btn btn-primary">Download PDF</button>
                </div>
            </div>
        </div>
    );
};

export default Ticket;

