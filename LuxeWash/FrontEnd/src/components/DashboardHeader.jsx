import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/avathar.png";
import LuxeLogo from "../assets/LuxeLogo.png";
import ProfilePanel from "./ProfilePanel";

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
        style={{ background: "linear-gradient(to left, #4a0c0c, #6b0f14)" }}
      >
        <div className="container-fluid px-4">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={LuxeLogo} width="32" height="32" alt="LuxeWash Logo" />
            <div className="d-flex flex-column lh-sm">
              <span
                className="fw-semibold"
                style={{ fontFamily: "Satisfy", color: "#f6efdf", fontSize: "20px" }}
              >
                LuxeWash
              </span>
              <small style={{ color: "#f3d9a4", fontSize: "11px" }}>
                Premium Car Care
              </small>
            </div>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-3 gap-lg-5 my-3 my-lg-0 text-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-decoration-none fw-medium position-relative" style={{ color: "#f3d9a4", fontSize: "20px", cursor: "pointer" }}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link text-decoration-none fw-medium position-relative" style={{ color: "#f3d9a4", fontSize: "20px", cursor: "pointer" }}>Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link text-decoration-none fw-medium position-relative" style={{ color: "#f3d9a4", fontSize: "20px", cursor: "pointer" }}>Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link text-decoration-none fw-medium position-relative" style={{ color: "#f3d9a4", fontSize: "20px", cursor: "pointer" }}>Contact</NavLink>
              </li>
            </ul>

            <div className="d-flex justify-content-center">
              <img
                src={avatar}
                alt="User Avatar"
                className="rounded-circle border border-2"
                style={{
                  width: "42px",
                  height: "42px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderColor: "#f6efdf",
                }}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0px; 
          width: 0;
          height: 2px;
          background: #f5c16c;
          transition: width 0.3s;
        }

        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* Backdrop for ProfilePanel */}
      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setOpen(false)}
        ></div>
      )}

      <ProfilePanel open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default DashboardHeader;
