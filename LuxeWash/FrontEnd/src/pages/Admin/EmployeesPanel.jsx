import React from "react";

export default function EmployeesPanel({ employees = [], name, role, setName, setRole, onAdd, onDelete }) {
  return (
    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
      <h3 className="h5 fw-bold mb-3" style={{ color: "#5b1b1b" }}>Employees</h3>

      <form onSubmit={onAdd} className="d-flex gap-2 mb-4">
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Employee name"
          style={{ borderRadius: '8px' }}
        />
        <input
          className="form-control"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          style={{ maxWidth: '140px', borderRadius: '8px' }}
        />
        <button className="btn text-white fw-bold px-3" style={{ background: "#7b1e2b", borderRadius: '8px' }}>Add</button>
      </form>

      <div className="d-flex flex-column gap-2">
        {employees.length === 0 && <p className="text-muted">No employees yet.</p>}
        {employees.map((emp) => (
          <div key={emp.id} className="d-flex justify-content-between align-items-center p-3 border rounded-3">
            <div>
              <div className="fw-bold" style={{ color: "#5b1b1b" }}>{emp.name}</div>
              <div className="small" style={{ color: "#7b3a3a" }}>{emp.role}</div>
            </div>
            <div>
              <button
                onClick={() => onDelete(emp.id)}
                className="btn btn-sm btn-outline-danger fw-bold border-0"
                style={{ color: "#7b1e2b", background: "transparent" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
