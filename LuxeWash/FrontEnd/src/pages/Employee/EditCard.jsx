import { useNavigate } from "react-router-dom";

const EditCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper min-vh-100 p-4" style={{ background: '#f6efdf' }}>
        <div className="box card border-0 shadow-sm mx-auto p-4 rounded-4" style={{ maxWidth: '500px', background: '#fff' }}>
          <h2 className="mb-4 fw-bold" style={{ color: '#7b1e2b' }}>Edit Card</h2>

          <div className="mb-3">
            <input
              className="form-control p-3 border rounded-3"
              value="•••• 4242"
              disabled
              style={{ background: '#f8f9fa' }}
            />
          </div>

          <div className="mb-4">
            <input
              className="form-control p-3 border rounded-3"
              placeholder="Expiry Date"
              style={{ background: '#fff' }}
            />
          </div>

          <button
            className="btn w-100 py-3 fw-bold rounded-3 text-white border-0 mb-3"
            style={{ background: '#7b1e2b' }}
            onClick={() => navigate("/payment-methods")}
          >
            Update Card
          </button>

          <button
            className="btn w-100 py-3 fw-bold rounded-3 text-white border-0"
            style={{ background: '#b30000' }}
            onClick={() => navigate("/delete-card")}
          >
            Delete Card
          </button>
        </div>
      </div>
    </>
  );
};

export default EditCard;
