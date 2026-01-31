import { Link } from "react-router-dom";

const BookNow4 = () => {
  return (
    <div className="page min-vh-100 p-4" style={{ backgroundColor: "#f6f0e1", fontFamily: "Georgia, serif" }}>
      <h1 className="text-center mb-2" style={{ color: "#7b4a3f" }}>Book Your Appointment</h1>
      <p className="text-center mb-5" style={{ color: "#7a142c", fontSize: "14px" }}>
        Select your service, choose a time, and we'll take care of the rest.
      </p>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "32px", height: "32px", backgroundColor: "#7a142c" }}>1</div>
        <div style={{ width: "45px", height: "3px", backgroundColor: "#7a142c" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "32px", height: "32px", backgroundColor: "#7a142c" }}>2</div>
        <div style={{ width: "45px", height: "3px", backgroundColor: "#7a142c" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "32px", height: "32px", backgroundColor: "#7a142c" }}>3</div>
        <div style={{ width: "45px", height: "3px", backgroundColor: "#7a142c" }}></div>
        <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "32px", height: "32px", backgroundColor: "#7a142c", boxShadow: "0 0 0 4px rgba(122,20,44,.2)" }}>4</div>
      </div>

      <div className="card mx-auto p-4 p-md-5 border-0 shadow" style={{ maxWidth: "1000px", backgroundColor: "#f7edd2", borderRadius: "16px" }}>
        <h2 className="h4 mb-1" style={{ color: "#7b4a3f" }}>Review & Confirm</h2>
        <p className="mb-4" style={{ color: "#7a142c", fontSize: "14px" }}>Review your booking details</p>

        <h3 className="h5 mb-3" style={{ color: "#7b4a3f" }}>Booking Summary</h3>

        <div className="row mb-3">
          <div className="col-md-6">
            <p className="mb-1" style={{ fontSize: "14px", color: "#7a142c" }}>Service</p>
            <p className="fw-bold mb-3" style={{ fontSize: "15px", color: "#3f2a24" }}>Engine Wash</p>

            <p className="mb-1" style={{ fontSize: "14px", color: "#7a142c" }}>Date</p>
            <p className="fw-bold mb-3" style={{ fontSize: "15px", color: "#3f2a24" }}>January 16th, 2026</p>

            <p className="mb-1" style={{ fontSize: "14px", color: "#7a142c" }}>Contact</p>
            <p className="fw-bold m-0" style={{ fontSize: "15px", color: "#3f2a24" }}>ede</p>
            <p className="fw-bold mb-3" style={{ fontSize: "15px", color: "#3f2a24" }}>frf</p>
          </div>

          <div className="col-md-6">
            <p className="mb-1" style={{ fontSize: "14px", color: "#7a142c" }}>Vehicle</p>
            <p className="fw-bold mb-3" style={{ fontSize: "15px", color: "#3f2a24" }}>Truck / Pickup</p>

            <p className="mb-1" style={{ fontSize: "14px", color: "#7a142c" }}>Time</p>
            <p className="fw-bold mb-3" style={{ fontSize: "15px", color: "#3f2a24" }}>08:00 AM</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 mt-4 mb-3">
          <span className="fw-bold" style={{ fontSize: "18px", color: "#7a142c" }}>Total</span>
          <span className="fw-bold" style={{ fontSize: "20px", color: "#7a142c" }}>₹999</span>
        </div>

        <p className="mb-4" style={{ fontSize: "13px", color: "#7a142c" }}>
          Payment will be collected at the location after service completion.
        </p>

        <div className="d-flex justify-content-between">
          <Link to="/booknow3" className="text-decoration-none">
            <button className="btn px-4 py-3 rounded-pill fw-bold" style={{ backgroundColor: "#f0e2c4", color: "#7a142c" }}>Back</button>
          </Link>

          <Link to="/confirmation" className="text-decoration-none">
            <button className="btn px-5 py-3 rounded-pill fw-bold text-white" style={{ backgroundColor: "#7a142c" }}>
              Confirm Booking
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BookNow4;
