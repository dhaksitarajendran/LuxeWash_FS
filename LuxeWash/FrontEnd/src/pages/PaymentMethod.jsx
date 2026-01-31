import { Link, useNavigate } from "react-router-dom";

const PaymentMethods = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper min-vh-100 p-4" style={{ background: '#f6efdf' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="mb-4">
            <Link to="/dashboard" className="text-decoration-none fw-bold fs-5" style={{ color: '#7b1e2b' }}>
              ← Back
            </Link>
          </div>

          <h1 className="fw-bold mb-4" style={{ color: '#7b1e2b', fontSize: '42px' }}>Payment Methods</h1>

          <div className="card-box d-flex justify-content-between align-items-center p-4 rounded-4 shadow-sm" style={{ background: '#ffffff', marginTop: '24px' }}>
            <div className="card-info">
              <h3 className="h5 fw-bold m-0" style={{ color: '#7b1e2b' }}>Visa •••• 4242</h3>
              <small className="text-muted">Expires 08/27</small>
            </div>
            <div>
              <button
                className="btn fw-bold px-3 py-2 rounded-3 text-white border-0"
                style={{ background: '#7b1e2b' }}
                onClick={() => navigate("/edit-card")}
              >
                Edit
              </button>
            </div>
          </div>

          <div className="mt-4">
            <button
              className="btn fw-bold px-4 py-2 rounded-3 text-white border-0"
              style={{ background: '#7b1e2b' }}
              onClick={() => navigate("/add-card")}
            >
              + Add New Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
