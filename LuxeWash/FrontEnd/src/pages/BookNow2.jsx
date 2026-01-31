import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookNow2() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [time, setTime] = useState("");

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const handleContinue = () => {
    localStorage.setItem("selectedDate", date);
    localStorage.setItem("pickup", pickup);
    localStorage.setItem("selectedTime", time);

    navigate("/booknow3");
  };

  return (
    <div className="booknow2-container min-vh-100 d-flex justify-content-center align-items-center py-5 px-3" style={{ backgroundColor: '#f6f0e1', fontFamily: 'Georgia, serif' }}>
      <div className="card w-100 border-0 shadow-lg p-4 p-md-5" style={{ maxWidth: '980px', backgroundColor: '#f7edd2', borderRadius: '28px' }}>
        <h2 className="text-center mb-4" style={{ color: '#7b4a3f', fontSize: '32px' }}>Select Date & Time</h2>

        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "34px", height: "34px", backgroundColor: "#6b0f14" }}>1</div>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#6b0f14" }}></div>
          <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle text-white" style={{ width: "34px", height: "34px", backgroundColor: "#7a142c", boxShadow: "0 0 4px 4px rgba(122,20,44,.2)" }}>2</div>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#e6d8b3" }}></div>
          <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle" style={{ width: "34px", height: "34px", backgroundColor: "#e6d8b3", color: "#6b0f14" }}>3</div>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#e6d8b3" }}></div>
          <div className="d-flex align-items-center justify-content-center fw-bold rounded-circle" style={{ width: "34px", height: "34px", backgroundColor: "#e6d8b3", color: "#6b0f14" }}>4</div>
        </div>

        <div className="mb-4">
          <label className="fw-bold mb-2" style={{ color: '#6b0f14' }}>Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
            style={{ borderRadius: '14px', padding: '14px 16px', border: '1px solid #6b0f14' }}
          />
        </div>

        <div className="mb-4">
          <p className="fw-bold mb-2" style={{ color: '#6b0f14' }}>Do you want pickup service?</p>
          <div className="d-flex gap-4 mb-3">
            <label className="d-flex align-items-center gap-2" style={{ color: '#6b0f14', fontWeight: '600' }}>
              <input
                type="radio"
                name="pickup"
                className="form-check-input"
                style={{ borderColor: '#6b0f14', backgroundColor: pickup === 'Yes' ? '#6b0f14' : '' }}
                onChange={() => setPickup("Yes")}
                checked={pickup === "Yes"}
              />
              Yes
            </label>

            <label className="d-flex align-items-center gap-2" style={{ color: '#6b0f14', fontWeight: '600' }}>
              <input
                type="radio"
                name="pickup"
                className="form-check-input"
                style={{ borderColor: '#6b0f14', backgroundColor: pickup === 'No' ? '#6b0f14' : '' }}
                onChange={() => setPickup("No")}
                checked={pickup === "No"}
              />
              No
            </label>
          </div>
          <div className="p-3 rounded-3 mb-2" style={{ backgroundColor: '#f6e8c8', borderLeft: '4px solid #6b0f14', color: '#6b0f14', fontSize: '14px' }}>
            If yes, we’ll pick up your vehicle 30 minutes before <br className="d-none d-md-block" />
            the selected time and drop it off after the service.
          </div>
        </div>

        <div className="mb-5">
          <p className="fw-bold mb-2" style={{ color: '#6b0f14' }}>Select Time</p>
          <div className="p-3 rounded-4" style={{ border: '1px solid #6b0f14' }}>
            <div className="row g-3">
              {timeSlots.map((slot) => (
                <div className="col-6 col-md-4" key={slot}>
                  <button
                    className="btn w-100 py-3 fw-bold rounded-4"
                    style={{
                      backgroundColor: time === slot ? '#6b0f14' : '#7a142c',
                      color: time === slot ? '#f0e2c4' : '#fff',
                      border: '1px solid #6b0f14'
                    }}
                    onClick={() => setTime(slot)}
                    onMouseEnter={(e) => { if (time !== slot) { e.target.style.backgroundColor = '#f0e2c4'; e.target.style.color = '#6b0f14'; } }}
                    onMouseLeave={(e) => { if (time !== slot) { e.target.style.backgroundColor = '#7a142c'; e.target.style.color = '#fff'; } }}
                  >
                    {slot}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="btn px-4 py-3 rounded-pill fw-bold"
            style={{ backgroundColor: '#6b0f14', color: '#fff' }}
            onClick={() => navigate("/booknow")}
          >Back</button>
          <button
            className="btn px-4 py-3 rounded-pill fw-bold"
            style={{ backgroundColor: '#6b0f14', color: '#fff' }}
            onClick={handleContinue}
          >Continue</button>
        </div>
      </div>
    </div>
  );
}
