import { Link } from "react-router-dom";

function EmployeeDashboard() {
  return (
    <>
      <div className="emp-container min-vh-100 d-flex flex-column flex-md-row" style={{ background: '#f8f3de' }}>
        <aside className="emp-sidebar text-white p-3 d-none d-md-block" style={{ width: '250px', background: '#7b1e2b' }}>
          <nav className="nav flex-column gap-2">
            <Link to="/employee-dashboard" className="nav-link text-white active bg-white bg-opacity-25 rounded-3 fw-bold">Dashboard</Link>
            <Link to="/employee-impact" className="nav-link text-white hover-bg-opacity-10 rounded-3">Your Impact</Link>
            <Link to="/settings" className="nav-link text-white hover-bg-opacity-10 rounded-3">Settings</Link>
            <Link to="/editprofile" className="nav-link text-white hover-bg-opacity-10 rounded-3">Profile</Link>
            <Link to="/login" className="nav-link text-white hover-bg-opacity-10 rounded-3 mt-4 text-center bg-black bg-opacity-25">Logout</Link>
          </nav>
        </aside>

        <main className="emp-main flex-grow-1 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0" style={{ color: '#7b1e2b', fontFamily: '"Playfair Display", serif' }}>Dashboard</h2>
            <Link to="/login" className="btn btn-sm d-md-none text-white fw-bold" style={{ background: '#7b1e2b' }}>Logout</Link>
          </div>

          <section className="graph-section bg-white p-4 rounded-4 shadow-sm mb-4" style={{ background: '#fffaf0' }}>
            <h3 className="h5 fw-bold mb-3" style={{ color: '#7b1e2b', fontFamily: '"Playfair Display", serif' }}>Stability Overview</h3>
            <div className="d-flex align-items-center justify-content-center rounded-3 fs-5 fw-bold" style={{ height: '200px', background: 'linear-gradient(180deg, #efe6d1, #e6dbc3)', color: '#7b1e2b' }}>
              📊 Stability Graph
            </div>
          </section>

          <section className="stats row g-3">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-3 rounded-4 h-100">
                <h4 className="h6 mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#3a2a1f' }}>Today's Tasks</h4>
                <p className="fs-4 fw-bold mb-3" style={{ color: '#7b1e2b' }}>5 Pending</p>
                <Link to="/employee-task" className="btn btn-sm text-white fw-bold" style={{ background: '#7b1e2b' }}>
                  View Tasks
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-3 rounded-4 h-100">
                <h4 className="h6 mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#3a2a1f' }}>Completed Jobs</h4>
                <p className="fs-4 fw-bold mb-0" style={{ color: '#7b1e2b' }}>12 Today</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-3 rounded-4 h-100">
                <h4 className="h6 mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#3a2a1f' }}>Performance</h4>
                <p className="fs-4 fw-bold mb-0" style={{ color: '#7b1e2b' }}>Excellent</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default EmployeeDashboard;
