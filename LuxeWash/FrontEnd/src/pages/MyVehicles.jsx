import { useState } from "react";

const MyVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    model: "",
    color: "",
    number: ""
  });

  const handleAddVehicle = () => {
    if (!form.name || !form.model) return;

    setVehicles([...vehicles, { ...form, image }]);
    setForm({ name: "", model: "", color: "", number: "" });
    setImage(null);
  };

  const handleUpdateImage = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newVehicles = [...vehicles];
      newVehicles[index].image = URL.createObjectURL(file);
      setVehicles(newVehicles);
    }
  };

  return (
    <>
      <div className="vehicle-wrapper min-vh-100 p-4" style={{ background: '#f6efdf' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="vehicle-title mb-4 fw-bold" style={{ color: '#7b1e2b' }}>My Vehicles</h1>

          <div className="add-card card border-0 shadow-sm p-4 mb-5 rounded-4" style={{ background: '#ffffff' }}>
            <h3 className="h5 fw-bold mb-3" style={{ color: '#7b1e2b' }}>Add New Vehicle</h3>

            <div className="row g-3">
              <div className="col-md-6">
                <input
                  className="form-control border-0 p-3 rounded-3"
                  placeholder="Vehicle Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ background: '#f6efdf', fontSize: '14px' }}
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control border-0 p-3 rounded-3"
                  placeholder="Model"
                  value={form.model}
                  onChange={(e) => setForm({ ...form, model: e.target.value })}
                  style={{ background: '#f6efdf', fontSize: '14px' }}
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control border-0 p-3 rounded-3"
                  placeholder="Color"
                  value={form.color}
                  onChange={(e) => setForm({ ...form, color: e.target.value })}
                  style={{ background: '#f6efdf', fontSize: '14px' }}
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control border-0 p-3 rounded-3"
                  placeholder="Vehicle Number"
                  value={form.number}
                  onChange={(e) => setForm({ ...form, number: e.target.value })}
                  style={{ background: '#f6efdf', fontSize: '14px' }}
                />
              </div>
            </div>

            <label className="upload-box d-flex flex-column align-items-center justify-content-center mt-3 rounded-3"
              style={{ height: '180px', border: '2px dashed #7b1e2b', background: '#f6efdf', cursor: 'pointer', color: '#7b1e2b', overflow: 'hidden' }}>
              {image ? (
                <img src={image} alt="Vehicle Preview" className="w-100 h-100 object-fit-cover" />
              ) : (
                <>
                  <span className="fw-semibold mb-2">+ Upload Vehicle Image</span>
                  <span className="btn btn-sm text-white" style={{ background: '#7b1e2b' }}>Choose File</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
              />
            </label>

            <button
              className="btn btn-primary fw-bold px-4 py-2 mt-4 rounded-3 text-white border-0"
              style={{ background: '#7b1e2b' }}
              onClick={handleAddVehicle}
            >
              Add Vehicle
            </button>
          </div>

          <div className="vehicle-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {vehicles.map((v, i) => (
              <div className="col" key={i}>
                <div className="card h-100 border-0 shadow-sm p-3 rounded-4">
                  <div className="position-relative mb-3">
                    {v.image ? (
                      <img src={v.image} alt="Vehicle" className="rounded-3 w-100 object-fit-cover" style={{ height: '160px' }} />
                    ) : (
                      <div className="d-flex align-items-center justify-content-center rounded-3 w-100" style={{ height: '160px', background: '#eee' }}>
                        <span className="text-muted small">No Image</span>
                      </div>
                    )}

                    <button
                      className="btn btn-sm btn-light position-absolute bottom-0 end-0 m-2 shadow-sm"
                      onClick={() => document.getElementById(`vehicle-image-update-${i}`).click()}
                      style={{ fontSize: '12px' }}
                    >
                      📷 Change
                    </button>
                    <input
                      type="file"
                      id={`vehicle-image-update-${i}`}
                      accept="image/*"
                      hidden
                      onChange={(e) => handleUpdateImage(i, e)}
                    />
                  </div>

                  <h3 className="h6 fw-bold mb-2" style={{ color: '#7b1e2b' }}>{v.name}</h3>
                  <div className="small text-muted">model: {v.model}</div>
                  <div className="small text-muted">color: {v.color}</div>
                  <div className="small text-muted">no: {v.number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyVehicles;
