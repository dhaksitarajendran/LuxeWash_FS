import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="auth-bg min-vh-100 d-flex justify-content-center align-items-center py-5 px-3" style={{ background: '#f7efdd' }}>
        <div className="card border-0 shadow-lg p-4 p-md-5 text-center" style={{ width: '100%', maxWidth: '500px', background: '#f5ecd3', borderRadius: '18px' }}>
          <h2 className="mb-2" style={{ color: '#6b0f14' }}>Sign Up</h2>
          <p className="mb-4" style={{ color: '#7b3a3a' }}>Join us for premium car care services</p>

          <div className="text-start mb-3">
            <label className="form-label small fw-bold" style={{ color: '#6b0f14' }}>Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" style={{ padding: '10px', borderRadius: '10px', border: '1px solid #e0d2b0', background: '#f7efdd' }} />
          </div>

          <div className="text-start mb-3">
            <label className="form-label small fw-bold" style={{ color: '#6b0f14' }}>Email Address</label>
            <input type="email" className="form-control" placeholder="Enter your email" style={{ padding: '10px', borderRadius: '10px', border: '1px solid #e0d2b0', background: '#f7efdd' }} />
          </div>

          <div className="text-start mb-3">
            <label className="form-label small fw-bold" style={{ color: '#6b0f14' }}>Phone Number</label>
            <input type="text" className="form-control" placeholder="91+ 123456" style={{ padding: '10px', borderRadius: '10px', border: '1px solid #e0d2b0', background: '#f7efdd' }} />
          </div>

          <div className="text-start mb-3">
            <label className="form-label small fw-bold" style={{ color: '#6b0f14' }}>Password</label>
            <input type="password" className="form-control" placeholder="••••••••" style={{ padding: '10px', borderRadius: '10px', border: '1px solid #e0d2b0', background: '#f7efdd' }} />
          </div>

          <div className="text-start mb-3">
            <label className="form-label small fw-bold" style={{ color: '#6b0f14' }}>Confirm Password</label>
            <input type="password" className="form-control" placeholder="••••••••" style={{ padding: '10px', borderRadius: '10px', border: '1px solid #e0d2b0', background: '#f7efdd' }} />
          </div>

          <div className="d-flex align-items-center gap-2 mb-3 mt-2" style={{ color: '#7b3a3a', fontSize: '14px', cursor: 'pointer' }}>
            <input type="checkbox" className="form-check-input mt-0" style={{ width: '18px', height: '18px', accentColor: '#7b1e2b', cursor: 'pointer', border: '1px solid #7b1e2b' }} />
            <span>I agree to the Terms & Privacy Policy</span>
          </div>


          <button className="btn w-100 py-3 rounded-3 fw-bold mt-2" style={{ background: '#7b1e2b', color: '#f3ead6', border: 'none' }}>Sign Up</button>

          <p className="small mt-4 mb-0 text-center">
            Already have an account? <Link to="/login" className="text-decoration-none fw-bold" style={{ color: '#7b1e2b' }}>Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}

