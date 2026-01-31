import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper min-vh-100 d-flex align-items-center justify-content-center p-4" style={{ background: '#f6efdf' }}>
        <div className="box card border-0 shadow-lg p-5 rounded-4 text-center" style={{ background: '#ffffff', maxWidth: '400px', width: '100%' }}>
          <div className="mb-4">
            <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto text-white fs-1" style={{ width: '80px', height: '80px', background: '#28a745' }}>
              ✓
            </div>
          </div>
          <h2 className="h4 fw-bold mb-3" style={{ color: '#7b1e2b' }}>Card Added Successfully</h2>
          <p className="text-muted mb-4">Your payment method has been saved.</p>
          <button
            className="btn w-100 py-3 fw-bold rounded-3 text-white border-0"
            style={{ background: '#7b1e2b' }}
            onClick={() => navigate("/payment-methods")}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
