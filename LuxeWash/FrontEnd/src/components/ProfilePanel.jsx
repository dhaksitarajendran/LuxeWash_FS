import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

import avatar from "../assets/avathar.png";
import settingsIcon from "../assets/settings.png";
import paymentIcon from "../assets/payment.png";
import vehicleIcon from "../assets/MyVe.png";
import editIcon from "../assets/Edit.png";

const ProfilePanel = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column`}
        style={{
          width: '380px',
          maxWidth: '100%',
          marginTop: '60px', /* Below navbar */
          height: 'calc(100vh - 60px)',
          zIndex: 1050,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          borderBottomLeftRadius: '24px'
        }}
      >
        <div className="p-4 flex-grow-1 overflow-auto">
          <div className="text-center mb-4">
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-circle mb-3 object-fit-cover"
              style={{ width: '100px', height: '100px' }}
            />
            <h4 className="fw-bold mb-2" style={{ color: '#5b1b1b' }}>Dhaksita</h4>
            <span className="badge rounded-pill px-3 py-2" style={{ background: '#7b1e2b', fontSize: '13px' }}>Welcome!</span>
          </div>

          <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
            <li
              className="d-flex align-items-center gap-3 p-2 rounded-3"
              style={{ cursor: 'pointer', color: '#5b1b1b', fontWeight: '500' }}
              onClick={() => { navigate("/edit-profile"); onClose(); }}
              onMouseOver={(e) => e.currentTarget.style.color = '#7b1e2b'}
              onMouseOut={(e) => e.currentTarget.style.color = '#5b1b1b'}
            >
              <img src={editIcon} alt="Edit Profile" style={{ width: '24px', height: '24px' }} />
              Edit Profile
            </li>

            <li
              className="d-flex align-items-center gap-3 p-2 rounded-3"
              style={{ cursor: 'pointer', color: '#5b1b1b', fontWeight: '500' }}
              onClick={() => { navigate("/my-vehicles"); onClose(); }}
              onMouseOver={(e) => e.currentTarget.style.color = '#7b1e2b'}
              onMouseOut={(e) => e.currentTarget.style.color = '#5b1b1b'}
            >
              <img src={vehicleIcon} alt="My Vehicles" style={{ width: '24px', height: '24px' }} />
              My Vehicles
            </li>

            <li
              className="d-flex align-items-center gap-3 p-2 rounded-3"
              style={{ cursor: 'pointer', color: '#5b1b1b', fontWeight: '500' }}
              onClick={() => { navigate("/payment-methods"); onClose(); }}
              onMouseOver={(e) => e.currentTarget.style.color = '#7b1e2b'}
              onMouseOut={(e) => e.currentTarget.style.color = '#5b1b1b'}
            >
              <img src={paymentIcon} alt="Payment Method" style={{ width: '24px', height: '24px' }} />
              Payment Method
            </li>

            <li
              className="d-flex align-items-center gap-3 p-2 rounded-3"
              style={{ cursor: 'pointer', color: '#5b1b1b', fontWeight: '500' }}
              onClick={() => { navigate("/settings"); onClose(); }}
              onMouseOver={(e) => e.currentTarget.style.color = '#7b1e2b'}
              onMouseOut={(e) => e.currentTarget.style.color = '#5b1b1b'}
            >
              <img src={settingsIcon} alt="Settings" style={{ width: '24px', height: '24px' }} />
              Settings
            </li>
          </ul>

          <hr className="my-4 text-muted" />

          <button
            className="btn w-100 text-start fw-bold d-flex align-items-center gap-3 p-2 rounded-3"
            style={{ color: '#7b1e2b', background: 'none', border: 'none' }}
            onClick={() => { navigate("/"); onClose(); }}
          >
            <BiLogOut size={24} /> Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;
