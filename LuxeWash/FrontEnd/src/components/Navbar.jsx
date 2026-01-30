import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">LuxeWash</h2>

      <div className="nav-links">
        <Link to="home" smooth={true} duration={500} offset={-70}>
          Home
        </Link>
        <Link to="service" smooth={true} duration={500} offset={-70}>
          Service
        </Link>
        <Link to="pricing" smooth={true} duration={500} offset={-70}>
          Pricing
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-70}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
