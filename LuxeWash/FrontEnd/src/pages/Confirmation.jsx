import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="page min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#fbf3df", fontFamily: "Georgia, serif" }}>
      <div className="card border-0 shadow-lg text-center" style={{ backgroundColor: "#f6e9c9", padding: "60px 40px", borderRadius: "18px", width: "700px" }}>

        <div className="d-flex justify-content-center mb-4">
          <div className="rounded-circle d-flex align-items-center justify-content-center fs-3 fw-bold" style={{ width: "60px", height: "60px", backgroundColor: "#e6cfc5", color: "#7a142c", border: "2px solid #7a142c" }}>✓</div>
        </div>

        <h1 className="h3 mb-2" style={{ color: "#7b4a3f" }}>Booking Confirmed!</h1>
        <p className="mb-4" style={{ color: "#7b4a3f", fontSize: "16px" }}>
          Thank you for choosing LuxeWash, ede!
        </p>

        <p className="mb-5 small" style={{ color: "#7a142c" }}>
          A confirmation has been sent to Message.
        </p>

        <div className="d-flex justify-content-between px-md-4">
          <Link to="/" className="btn fw-bold px-4 py-3 rounded-pill" style={{ backgroundColor: "transparent", border: "2px solid #7a142c", color: "#7a142c" }}>
            Back to Home
          </Link>
          <Link to="/booknow" className="btn fw-bold px-4 py-3 rounded-pill text-white" style={{ backgroundColor: "#7a142c", border: "none" }}>
            Book Another
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
