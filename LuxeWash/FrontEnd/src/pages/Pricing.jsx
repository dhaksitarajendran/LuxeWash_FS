import { Link } from "react-router-dom";
export default function Pricing() {
  const plans = [
    {
      title: "Basic Wash",
      subtitle: "Essential exterior cleaning",
      price: "₹599",
      time: "30 min",
      features: [
        "Exterior foam wash",
        "Wheel & tire cleaning",
        "Window cleaning",
        "Hand dry finish",
      ],
      popular: false,
    },
    {
      title: "Premium Wash",
      subtitle: "Complete interior & exterior care",
      price: "₹999",
      time: "1.5 hours",
      features: [
        "Everything in Basic",
        "Interior vacuum",
        "Dashboard & console wipe",
        "Leather conditioning",
        "Tire shine",
        "Air freshener",
      ],
      popular: true,
    },
    {
      title: "Ultimate Detail",
      subtitle: "Full professional detailing",
      price: "₹2999",
      time: "3+ hours",
      features: [
        "Everything in Premium",
        "Clay bar treatment",
        "Hand wax protection",
        "Engine bay cleaning",
        "Headlight restoration",
        "Paint sealant",
        "Odor elimination",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <section className="pricing py-5" style={{ background: '#f7efdd' }}>
        <div className="container text-center">
          <h2 className="mb-2" style={{ color: '#6b0f14', fontSize: '42px' }}>Transparent Pricing</h2>
          <p className="subtitle mb-5 mx-auto" style={{ maxWidth: '700px', color: '#7b3a3a', fontSize: '16px' }}>
            Choose the package that fits your needs. All services include premium
            products and satisfaction guarantee.
          </p>

          <div className="pricing-grid row g-4 justify-content-center">
            {plans.map((plan, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div
                  className={`price-card card h-100 border-0 shadow p-4 text-center position-relative ${plan.popular ? 'transform-scale' : ''}`}
                  style={{
                    background: plan.popular ? '#f9efd9' : '#f5ecd3',
                    borderRadius: '20px',
                    transform: plan.popular ? 'scale(1.02)' : 'none',
                    transition: 'transform 0.3s'
                  }}
                >
                  {plan.popular && (
                    <div className="badge position-absolute start-50 translate-middle-x rounded-pill px-3 py-2" style={{ top: '-15px', background: '#7b1e2b', fontSize: '13px' }}>
                      ★ Most Popular
                    </div>
                  )}

                  <h3 className="h4 fw-bold mt-3" style={{ color: '#6b0f14', fontSize: '26px' }}>{plan.title}</h3>
                  <p className="plan-sub mb-4" style={{ color: '#7b3a3a' }}>{plan.subtitle}</p>

                  <div className="price fw-bold mb-1" style={{ fontSize: '36px', color: '#7b1e2b' }}>Just {plan.price}</div>
                  <div className="time mb-4" style={{ color: '#7b3a3a' }}>⏱ {plan.time}</div>

                  <ul className="list-unstyled text-start mb-4 mx-auto" style={{ maxWidth: '85%' }}>
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="mb-2" style={{ color: '#5c0a14', fontSize: '14px' }}>✔ {f}</li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link to="/booknow" className="btn w-100 fw-bold py-2" style={{ background: plan.popular ? '#7b1e2b' : 'transparent', border: '2px solid #7b1e2b', color: plan.popular ? 'white' : '#7b1e2b', borderRadius: '12px' }}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .btn:hover {
            opacity: 0.9;
          }
          @media (min-width: 992px) {
            .transform-scale {
              transform: scale(1.05) !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
