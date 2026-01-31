import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import editIcon from "../assets/Edits.png";

const EditProfile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "Dhaksita",
    email: "dhaksita38@gmail.com",
    phone: "",
  });

  return (
    <>
      <div className="edit-wrapper min-vh-100 p-4" style={{ background: '#f7efdd' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="mb-4">
            <Link to="/dashboard" className="text-decoration-none fw-bold fs-5" style={{ color: '#7b1e2b' }}>
              ← Back to Dashboard
            </Link>
          </div>

          <div className="card border-0 shadow-sm p-4 rounded-4" style={{ background: '#fefceb' }}>
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="d-flex align-items-center justify-content-center rounded-3 p-2" style={{ width: '48px', height: '48px', background: '#7b1e2b' }}>
                <img src={editIcon} alt="Edit Profile" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
              </div>
              <div>
                <h2 className="h3 fw-bold m-0" style={{ color: '#5b1b1b' }}>Edit Profile</h2>
                <div className="small mt-1" style={{ color: '#8b4b4b' }}>
                  Update your personal information
                </div>
              </div>
            </div>

            <div className="form-content mt-4">
              <label className="form-label fw-bold" style={{ color: '#6b3b2a' }}>Full Name</label>
              <div className="p-3 rounded-3 mb-3" style={{ background: '#fbf6ee' }}>
                <input
                  className="form-control border-0 bg-transparent p-0 shadow-none"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ fontSize: '15px' }}
                />
              </div>

              <label className="form-label fw-bold" style={{ color: '#6b3b2a' }}>Email Address</label>
              <div className="p-3 rounded-3 mb-1" style={{ background: '#fbf6ee' }}>
                <input
                  className="form-control border-0 bg-transparent p-0 shadow-none text-muted"
                  value={form.email}
                  disabled
                  style={{ fontSize: '15px' }}
                />
              </div>
              <div className="small mb-3" style={{ color: '#b24a4a', fontSize: '13px' }}>Email cannot be changed</div>

              <label className="form-label fw-bold" style={{ color: '#6b3b2a' }}>Phone Number</label>
              <div className="p-3 rounded-3 mb-4" style={{ background: '#fbf6ee' }}>
                <input
                  className="form-control border-0 bg-transparent p-0 shadow-none"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{ fontSize: '15px' }}
                />
              </div>

              <div className="d-flex gap-3 mt-4">
                <button
                  className="btn fw-bold px-4 py-3 rounded-3"
                  style={{ background: 'transparent', border: '2px solid #e9d9d6', color: '#7b1e2b' }}
                  onClick={() => navigate("/profile")}
                >
                  Cancel
                </button>
                <button
                  className="btn fw-bold px-4 py-3 rounded-3 text-white border-0 shadow-sm"
                  style={{ background: '#7b1e2b' }}
                  onClick={() => navigate("/profile")}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
