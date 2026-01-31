import { Link } from "react-router-dom";

function EmployeeTask() {
  const tasks = [
    { id: 1, title: "Exterior Wash – Sedan", status: "Pending", time: "10:00 AM" },
    { id: 2, title: "Interior Cleaning – SUV", status: "Pending", time: "11:30 AM" },
    { id: 3, title: "Full Detailing – Hatchback", status: "Completed", time: "09:00 AM" },
    { id: 4, title: "Engine Wash – Sedan", status: "Pending", time: "02:00 PM" },
  ];

  return (
    <>
      <div className="task-container min-vh-100 d-flex flex-column flex-md-row" style={{ background: '#f8f3de' }}>
        <aside className="task-sidebar text-white p-3 d-none d-md-block" style={{ width: '250px', background: '#7b1e2b' }}>
          <nav className="nav flex-column gap-2">
            <Link to="/employee-dashboard" className="nav-link text-white hover-bg-opacity-10 rounded-3">Dashboard</Link>
            <Link to="/employee-impact" className="nav-link text-white hover-bg-opacity-10 rounded-3">Your Impact</Link>
            <Link to="/employee-tasks" className="nav-link text-white active bg-white bg-opacity-25 rounded-3 fw-bold">Tasks</Link>
            <Link to="/settings" className="nav-link text-white hover-bg-opacity-10 rounded-3">Settings</Link>
            <Link to="/editprofile" className="nav-link text-white hover-bg-opacity-10 rounded-3">Profile</Link>
            <Link to="/login" className="nav-link text-white hover-bg-opacity-10 rounded-3 mt-4 text-center bg-black bg-opacity-25">Logout</Link>
          </nav>
        </aside>

        <main className="task-main flex-grow-1 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0" style={{ fontFamily: '"Playfair Display", serif', color: '#7b1e2b' }}>My Tasks</h2>
            <Link to="/employee-dashboard" className="btn btn-sm d-md-none text-white fw-bold" style={{ background: '#7b1e2b' }}>Back</Link>
          </div>

          <div className="task-list d-flex flex-column gap-3">
            {tasks.map((task) => (
              <div key={task.id} className="task-card card border-0 shadow-sm p-3 rounded-4 d-flex flex-row justify-content-between align-items-center">
                <div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: '#3a2a1f' }}>{task.title}</h4>
                  <small className="text-muted">Scheduled at {task.time}</small>
                </div>

                <span
                  className={`badge rounded-pill px-3 py-2 fw-bold text-uppercase ${task.status === 'Completed' ? 'bg-success bg-opacity-25 text-success' : 'bg-warning bg-opacity-25 text-warning'}`}
                  style={{ fontSize: '12px', letterSpacing: '0.5px' }}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>

          <Link to="/employee-dashboard" className="text-decoration-none fw-bold d-inline-block mt-4" style={{ color: '#7b1e2b' }}>
            ← Back to Dashboard
          </Link>
        </main>
      </div>
    </>
  );
}

export default EmployeeTask;
