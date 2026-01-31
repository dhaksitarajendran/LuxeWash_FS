import { Link } from "react-router-dom";

const ResetLinkSent = () => {
  return (
    <>
      <div className="success-wrapper min-vh-100 d-flex justify-content-center align-items-start py-5 px-3" style={{ background: '#f6efdf' }}>
        <div className="success-card card border-0 shadow text-center p-4 p-md-5 w-100" style={{ maxWidth: '520px', borderRadius: '18px' }}>
          <div className="icon-box d-flex align-items-center justify-content-center mx-auto mb-4 fs-1 rounded-3" style={{ width: '70px', height: '70px', background: '#7b1e2b', color: '#f6efdf' }}>
            ✉
          </div>

          <h1 className="success-title mb-3" style={{ color: '#7b1e2b', fontSize: '32px' }}>Reset Link Sent</h1>

          <p className="success-text mb-4" style={{ color: '#9b6b6b', fontSize: '15px', lineHeight: '1.6' }}>
            We have sent a password reset link to your registered email address.
            Please check your inbox and follow the instructions to reset your
            password.
          </p>

          <Link to="/login" className="back-login btn d-inline-block fw-bold px-4 py-2 rounded-3 text-decoration-none" style={{ background: '#7b1e2b', color: '#f6efdf', fontSize: '16px' }}>
            Back to Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResetLinkSent;
