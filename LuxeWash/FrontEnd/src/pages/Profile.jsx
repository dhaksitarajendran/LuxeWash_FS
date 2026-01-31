import React from 'react'

export default function Profile() {
  return (
    <div className="profile-page min-vh-100 d-flex justify-content-center align-items-center p-4" style={{ background: '#f6efdf' }}>
      <div className="card border-0 shadow-lg p-4 rounded-4 w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3 fw-bold fs-2 text-white" style={{ width: '80px', height: '80px', background: '#7b1e2b' }}>
            D
          </div>
          <div>
            <h2 className="h4 fw-bold mb-1" style={{ color: '#5b1b1b' }}>Dhaksita</h2>
            <p className="small text-muted mb-0">New Member</p>
          </div>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0 px-0 py-3 fw-semibold text-dark cursor-pointer" style={{ cursor: 'pointer' }}>Edit Profile</li>
          <li className="list-group-item border-0 px-0 py-3 fw-semibold text-dark cursor-pointer" style={{ cursor: 'pointer' }}>My Vehicles</li>
          <li className="list-group-item border-0 px-0 py-3 fw-semibold text-dark cursor-pointer" style={{ cursor: 'pointer' }}>Payment Method</li>
          <li className="list-group-item border-0 px-0 py-3 fw-semibold text-dark cursor-pointer" style={{ cursor: 'pointer' }}>Settings</li>
          <li className="list-group-item border-0 px-0 py-3 fw-bold cursor-pointer" style={{ color: '#7b1e2b', cursor: 'pointer' }}>Sign Out</li>
        </ul>
      </div>
    </div>
  )
}
