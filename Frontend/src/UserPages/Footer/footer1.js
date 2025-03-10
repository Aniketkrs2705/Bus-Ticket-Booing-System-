// import './Footer.css'
// import { Link} from "react-router-dom";

// const Footer = () => {
//    return(
//     <div  className="footer1 container-fluid responsive">
//       <div>
//         <footer>
//           <div>
//             <h3 class="text-muted mb-md-0">ProBus e-Ticket</h3>
//           </div>
//           <div >
//               <Link to="/">FAQ</Link>  | &nbsp;
//               <Link to="/">Blog</Link>  | &nbsp;
//               <Link to="/">Offers</Link>  | &nbsp;
//               <Link to="/">Privacy Policy</Link>  | &nbsp;
//               <Link to="/">Terms And Conditions</Link>
//           </div>
//           <div>
//             <small>
//               <span>&#174;</span> ProBus All Rights Reserved.
//             </small>
//           </div>
//         </footer>
//       </div>
//     </div>
//    )
// }
// export default Footer
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container-fluid my-5">
        <footer class="text-center bg-light text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">
                    Online Bus Ticket Booking System.
                  </h5>

                  <p className="d-flex justify-content-center align-items-center text-justify">
                    The Bus Ticket Booking System is a user-friendly web
                    application that allows users to search for available bus
                    routes, view schedules, and book tickets online. It includes
                    functionalities for user registration, secure payment
                    processing, and ticket management, providing a seamless and
                    efficient booking experience. The system also features an
                    admin module for managing routes, schedules, and bookings,
                    ensuring operational efficiency and customer satisfaction.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Who We Are
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Why Choose Us?
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Customer Reviews
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Help & Support
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Email Support
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Careers</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Join Our Team
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Internship Opportunities
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Partner With Us
                      </a>
                    </li>
                    {/* <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Links</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Bus Routes & Schedules
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Pricing & Discounts
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Refund & Cancellation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Copyright 2025</span>
                <button
                  type="button"
                  class="btn btn-rounded  text-white"
                  style={{ backgroundColor: "#AA336A" }}
                >
                  Acts
                </button>
              </p>
            </section>

            <hr class="mb-4" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;


<div className="container-fluid bg-light text-dark py-4 shadow-sm">
        <div className="container text-center">
          <h5
            className="text-uppercase fw-bold"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#2c3e50",
              letterSpacing: "1px",
            }}
          >
            Online Bus Ticket Booking System
          </h5>
          <p
            className="mt-2"
            style={{
              fontSize: "1.1rem",
              fontFamily: "Lora, serif",
              lineHeight: "1.6",
            }}
          >
            The Bus Ticket Booking System is a user-friendly web application
            that allows users to search for available bus routes, view
            schedules, and book tickets online. It includes functionalities for
            user registration, secure payment processing, and ticket management.
          </p>
        </div>
      </div>