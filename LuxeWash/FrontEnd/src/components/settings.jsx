import { Link } from "react-router-dom";
import { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <>
      <div className="settings-wrapper vh-100 p-2 d-flex flex-column" style={{ background: '#f6efdf', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>
          {`
            .settings-wrapper::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <div className="container h-100 d-flex flex-column" style={{ maxWidth: '900px' }}>
          <div className="mb-2">
            <Link to="/dashboard" className="text-decoration-none fw-bold fs-6" style={{ color: '#7b1e2b' }}>
              ← Back to Dashboard
            </Link>
          </div>

          <h2 className="fw-bold mb-3" style={{ color: '#7b1e2b' }}>Settings</h2>

          <div className="settings-card flex-grow-1 p-3 p-md-4 rounded-4 text-white shadow-sm d-flex flex-column justify-content-center" style={{ background: 'linear-gradient(180deg, #7b0015, #5a000f)' }}>

            <div className="section mb-3">
              <h3 className="h5 fw-bold d-flex align-items-center gap-2 mb-1">
                <span>🔔</span> Notifications
              </h3>
              <p className="small opacity-75 mb-3">Choose how you want to be notified</p>

              <div className="row g-2">
                {[
                  ["Email Notifications", "Receive booking confirmations via email", email, setEmail],
                  ["SMS Notifications", "Get text messages for reminders", sms, setSms],
                  ["Push Notifications", "Receive push notifications", push, setPush],
                  ["Marketing Emails", "Receive promotions", marketing, setMarketing],
                ].map(([title, desc, state, setter], i) => (
                  <div className="col-md-6" key={i}>
                    <div className="d-flex justify-content-between align-items-center bg-black bg-opacity-10 p-2 rounded">
                      <div className="me-2">
                        <h4 className="fw-bold m-0" style={{ fontSize: '0.9rem' }}>{title}</h4>
                        <span className="small opacity-75" style={{ fontSize: '0.75rem' }}>{desc}</span>
                      </div>
                      <div className="form-check form-switch m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          checked={state}
                          onChange={() => setter(!state)}
                          style={{ width: '40px', height: '20px', cursor: 'pointer', backgroundColor: state ? '#f3d9a4' : '#4a0c0c', borderColor: 'transparent', backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${state ? '%237b1e2b' : '%23f6efdf'}'/%3e%3c/svg%3e")` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="section mb-3">
                  <h3 className="h5 fw-bold mb-1">🌙 Appearance</h3>
                  <p className="small opacity-75 mb-2">Customize app look</p>

                  <div className="d-flex justify-content-between align-items-center bg-black bg-opacity-10 p-2 rounded">
                    <div>
                      <h4 className="fw-bold m-0" style={{ fontSize: '0.9rem' }}>Dark Mode</h4>
                    </div>
                    <div className="form-check form-switch m-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        style={{ width: '40px', height: '20px', cursor: 'pointer', backgroundColor: darkMode ? '#f3d9a4' : '#4a0c0c', borderColor: 'transparent', backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${darkMode ? '%237b1e2b' : '%23f6efdf'}'/%3e%3c/svg%3e")` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="section">
                  <h3 className="h5 fw-bold mb-1">🌐 Language</h3>
                  <p className="small opacity-75 mb-2">Set language</p>

                  <select
                    className="form-select border-0 text-white p-2"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid #f3d9a4', color: '#f6efdf' }}
                  >
                    <option className="text-dark">English</option>
                    <option className="text-dark">Tamil</option>
                    <option className="text-dark">Hindi</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
