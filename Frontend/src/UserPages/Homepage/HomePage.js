// import '../Homepage/HomePage.css'
// import Navbar from './../Navbar/Navbar';

// function HomePage({ history }) {
//     const enterSite = e => {
//         e.preventDefault()
//         history.push('/userlogin')
//     }

//     return (
//         <div>
//            <Navbar/>
//             <div className="header-nav">
//                 <span className="mytext1"> Welcome To Pro Bus </span>
//             </div>
//             <div className="homepage">
                
//                 <a href="/#" onClick={e => enterSite(e)} className="mainBtn">
//                     <svg width="277" height="62">
//                         <defs>
//                             <linearGradient id="grad1">
//                                 <stop offset="0%" stopColor="#FF8282" />
//                                 <stop offset="100%" stopColor="#E178ED" />
//                             </linearGradient>
//                         </defs>
//                         <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
//                     </svg>
//                     <span >Book Now!</span>
//                 </a>
//                 <figure>
//                 <img src="../../../images/bus1.jpg" alt="Bus" className="image1"></img>
//                 </figure>
//             </div>
//         </div>
//     )
// }
// export default HomePage


import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
// import '../Homepage/HomePage.css';

function HomePage() {
    const history = useHistory();

    const enterSite = (e) => {
        e.preventDefault();
        history.push('/userlogin');
    };

    return (
        <div>
            <Navbar />
            {/* <div className="header-nav text-center py-3 bg-light">
                <span className="mytext1 display-4">Welcome To Pro Bus</span>
            </div> */}
            
                <Slider/>
        </div>
    );
}

export default HomePage;
