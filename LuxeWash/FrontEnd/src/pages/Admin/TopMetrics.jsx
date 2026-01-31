import React from "react";

export default function TopMetrics({ employees = [], servicesCount = 0 }) {
  return (
    <div className="row g-4 mb-4" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="col-md-4">
        <div className="card border-0 shadow-sm p-3 rounded-4 h-100">
          <div className="fw-bold mb-2" style={{ color: "#7b1e2b", fontSize: '13px' }}>Total Employees</div>
          <div className="fw-bold" style={{ fontSize: '28px', color: "#5b1b1b" }}>{employees.length}</div>
          <div className="mt-1" style={{ color: "#7b3a3a", fontSize: '13px' }}>All registered staff</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm p-3 rounded-4 h-100">
          <div className="fw-bold mb-2" style={{ color: "#7b1e2b", fontSize: '13px' }}>Total Services</div>
          <div className="fw-bold" style={{ fontSize: '28px', color: "#5b1b1b" }}>{servicesCount.toLocaleString()}</div>
          <div className="mt-1" style={{ color: "#7b3a3a", fontSize: '13px' }}>Services completed since opening</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow-sm p-3 rounded-4 h-100">
          <div className="fw-bold mb-2" style={{ color: "#7b1e2b", fontSize: '13px' }}>Employees Working</div>
          <div className="fw-bold" style={{ fontSize: '28px', color: "#5b1b1b" }}>{employees.filter((e) => e.active).length}</div>
          <div className="mt-1" style={{ color: "#7b3a3a", fontSize: '13px' }}>Currently on duty</div>
        </div>
      </div>
    </div>
  );
}
