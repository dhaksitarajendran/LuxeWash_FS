import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" });

  return (
    <>
      <div className="add-wrapper min-vh-100 p-4" style={{ background: '#f6efdf' }}>
        <div className="card shadow-sm border-0 p-4 mx-auto rounded-4" style={{ maxWidth: '600px', background: '#fff' }}>
          <h2 className="mb-4 fw-bold" style={{ color: '#7b1e2b' }}>Add New Card</h2>

          <div className="mb-3">
            <input
              className="form-control p-3 border rounded-3"
              placeholder="Card Number"
              value={card.number}
              onChange={(e) => setCard({ ...card, number: e.target.value })}
              style={{ background: '#f8f9fa' }}
            />
          </div>

          <div className="row g-3 mb-4">
            <div className="col-6">
              <input
                className="form-control p-3 border rounded-3"
                placeholder="MM/YY"
                value={card.expiry}
                onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                style={{ background: '#f8f9fa' }}
              />
            </div>
            <div className="col-6">
              <input
                className="form-control p-3 border rounded-3"
                placeholder="CVC"
                value={card.cvc}
                onChange={(e) => setCard({ ...card, cvc: e.target.value })}
                style={{ background: '#f8f9fa' }}
              />
            </div>
          </div>

          <button
            className="btn w-100 py-3 fw-bold rounded-3 text-white border-0"
            style={{ background: '#7b1e2b' }}
            onClick={() => navigate('/payment-methods')}
          >
            Save Card
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCard;
