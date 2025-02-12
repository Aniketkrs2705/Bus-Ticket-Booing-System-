import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white " style={{ marginTop: "-10px" }}>
      {/* Full-Width Info Section */}
      <div
        className="container-fluid text-dark py-4 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #f8f9fa, #e3e6e8)", // Soft gradient background
          borderBottom: "3px solid #2c3e50", // Stylish bottom border
        }}
      >
        <div className="container text-center">
          <h5
            className="text-uppercase fw-bold"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#2c3e50",
              letterSpacing: "1.2px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            }}
          >
            Online Bus Ticket Booking System
          </h5>
          <p
            className="mt-2 px-3"
            style={{
              fontSize: "1.1rem",
              fontFamily: "Lora, serif",
              lineHeight: "1.7",
              color: "#555",
              maxWidth: "800px",
              margin: "0 auto", // Centers content for better layout
            }}
          >
            The Bus Ticket Booking System is a user-friendly web application
            that allows users to search for available bus routes, view
            schedules, and book tickets online. It includes functionalities for
            user registration, secure payment processing, and ticket management.
          </p>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="container py-4">
        <div className="row">
          {/* About Us */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase" style={{ color: "#f39c12" }}>
              About Us
            </h5>
            <ul className="list-unstyled">
              {[
                "Who We Are",
                "Our Story",
                "Why Choose Us?",
                "Customer Reviews",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="text-white text-decoration-none"
                    style={{ transition: "0.3s ease-in-out" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase" style={{ color: "#3498db" }}>
              Contact Us
            </h5>
            <ul className="list-unstyled">
              {["Help & Support", "FAQs", "Email Support", "Live Chat"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to="/"
                      className="text-white text-decoration-none"
                      style={{ transition: "0.3s ease-in-out" }}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Careers */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase" style={{ color: "#27ae60" }}>
              Careers
            </h5>
            <ul className="list-unstyled">
              {[
                "Join Our Team",
                "Internship Opportunities",
                "Partner With Us",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="text-white text-decoration-none"
                    style={{ transition: "0.3s ease-in-out" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase" style={{ color: "#e74c3c" }}>
              Links
            </h5>
            <ul className="list-unstyled">
              {[
                "Bus Routes & Schedules",
                "Pricing & Discounts",
                "Terms & Conditions",
                "Refund & Cancellation",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="text-white text-decoration-none"
                    style={{ transition: "0.3s ease-in-out" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="text-center py-3 border-top"
        style={{
          background: "linear-gradient(135deg, #2c3e50, #34495e)",
          color: "#ecf0f1",
        }}
      >
        <small>&copy; 2025 ProBus. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
