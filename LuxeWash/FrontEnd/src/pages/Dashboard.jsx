import giftIcon from '../assets/gift.png';
import carIcon from '../assets/das_car.png';
import locationIcon from '../assets/location.png';
import clockIcon from '../assets/clock.png';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard min-vh-100 p-4" style={{ background: '#f6efdf', fontFamily: '"Georgia", serif' }}>
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <div className="welcome-text">
            <h1 className="m-0 fw-bold" style={{ fontSize: '42px', color: '#6b4a4a' }}>Welcome,</h1>
            <p className="mt-1 mb-0 fw-bold" style={{ color: '#7b1e2b' }}>Get started by booking your first car wash service.</p>
          </div>

          <div className="welcome-actions d-flex gap-2">
            <button className="btn fw-bold px-3 py-2 rounded-3" style={{ background: 'transparent', border: '1.5px solid #7b1e2b', color: '#7b1e2b' }}>Notification</button>
            <button className="btn fw-bold px-3 py-2 rounded-3 text-white" style={{ background: '#7b1e2b', border: 'none' }}>New Booking</button>
          </div>
        </div>

        <div className="banner p-4 rounded-4 text-white d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3" style={{ background: '#7b1e2b' }}>
          <div className="d-flex align-items-center gap-3">
            <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <img src={giftIcon} alt="Gift" style={{ width: '36px', height: '36px' }} />
            </div>
            <div>
              <h2 className="h4 m-0 fw-bold">Welcome to LuxeWash!</h2>
              <p className="mt-1 mb-0 small opacity-75">
                Book your first service and get 20% off. Start earning loyalty
                points today!
              </p>
            </div>
          </div>
          <button className="btn fw-bold px-4 py-2 rounded-4" style={{ background: '#f6efdf', color: '#7b1e2b', border: 'none' }}>Book Your First Wash</button>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 rounded-4 p-4 mb-4 shadow-sm">
              <h3 className="h5 fw-bold mb-4" style={{ color: '#7b1e2b' }}>Upcoming Bookings</h3>
              <div className="text-center py-5" style={{ color: '#c8a4a4' }}>
                <img src={carIcon} alt="Car" className="mb-3 opacity-50" style={{ width: '64px', height: '64px' }} />
                <p className="mb-1">No upcoming bookings</p>
                <p className="mb-3">Book your first service to get started!</p>
                <button className="btn fw-bold px-3 py-2 rounded-3 text-white" style={{ background: '#7b1e2b', border: 'none' }}>Book Now</button>
              </div>
            </div>

            <div className="card border-0 rounded-4 p-4 shadow-sm">
              <h3 className="h5 fw-bold mb-4" style={{ color: '#7b1e2b' }}>Recent History</h3>
              <div className="text-center py-5" style={{ color: '#c8a4a4' }}>
                <img src={clockIcon} alt="Service History" className="mb-3 opacity-50" style={{ width: '64px', height: '64px' }} />
                <p className="mb-1">No service history yet</p>
                <p className="mb-0">Your completed services will appear here.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 rounded-4 p-4 shadow-sm h-100">
              <h3 className="h5 fw-bold mb-4" style={{ color: '#7b1e2b' }}>Our Location</h3>
              <div className="d-flex align-items-center justify-content-center rounded-3 mb-3" style={{ height: '160px', background: '#fffaedf7' }}>
                <img src={locationIcon} alt="Location" className="opacity-50" style={{ width: '40px', height: '40px' }} />
              </div>

              <p className="fw-bold mb-3 small" style={{ color: '#7b1e2b' }}>
                No. 12, Main Road,<br />
                Anna Nagar, Coimbatore – 625020,<br />
                Tamil Nadu.
              </p>
              <button className="btn w-100 fw-bold px-3 py-2 rounded-3 mt-auto" style={{ background: 'transparent', border: '1.5px solid #7b1e2b', color: '#7b1e2b' }}>Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
