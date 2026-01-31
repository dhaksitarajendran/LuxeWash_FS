import bg from "../assets/bg.png";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import Services from "./Services";
import Pricing from "./Pricing";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <section id="home" className="hero position-relative vh-100">
        <div className="overlay h-100 d-flex align-items-center" style={{ background: 'rgba(92, 10, 20, 0.85)', paddingLeft: '80px' }}>
          <div className="content text-white" style={{ maxWidth: '600px' }}>
            <span className="badge mb-4" style={{ background: '#7c1220', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', color: '#f3d9a4' }}> Premium Car Care Since 2009</span>
            <div className="brand-texts d-flex flex-column align-items-start lh-1 mb-4">
              <h2 className="line1 m-0 fw-bold" style={{ fontFamily: '"Playfair Display SC", serif', color: '#f6efdf', fontSize: '56px' }}>PREMIUM CAR WASH</h2>
              <h2 className="line2 fw-bold" style={{ fontFamily: '"Playfair Display SC", serif', color: '#f3d9a4', fontSize: '40px', marginTop: '-2px' }}>& DETAILING SERVICES</h2>
            </div>


            <p className="mb-4" style={{ color: '#f3d9a4', fontSize: '16px', lineHeight: '1.8' }}>
              Professional care for your car fast, safe, and reliable.<br></br>
              Experience the luxury your vehicle deserves.
            </p>

            <div className="buttons d-flex gap-3">
              <RouterLink to="/booknow" className="btn fw-bold px-4 py-2" style={{ background: '#f3d9a4', color: '#6b0f14', borderRadius: '10px' }}>Book Now</RouterLink>

              <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="btn fw-bold px-4 py-2" style={{ background: 'transparent', color: '#f3d9a4', border: '2px solid #f3d9a4', borderRadius: '10px', cursor: 'pointer' }}>
                View Services
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .hero {
            background: url(${bg}) center/cover no-repeat;
          }

          /* Hover effects that are hard to do with inline styles */
          .btn-primary-custom:hover {
            background: #ffe4b5 !important;
          }
          
          .btn-secondary-custom:hover {
            background: rgba(243, 217, 164, 0.15) !important;
          }
        `}</style>
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;