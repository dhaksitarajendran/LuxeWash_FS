import { Link } from "react-router-dom";

const EmployeeImpact = () => {
  return (
    <>
      <div className="impact-container min-vh-100 p-4" style={{ background: '#f6efdf' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="welcome">
              <small className="fw-bold d-block text-uppercase" style={{ color: '#7b3a3a', letterSpacing: '1px' }}>WELCOME BACK</small>
              <h1 className="display-5 fw-bold mb-1" style={{ color: '#5b1b1b' }}>Your Impact</h1>
              <p className="m-0" style={{ color: '#7b3a3a' }}>Track your performance and work contribution</p>
            </div>
            <Link to="/employee-dashboard" className="btn btn-sm d-md-none text-white fw-bold" style={{ background: '#7b1e2b' }}>Back</Link>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="h4 fw-bold m-0" style={{ color: '#5b1b1b' }}>Today's Impact</h3>
                  <span className="badge rounded-pill text-dark fw-bold px-3 py-2" style={{ background: '#f3d9a4', color: '#7b1e2b' }}>+10% vs last week</span>
                </div>

                <div className="row g-3">
                  <div className="col-4">
                    <div className="p-3 rounded-4" style={{ background: '#fdf8ef' }}>
                      <small className="fw-bold d-block mb-2" style={{ color: '#7b3a3a' }}>TASKS</small>
                      <h2 className="h3 fw-bold m-0" style={{ color: '#7b1e2b' }}>4</h2>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-3 rounded-4" style={{ background: '#fdf8ef' }}>
                      <small className="fw-bold d-block mb-2" style={{ color: '#7b3a3a' }}>HOURS</small>
                      <h2 className="h3 fw-bold m-0" style={{ color: '#7b1e2b' }}>6.5</h2>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-3 rounded-4" style={{ background: '#fdf8ef' }}>
                      <small className="fw-bold d-block mb-2" style={{ color: '#7b3a3a' }}>SERVICES</small>
                      <h2 className="h3 fw-bold m-0" style={{ color: '#7b1e2b' }}>3</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
                <h3 className="h4 fw-bold mb-4" style={{ color: '#5b1b1b' }}>Monthly Progress</h3>

                <div className="d-flex justify-content-around py-3">
                  <div className="text-center rounded-circle d-flex flex-column align-items-center justify-content-center fw-bold" style={{ width: '90px', height: '90px', border: '8px solid #7b1e2b', color: '#7b1e2b', fontSize: '14px' }}>
                    22/30
                    <small style={{ fontSize: '11px', opacity: 0.8 }}>Tasks</small>
                  </div>
                  <div className="text-center rounded-circle d-flex flex-column align-items-center justify-content-center fw-bold" style={{ width: '90px', height: '90px', border: '8px solid #7b1e2b', color: '#7b1e2b', fontSize: '14px' }}>
                    148h
                    <small style={{ fontSize: '11px', opacity: 0.8 }}>Hours</small>
                  </div>
                  <div className="text-center rounded-circle d-flex flex-column align-items-center justify-content-center fw-bold" style={{ width: '90px', height: '90px', border: '8px solid #7b1e2b', color: '#7b1e2b', fontSize: '14px' }}>
                    91%
                    <small style={{ fontSize: '11px', opacity: 0.8 }}>On-Time</small>
                  </div>
                </div>

                <div className="mt-4">
                  <small className="fw-bold d-block mb-2 text-muted">Overall Performance</small>
                  <div className="progress" style={{ height: '10px', background: '#f3d9a4', borderRadius: '10px' }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: '78%', background: '#7b1e2b' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
                <h3 className="h5 fw-bold mb-4" style={{ color: '#5b1b1b' }}>Your Contribution</h3>

                <div className="p-4 rounded-4 mb-3 text-center" style={{ background: '#fdf8ef' }}>
                  <h2 className="display-4 fw-bold m-0" style={{ color: '#7b1e2b' }}>38</h2>
                  <p className="m-0 fw-bold small text-muted">Services Completed</p>
                </div>

                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-3 rounded-4 text-center" style={{ background: '#fdf8ef' }}>
                      <h2 className="h4 fw-bold m-0" style={{ color: '#7b1e2b' }}>12</h2>
                      <p className="m-0 small text-muted">On-Time</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-4 text-center" style={{ background: '#fdf8ef' }}>
                      <h2 className="h4 fw-bold m-0" style={{ color: '#7b1e2b' }}>1</h2>
                      <p className="m-0 small text-muted">Late Task</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm p-4 rounded-4">
                <h3 className="h5 fw-bold mb-2" style={{ color: '#5b1b1b' }}>Stability Journey</h3>
                <p className="small text-muted mb-4">Growth based on punctuality & consistency</p>

                <div className="d-flex justify-content-between text-center pt-2">
                  <div>
                    <div className="mx-auto mb-2 rounded-circle" style={{ width: '18px', height: '18px', background: '#7b1e2b' }}></div>
                    <small className="fw-bold" style={{ fontSize: '12px' }}>Starter</small>
                  </div>
                  <div>
                    <div className="mx-auto mb-2 rounded-circle" style={{ width: '18px', height: '18px', background: '#7b1e2b' }}></div>
                    <small className="fw-bold" style={{ fontSize: '12px' }}>Reliable</small>
                  </div>
                  <div>
                    <div className="mx-auto mb-2 rounded-circle" style={{ width: '18px', height: '18px', background: '#7b1e2b' }}></div>
                    <small className="fw-bold" style={{ fontSize: '12px' }}>Consistent</small>
                  </div>
                  <div>
                    <div className="mx-auto mb-2 rounded-circle" style={{ width: '18px', height: '18px', background: '#f3d9a4' }}></div>
                    <small className="fw-bold text-muted" style={{ fontSize: '12px' }}>Hero</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeImpact;
