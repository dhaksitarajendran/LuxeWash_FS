import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BookNow3 = () => {
  const navigate = useNavigate();
  return (
    <div className="page min-vh-100 p-4 d-flex flex-column" style={{ backgroundColor: "#f6f0e1", fontFamily: "Georgia, serif" }}>
      <h1 className="text-center mb-4" style={{ color: "#7b4a3f" }}>Book Your Appointment</h1>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "32px", height: "32px", backgroundColor: "#7a142c" }}>1</div>
        <div style={{ width: "40px", height: "3px", backgroundColor: "#7a142c" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "32px", height: "32px", backgroundColor: "#7a142c" }}>2</div>
        <div style={{ width: "40px", height: "3px", backgroundColor: "#7a142c" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "32px", height: "32px", backgroundColor: "#7a142c", boxShadow: "0 0 0 4px rgba(122,20,44,.2)" }}>3</div>
        <div style={{ width: "40px", height: "3px", backgroundColor: "#f0e2c4" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle" style={{ width: "32px", height: "32px", backgroundColor: "#f0e2c4", color: "#7b4a3f" }}>4</div>
      </div>

      <div className="card mx-auto p-4 p-md-5 border-0 shadow w-100" style={{ maxWidth: "1000px", backgroundColor: "#f7edd2", borderRadius: "16px" }}>
        <h2 className="h4 mb-2" style={{ color: "#7b4a3f" }}>Contact Details</h2>
        <p className="mb-4" style={{ color: "#7a142c", fontSize: "14px" }}>Enter your contact information</p>

        <div className="row g-4 mb-3">
          <div className="col-md-6">
            <label className="form-label fw-bold" style={{ color: "#5a3b32" }}>Full Name *</label>
            <input className="form-control" style={{ padding: "14px", borderRadius: "10px", border: "1px solid #e4d7b6", backgroundColor: "#fbf6e8" }} placeholder="John Doe" />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold" style={{ color: "#5a3b32" }}>Phone Number *</label>
            <input className="form-control" style={{ padding: "14px", borderRadius: "10px", border: "1px solid #e4d7b6", backgroundColor: "#fbf6e8" }} placeholder="(555) 123-4567" />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold" style={{ color: "#5a3b32" }}>Email (Optional)</label>
          <input className="form-control" style={{ padding: "14px", borderRadius: "10px", border: "1px solid #e4d7b6", backgroundColor: "#fbf6e8" }} placeholder="john@example.com" />
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn px-4 py-3 rounded-pill fw-bold"
            style={{ backgroundColor: "#f0e2c4", color: "#7a142c" }}
            onClick={() => navigate("/booknow")}
          >Back</button>

          <Link to="/booknow4" className="text-decoration-none">
            <button className="btn px-5 py-3 rounded-pill fw-bold text-white" style={{ backgroundColor: "#7a142c" }}>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookNow3;
