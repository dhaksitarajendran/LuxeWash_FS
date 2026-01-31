import React from "react";

export default function PerformanceChart({ employees = [], perf = {}, onUpdate = () => { } }) {
  const max = 100;
  return (
    <div className="d-flex flex-column gap-3">
      {employees.slice(0, 10).map((emp) => {
        const score = perf[emp.id] ?? 0;
        const w = Math.max(6, (score / max) * 100);
        return (
          <div key={emp.id} className="d-flex align-items-center gap-2">
            <div style={{ width: '110px' }}>
              <div className="fw-bold text-truncate" style={{ color: "#5b1b1b" }}>{emp.name}</div>
              <div className="small text-truncate" style={{ color: "#7b3a3a", fontSize: '12px' }}>{emp.role}</div>
            </div>
            <div className="flex-grow-1 position-relative rounded-pill" style={{ height: '18px', background: "#f0e8d8" }}>
              <div className="rounded-pill h-100" style={{ width: `${w}%`, background: "#7b1e2b", transition: 'width 0.3s ease' }} />
            </div>
            <div className="fw-bold text-end" style={{ width: '40px', color: "#5b1b1b" }}>{score}</div>
            <input
              type="number"
              className="form-control p-1 text-center"
              value={perf[emp.id] ?? ""}
              onChange={(e) => onUpdate(emp.id, e.target.value)}
              style={{ width: '60px', height: '30px', fontSize: '14px' }}
            />
          </div>
        );
      })}
    </div>
  );
}
