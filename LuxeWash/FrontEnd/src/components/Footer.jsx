import LuxeLogo from '../assets/LuxeLogo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer text-white pt-5 pb-3 px-4 px-md-5" style={{ background: 'linear-gradient(to left, #4a0c0c, #6b0f14)' }}>
        <div className="row g-4">

          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img src={LuxeLogo} alt="Luxe Logo" style={{ height: '45px', width: '45px', objectFit: 'contain' }} />
              <div>
                <h3 className="m-0" style={{ fontFamily: '"Satisfy"', color: '#f6efdf', fontSize: '22px' }}>LuxeWash</h3>
                <span className="d-block" style={{ fontSize: '12px', color: '#f3d9a4' }}>Premium Car Care</span>
              </div>
            </div>
            <p style={{ color: '#ead6a9', fontSize: '14px', lineHeight: '1.8' }}>Premium car washing and detailing services.</p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-3" style={{ color: '#f6efdf', fontSize: '18px' }}>Quick Links</h5>
            <ul className="list-unstyled" style={{ fontSize: '14px', lineHeight: '2' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><a href="/#services" className="footer-link">Services</a></li>
              <li><a href="/#pricing" className="footer-link">Pricing</a></li>
              <li><Link to="/booknow" className="footer-link">Book Now</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-3" style={{ color: '#f6efdf', fontSize: '18px' }}>Services</h5>
            <ul className="list-unstyled" style={{ fontSize: '14px', lineHeight: '2' }}>
              <li><a href="/#services" className="footer-link">Exterior Wash</a></li>
              <li><a href="/#services" className="footer-link">Interior Cleaning</a></li>
              <li><a href="/#services" className="footer-link">Detailing</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3" style={{ color: '#f6efdf', fontSize: '18px' }}>Contact</h5>
            <p style={{ color: '#ead6a9', fontSize: '14px', lineHeight: '1.8' }}>
              (555) 123-4567<br />help@luxewash.com
            </p>
          </div>
        </div>

        <p className="text-center mt-5 pt-3" style={{ borderTop: '1px solid #79612c', fontSize: '13px', color: '#f3d9a4' }}>
          © 2026 LuxeWash. All rights reserved.
        </p>
      </footer >
      <style>{`
        .footer-link {
          color: #ead6a9;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default Footer;
