import wash from "../assets/exterior.png";
import interior from "../assets/Interior.png";
import detailing from "../assets/Full Detailing.png";
import ceramic from "../assets/Ceramic Coating.png";
import engine from "../assets/Engine Wash.png";
import paint from "../assets/Paint Correction.png";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Exterior Wash",
      price: "₹299",
      img: wash,
      desc: "Complete exterior cleaning with premium foam wash and hand dry finish."
    },
    {
      title: "Interior Cleaning",
      price: "₹499",
      img: interior,
      desc: "Deep vacuum, dashboard wipe, seat cleaning, and air freshening."
    },
    {
      title: "Full Detailing",
      price: "₹999",
      img: detailing,
      desc: "Complete interior and exterior detailing with paint protection."
    },
    {
      title: "Ceramic Coating",
      price: "₹599",
      img: ceramic,
      desc: "Professional ceramic coating for long-lasting paint protection."
    },
    {
      title: "Engine Wash",
      price: "₹399",
      img: engine,
      desc: "Washing an engine bay improves aesthetics and aids maintenance."
    },
    {
      title: "Paint Correction",
      price: "₹299",
      img: paint,
      desc: "Eliminate surface scratches and restore a showroom shine."
    }
  ];

  return (
    <>
      <section className="services py-5" style={{ background: '#f6efdf' }}>
        <div className="container text-center">
          <h2 className="mb-2" style={{ color: '#6b0f14' }}>Our Services</h2>
          <h1 className="mb-4 fw-bold" style={{ fontSize: '42px', color: '#6b0f14' }}>Premium Care for Your Vehicle</h1>
          <p className="mb-5 lead">
            From quick washes to full detailing, we offer comprehensive car care solutions.
          </p>

          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border-0 shadow-sm text-start p-4" style={{ background: '#f9f0da', borderRadius: '20px' }}>
                  <div className="icon-box d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', background: '#e8d4b0', borderRadius: '12px' }}>
                    <img src={s.img} alt={s.title} style={{ height: '30px', width: '30px', objectFit: 'contain' }} />
                  </div>
                  <h3 className="h4 fw-bold mb-2" style={{ color: '#6b0f14' }}>{s.title}</h3>
                  <p className="mb-3 flex-grow-1">{s.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="fw-bold" style={{ color: '#6b0f14' }}>From {s.price}</span>
                    <Link to="/booknow" className="btn fw-bold rounded-pill px-3 py-1" style={{ background: '#6b0f14', color: 'white' }}>Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .btn:hover {
            background-color: #4a0c0c !important;
            color: white !important;
          }
        `}</style>
      </section>
    </>
  );
}

export default Services;
