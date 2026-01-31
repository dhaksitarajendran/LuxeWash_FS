import React from "react";
import { Link } from "react-router-dom";

const BookNow1 = () => {
  return (
    <div className="page min-vh-100 p-4" style={{ backgroundColor: "#f6f0e1", fontFamily: "Georgia, serif" }}>
      <h1 className="text-center mb-2" style={{ color: "#7b4a3f" }}>Book Your Appointment</h1>
      <p className="text-center mb-5" style={{ color: "#7a142c", fontSize: "14px" }}>
        Select your service, choose a time, and we'll take care of the rest.
      </p>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "32px", height: "32px", backgroundColor: "#7a142c" }}>1</div>
        <div style={{ width: "45px", height: "3px", backgroundColor: "#f0e2c4" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle" style={{ width: "32px", height: "32px", backgroundColor: "#f0e2c4", color: "#7b4a3f" }}>2</div>
        <div style={{ width: "45px", height: "3px", backgroundColor: "#f0e2c4" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle" style={{ width: "32px", height: "32px", backgroundColor: "#f0e2c4", color: "#7b4a3f" }}>3</div>
        <div style={{ width: "45px", height: "3px", backgroundColor: "#f0e2c4" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle" style={{ width: "32px", height: "32px", backgroundColor: "#f0e2c4", color: "#7b4a3f" }}>4</div>
      </div>

      <div className="card mx-auto p-4 p-md-5 border-0 shadow" style={{ maxWidth: "900px", backgroundColor: "#f7edd2", borderRadius: "16px" }}>
        <p className="mb-4" style={{ color: "#7a142c", fontSize: "14px" }}>
          Choose your wash package and vehicle type
        </p>

        <h3 className="h5 mb-3" style={{ color: "#7b4a3f" }}>Select Services</h3>

        <div className="row g-3 mb-4">
          <div className="col-12 col-md-6">
            <div className="border rounded-3 p-3 d-flex flex-column gap-1" style={{ borderColor: "#7a142c", color: "#7a142c" }}>
              <strong>Basic Wash</strong>
              <span>30 min</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border rounded-3 p-3 d-flex flex-column gap-1" style={{ borderColor: "#7a142c", color: "#7a142c" }}>
              <strong>Premium Wash</strong>
              <span>1.5+ hours</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border rounded-3 p-3 d-flex flex-column gap-1" style={{ borderColor: "#7a142c", color: "#7a142c" }}>
              <strong>Ultimate Detail</strong>
              <span>3+ hours</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border rounded-3 p-3 d-flex flex-column gap-1" style={{ borderColor: "#7a142c", color: "#7a142c" }}>
              <strong>Interior Cleaning</strong>
              <span>45 min</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border rounded-3 p-3 d-flex flex-column gap-1" style={{ borderColor: "#7a142c", color: "#7a142c" }}>
              <strong>Ceramic Coating</strong>
              <span>4+ hours</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border rounded-3 p-3 d-flex flex-column gap-1" style={{ borderColor: "#7a142c", color: "#7a142c" }}>
              <strong>Engine Wash</strong>
              <span>30 min</span>
            </div>
          </div>
        </div>

        <h3 className="h5 mb-3" style={{ color: "#7b4a3f" }}>Vehicle Type</h3>

        <div className="row g-3 mb-5">
          {[
            "Sedan",
            "SUV / Crossover",
            "Truck / Pickup",
            "Van / Minivan",
            "Sports Car",
            "Luxury Vehicle",
          ].map((v) => (
            <div key={v} className="col-6 col-md-4">
              <div className="border rounded-3 p-3 text-center d-flex flex-column gap-2" style={{ borderColor: "#7a142c", color: "#7a142c", fontSize: "14px" }}>
                <span style={{ fontSize: "22px" }}>🚗</span>
                <span>{v}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none">
            <button className="btn fw-bold px-5 py-2 rounded-pill" style={{ backgroundColor: "#7a142c", color: "#fff" }}>Cancel</button>
          </Link>

          <Link to="/booknow2" className="text-decoration-none">
            <button className="btn fw-bold px-5 py-2 rounded-pill" style={{ backgroundColor: "#7a142c", color: "#fff" }}>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookNow1;
