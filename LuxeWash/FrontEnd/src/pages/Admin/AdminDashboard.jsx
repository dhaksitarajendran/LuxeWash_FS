import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SmallBarChart from "./SmallBarChart";
import PerformanceChart from "./PerformanceChart";
import AdminNotes from "./AdminNotes";
import TopMetrics from "./TopMetrics";
import EmployeesPanel from "./EmployeesPanel";

const sampleRevenue = [5000, 7200, 6800, 8500, 9000, 9500];
const sampleProfit = [1200, 1800, 1500, 2200, 2400, 2600];

const seededEmployees = [
  { id: 1, name: "Ajay", role: "Ceramic Coating Specialist", active: true },
  { id: 2, name: "Deepak", role: "Engine Wash Technician", active: true },
  { id: 3, name: "Kavita", role: "Cashier", active: true },
  { id: 4, name: "Rajesh", role: "Driver / Vehicle Mover", active: true },
  { id: 5, name: "Sangeeta", role: "Booking Agent", active: true },
  { id: 6, name: "Vikram", role: "Team Leader", active: true },
  { id: 7, name: "Nisha", role: "Sales Coordinator", active: false },
  { id: 8, name: "Ganesh", role: "Floor Coordinator", active: false },
  { id: 9, name: "Javed", role: "Operations Manager", active: false },
  { id: 10, name: "Ravi", role: "Interior Cleaning (Car Detailer)", active: true },
  { id: 11, name: "Priya", role: "Exterior Wash (Car Wash Attendant)", active: true },
  { id: 12, name: "Amit", role: "Full Detailing (Automotive Detailer)", active: false },
  { id: 13, name: "Suresh", role: "Paint Correction Technician", active: false },
  { id: 14, name: "Manju", role: "Customer Service Representative/Booking Agent", active: true },
  { id: 15, name: "Basavaraj", role: "Manager / Supervisor", active: true },
];

const seededFeedbacks = [
  { id: 1001, text: "The online booking system was incredibly easy to use! It took me less than a minute to schedule my full detailing service.", when: new Date().toLocaleString(), responded: false },
  { id: 1002, text: "I appreciated the instant confirmation email and the reminder text message. Very professional and helpful.", when: new Date().toLocaleString(), responded: false },
  { id: 1003, text: "The ability to choose specific service packages and see the 'from' pricing clearly made my decision easy and transparent.", when: new Date().toLocaleString(), responded: false },
];

const getSeededPerf = () => {
  const seededPerf = {};
  const sampleScores = [92, 85, 78, 81, 88, 74, 69, 73, 80, 86, 79, 75, 82, 77, 90];
  seededEmployees.forEach((emp, idx) => {
    seededPerf[emp.id] = sampleScores[idx % sampleScores.length];
  });
  return seededPerf;
};

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem("employees");
    return stored ? JSON.parse(stored) : seededEmployees;
  });

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [feedbacks, setFeedbacks] = useState(() => {
    const stored = localStorage.getItem("feedbacks");
    return stored ? JSON.parse(stored) : seededFeedbacks;
  });

  const [servicesCount] = useState(() => {
    return Number(localStorage.getItem("servicesCount") || 1250);
  });

  const [employeePerf, setEmployeePerf] = useState(() => {
    const stored = localStorage.getItem("employeePerf");
    return stored ? JSON.parse(stored) : getSeededPerf();
  });

  useEffect(() => {
    if (localStorage.getItem("adminAuth") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("servicesCount", String(servicesCount));
  }, [servicesCount]);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  useEffect(() => {
    localStorage.setItem("employeePerf", JSON.stringify(employeePerf));
  }, [employeePerf]);

  const addEmployee = (e) => {
    e.preventDefault();
    if (!name) return;
    const newEmp = { id: Date.now(), name, role };
    setEmployees((s) => [newEmp, ...s]);
    setName("");
    setRole("");
  };

  const deleteEmployee = (id) => {
    if (!confirm("Delete this employee?")) return;
    setEmployees((s) => s.filter((x) => x.id !== id));
  };


  const updateEmployeeScore = (id, score) => {
    setEmployeePerf((s) => ({ ...s, [id]: Math.max(0, Math.min(100, Number(score))) }));
  };

  const randomizeScores = () => {
    setEmployeePerf((s) => {
      const out = { ...s };
      Object.keys(out).forEach((k) => {
        out[k] = 60 + Math.floor(Math.random() * 41);
      });
      return out;
    });
  };

  return (
    <div className="min-vh-100 p-4" style={{ background: "#f6efdf" }}>
      <div className="d-flex justify-content-between align-items-center mx-auto mb-4" style={{ maxWidth: '1200px' }}>
        <div>
          <h1 className="fw-bold m-0" style={{ color: "#5b1b1b" }}>Overview</h1>
          <small className="text-muted fw-bold" style={{ color: "#7b3a3a" }}>Manage employees • View revenue & profit • Review feedback</small>
        </div>
      </div>

      <TopMetrics employees={employees} servicesCount={servicesCount} />

      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="row g-4 d-flex align-items-start">
          <div className="col-lg-8">
            <section className="bg-white p-4 rounded-4 shadow-sm mb-4">
              <h3 className="h5 fw-bold mb-3" style={{ color: "#5b1b1b" }}>Revenue & Profit</h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 rounded-4" style={{ background: "#fff", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" }}>
                    <small className="fw-bold d-block mb-3" style={{ color: "#7b3a3a" }}>Revenue (last months)</small>
                    <SmallBarChart values={sampleRevenue} height={140} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded-4" style={{ background: "#fff", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" }}>
                    <small className="fw-bold d-block mb-3" style={{ color: "#7b3a3a" }}>Profit (last months)</small>
                    <SmallBarChart values={sampleProfit} height={140} />
                  </div>
                </div>
              </div>
            </section>

            <EmployeesPanel employees={employees} name={name} role={role} setName={setName} setRole={setRole} onAdd={addEmployee} onDelete={deleteEmployee} />
          </div>

          <aside className="col-lg-4">
            <section className="bg-white p-4 rounded-4 shadow-sm mb-4">
              <h3 className="h5 fw-bold mb-3" style={{ color: "#5b1b1b" }}>Employee Performance</h3>
              <div>
                <PerformanceChart employees={employees} perf={employeePerf} onUpdate={updateEmployeeScore} />
                <div className="mt-3">
                  <button onClick={randomizeScores} className="btn btn-sm text-white fw-bold px-3 py-2 rounded-3" style={{ background: "#7b1e2b", border: "none" }}>Recalculate Scores</button>
                </div>
              </div>
            </section>

            <section className="bg-white p-4 rounded-4 shadow-sm">
              <h3 className="h5 fw-bold mb-3" style={{ color: "#5b1b1b" }}>Admin Notes</h3>
              <div>
                <AdminNotes feedbacks={feedbacks} onAdd={(t) => {
                  const f = { id: Date.now(), text: t, when: new Date().toLocaleString(), responded: false };
                  setFeedbacks((s) => [f, ...s]);
                }} onToggleRespond={(id) => setFeedbacks((s) => s.map((f) => (f.id === id ? { ...f, responded: !f.responded } : f)))} />
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
