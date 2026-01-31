import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    navigate("/reset-link-sent");
  };

  return (
    <>
      <div className="forgot-wrapper min-vh-100 d-flex justify-content-center pt-5 px-3" style={{ background: '#f6efdf' }}>
        <div className="forgot-container w-100" style={{ maxWidth: '520px' }}>
          <Link to="/login" className="back-link d-inline-block text-decoration-none fw-bold mb-3" style={{ color: '#7b1e2b' }}>
            ← Back
          </Link>

          <h1 className="forgot-title mb-4" style={{ color: '#7b1e2b', fontSize: '36px' }}>Forgot Password</h1>

          <div className="forgot-card card border-0 shadow-sm p-4 p-md-5" style={{ background: '#f3e9cf', borderRadius: '18px' }}>
            <label className="fw-bold mb-2 d-block" style={{ color: '#7b1e2b' }}>Email Address</label>

            <div className="input-box d-flex align-items-center gap-2 mb-4 p-3 rounded-3" style={{ background: '#f6efdf' }}>
              <span className="fs-5">✉</span>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                className="w-100 border-0 bg-transparent"
                style={{ outline: 'none', fontSize: '15px' }}
              />
            </div>

            <button
              className="reset-btn btn w-100 py-3 fs-5 fw-bold rounded-3"
              style={{ background: '#7b1e2b', color: '#f6efdf', border: 'none' }}
              onClick={handleSend}
            >
              Send Reset Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
