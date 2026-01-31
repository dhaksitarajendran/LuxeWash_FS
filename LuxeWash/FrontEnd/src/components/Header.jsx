import LuxeLogo from "../assets/LuxeLogo.png";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="header d-flex align-items-center justify-content-between px-4 py-2" style={{ background: 'linear-gradient(to left, #4a0c0c, #6b0f14)', height: '55px' }}>
      <div className="brand-row d-flex align-items-center gap-2">
        <img src={LuxeLogo} alt="LuxeWash Logo" style={{ height: '32px', width: '32px' }} />
        <div className="brand-text">
          <h3 className="m-0" style={{ fontFamily: '"Satisfy"', color: '#f6efdf', fontSize: '20px' }}>LuxeWash</h3>
          <span className="d-block" style={{ fontSize: '11px', color: '#f3d9a4', marginTop: '-4px' }}>Premium Car Care</span>
        </div>
      </div>

      <nav className="nav d-flex justify-content-center gap-5">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-decoration-none fw-medium position-relative" style={{ color: '#f3d9a4', fontSize: '20px', cursor: 'pointer' }}>
          Home
        </Link>
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-decoration-none fw-medium position-relative" style={{ color: '#f3d9a4', fontSize: '20px', cursor: 'pointer' }}>
          Services
        </Link>
        <Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-decoration-none fw-medium position-relative" style={{ color: '#f3d9a4', fontSize: '20px', cursor: 'pointer' }}>
          Pricing
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-decoration-none fw-medium position-relative" style={{ color: '#f3d9a4', fontSize: '20px', cursor: 'pointer' }}>
          Contact
        </Link>
      </nav>

      <div className="auth d-flex align-items-center gap-3">
        <RouterLink to="/login" className="login text-decoration-none" style={{ color: '#f3d9a4', fontSize: '18px' }}>
          Login
        </RouterLink>
        <RouterLink to="/signup">
          <button className="register btn border-0 fw-bold" style={{ background: '#f3d9a4', color: '#6b0f14', padding: '7px 18px', borderRadius: '10px' }}>Register</button>
        </RouterLink>
      </div>

      <style>{`
        .register:hover {
          background-color: #ffe4b5 !important;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 0;
          height: 2px;
          background: #f5c16c;
          transition: width 0.3s;
        }

        .nav-link.active::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}

export default Header;
